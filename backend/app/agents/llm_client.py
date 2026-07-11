"""OpenRouter client for the two LLM-backed roles in the system:

  - TWIN_MODEL      : batched per-twin verdict scoring (high volume -> cheapest model)
  - MEDIATOR_MODEL   : counter-proposal rationale writing (low volume -> can be a
                        stronger model later without touching twin-scoring cost)

Both default to the same cheapest-effective model. Every call goes through the
content-hash cache (cache.py) first. If no OPENROUTER_API_KEY is configured, both
functions return None so callers fall back to the free rule-based path — the same
graceful-degrade pattern used everywhere else in this app (flights/weather/places).
"""
from __future__ import annotations

import json
import os

import httpx

from app.agents import budget_guard, cache
from app.config import ENV_PATH
from dotenv import load_dotenv

# Self-loading (not just relying on app.config having run first): this module
# controls real spend, so it must not silently no-op just because something
# imported it before app.config did (e.g. a standalone script or test).
load_dotenv(ENV_PATH, override=False)

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
DEFAULT_MODEL = "google/gemini-2.5-flash-lite"   # cheapest-effective on OpenRouter as of 2026-07 ($0.10/$0.40 per 1M tok)


def _api_key() -> str:
    return os.environ.get("OPENROUTER_API_KEY", "")


def has_llm() -> bool:
    return bool(_api_key())


def twin_model() -> str:
    return os.environ.get("TWIN_MODEL", DEFAULT_MODEL)


def mediator_model() -> str:
    return os.environ.get("MEDIATOR_MODEL", DEFAULT_MODEL)


class LLMStats:
    """Per-process call/cache counters, surfaced in the negotiation result so cost
    is always visible, not hidden inside logs."""
    calls_made = 0
    cache_hits = 0

    @classmethod
    def reset(cls):
        cls.calls_made = 0
        cls.cache_hits = 0


def _per_run_cap() -> int:
    return int(os.environ.get("MAX_LLM_CALLS_PER_RUN", "10"))


def _call_openrouter(model: str, system: str, user: str, max_tokens: int = 700) -> dict | None:
    """One HTTP round-trip, structured JSON in, structured JSON out. No agentic
    tool-calling loop — context is pre-fetched by the caller and stuffed into `user`.

    Every call passes through three independent, hard guardrails before it's
    allowed to spend money: a per-negotiation-run cap (in-process, resets each
    run), and persisted per-minute/per-day caps (budget_guard.py, survive process
    restarts). Any guardrail tripping is NOT an error — it's treated exactly like
    a network failure: log it and fall back to the free rule-based scorer."""
    key = _api_key()
    if not key:
        return None

    if LLMStats.calls_made >= _per_run_cap():
        print(f"[budget] per-run cap reached ({LLMStats.calls_made}/{_per_run_cap()}) — falling back to rule-based")
        return None

    allowed, reason = budget_guard.allow_call()
    if not allowed:
        print(f"[budget] blocked — {reason} — falling back to rule-based")
        return None

    try:
        resp = httpx.post(
            OPENROUTER_URL,
            headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
            json={
                "model": model,
                "messages": [{"role": "system", "content": system}, {"role": "user", "content": user}],
                "max_tokens": max_tokens,
                "temperature": 0.3,
                "response_format": {"type": "json_object"},
            },
            timeout=30,
        )
        resp.raise_for_status()
        content = resp.json()["choices"][0]["message"]["content"]
        budget_guard.record_call()  # count it now that we know it actually went through
        return json.loads(content)
    except Exception as exc:  # network / quota / malformed JSON -> caller falls back to rules
        print(f"[openrouter] call failed, falling back to rule-based: {exc}")
        return None


def batched_twin_scores(twins_context: list[dict], proposal_summary: str) -> dict | None:
    """ONE call scores ALL twins at once (not one call per twin). `twins_context` is
    a list of {member_name, identity_summary, memory_hits} already pre-fetched from
    ChromaDB/GraphRAG by the caller. Returns {member_name: {score, verdict, reasoning}}
    or None (-> caller uses the rule-based scorer instead)."""
    model = twin_model()
    payload = {"twins": twins_context, "proposal": proposal_summary}
    key = cache.cache_key(model=model, purpose="twin_scores", payload=payload)
    cached = cache.get(key)
    if cached is not None:
        LLMStats.cache_hits += 1
        return cached

    system = (
        "You are scoring a trip proposal from the perspective of MULTIPLE travelers at once. "
        "For EACH traveler, judge how well the proposal matches their stated likes/dislikes/budget. "
        "Respond only in English, including any place or destination names (transliterate if needed). "
        "Return strict JSON: {\"verdicts\": [{\"member_name\": str, \"score\": 0-100, "
        "\"verdict\": \"ACCEPT\"|\"NEUTRAL\"|\"REJECT\", \"reasoning\": \"one sentence, in character\"}]}"
    )
    user = json.dumps(payload, indent=2)
    result = _call_openrouter(model, system, user)
    if result is None:
        return None
    LLMStats.calls_made += 1
    cache.put(key, result)
    return result


def mediator_rationale(rejecting_twins: list[dict], alternatives: list[dict]) -> dict | None:
    """ONE call: given who rejected and why, plus GraphRAG-sourced alternatives
    (already fetched — no tool loop), write the counter-proposal's rationale text."""
    model = mediator_model()
    payload = {"rejections": rejecting_twins, "alternatives": alternatives}
    key = cache.cache_key(model=model, purpose="mediator_rationale", payload=payload)
    cached = cache.get(key)
    if cached is not None:
        LLMStats.cache_hits += 1
        return cached

    system = (
        "You are a trip-planning mediator. Some travelers rejected a proposal. Given their "
        "reasons and a list of candidate alternatives, pick the best replacement(s) and write "
        "a short rationale. Respond only in English, including any place names (transliterate "
        "if needed — e.g. write \"Marrakech\", not the Arabic or Tifinagh script). "
        "Return strict JSON: {\"chosen_ids\": [str,...], \"note\": str}"
    )
    user = json.dumps(payload, indent=2)
    result = _call_openrouter(model, system, user, max_tokens=400)
    if result is None:
        return None
    LLMStats.calls_made += 1
    cache.put(key, result)
    return result
