"""Hard spend guardrails for OpenRouter calls — separate from the cost-reduction
design (ambiguous-zone gating, batching, caching in llm_client.py/reasoner.py),
this is the last-resort circuit breaker: even if something upstream misbehaves
(a bug causes many rounds, a bad actor hits the API repeatedly, a huge group),
these limits cannot be exceeded. All limits persist in the same SQLite file as
the response cache, so they hold across process restarts and are effective even
if the app is horizontally scaled to multiple workers.

Three independent caps, all configurable via env vars, all with sane free-tier
-friendly defaults:
  MAX_LLM_CALLS_PER_MINUTE  (default 20)  — absorbs a runaway burst
  MAX_LLM_CALLS_PER_DAY     (default 200) — absorbs sustained abuse/bugs
  MAX_LLM_CALLS_PER_RUN     (default 10)  — enforced separately, in mediator.py
                                            via llm_client.LLMStats (in-process,
                                            reset per negotiation run)
"""
from __future__ import annotations

import os
import sqlite3
from pathlib import Path
from threading import Lock

LOG_PATH = Path(__file__).resolve().parents[2] / "data" / "llm_cache.sqlite3"  # shares the cache db
_lock = Lock()


def _conn() -> sqlite3.Connection:
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(LOG_PATH)
    conn.execute("CREATE TABLE IF NOT EXISTS llm_call_log (id INTEGER PRIMARY KEY AUTOINCREMENT, ts TEXT NOT NULL)")
    return conn


def _limits() -> tuple[int, int]:
    per_minute = int(os.environ.get("MAX_LLM_CALLS_PER_MINUTE", "20"))
    per_day = int(os.environ.get("MAX_LLM_CALLS_PER_DAY", "200"))
    return per_minute, per_day


def allow_call() -> tuple[bool, str]:
    """Checks the persisted rate/day limits WITHOUT recording a call. Call
    `record_call()` only after the call actually succeeds — a failed/skipped
    call shouldn't count against the budget."""
    per_minute, per_day = _limits()
    with _lock, _conn() as conn:
        minute_count = conn.execute(
            "SELECT COUNT(*) FROM llm_call_log WHERE ts >= datetime('now', '-1 minute')"
        ).fetchone()[0]
        if minute_count >= per_minute:
            return False, f"rate limit: {minute_count}/{per_minute} calls in the last minute"

        day_count = conn.execute(
            "SELECT COUNT(*) FROM llm_call_log WHERE ts >= datetime('now', '-1 day')"
        ).fetchone()[0]
        if day_count >= per_day:
            return False, f"daily budget: {day_count}/{per_day} calls in the last 24h"

    return True, ""


def record_call() -> None:
    with _lock, _conn() as conn:
        conn.execute("INSERT INTO llm_call_log (ts) VALUES (datetime('now'))")


def usage_today() -> dict:
    per_minute, per_day = _limits()
    with _lock, _conn() as conn:
        day_count = conn.execute("SELECT COUNT(*) FROM llm_call_log WHERE ts >= datetime('now', '-1 day')").fetchone()[0]
        minute_count = conn.execute("SELECT COUNT(*) FROM llm_call_log WHERE ts >= datetime('now', '-1 minute')").fetchone()[0]
    return {
        "calls_last_24h": day_count, "daily_limit": per_day,
        "calls_last_minute": minute_count, "per_minute_limit": per_minute,
    }
