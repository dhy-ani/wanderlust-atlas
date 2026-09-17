"""Live travel data: flight prices, best-time-to-visit, and a budget-vs-luxury
trade-off comparison — all sourced from real web search (Tavily) synthesized by
an LLM (via OpenRouter), never from a hardcoded array or a synthetic model.

There is no offline fallback here on purpose. When TAVILY_API_KEY /
OPENROUTER_API_KEY aren't configured, or a search genuinely turns up nothing
useful, every function returns {"status": "not_configured" | "error", ...} and
the caller is expected to show that honestly instead of inventing numbers.
"""
from __future__ import annotations

import json
import os
import re

from app.agents import budget_guard

MAX_CALLS_PER_REQUEST = 2  # one search + one synthesis, capped, per endpoint hit


def is_configured() -> bool:
    return bool(os.environ.get("TAVILY_API_KEY")) and bool(os.environ.get("OPENROUTER_API_KEY"))


def _unconfigured(extra: dict | None = None) -> dict:
    return {
        "status": "not_configured",
        "message": "Set TAVILY_API_KEY and OPENROUTER_API_KEY to enable live web-sourced travel data.",
        **(extra or {}),
    }


def _search_and_synthesize(query: str, system_prompt: str) -> dict | None:
    """One Tavily search + one LLM synthesis call. Returns the parsed JSON dict,
    or None on any failure (budget-guarded, network error, bad JSON, etc.)."""
    allowed, reason = budget_guard.allow_call()
    if not allowed:
        print(f"[live_data_agent] budget guard blocked: {reason}")
        return None
    try:
        from langchain_core.messages import HumanMessage, SystemMessage
        from langchain_openai import ChatOpenAI
        from tavily import TavilyClient

        tavily = TavilyClient(api_key=os.environ["TAVILY_API_KEY"])
        search = tavily.search(query=query, max_results=6, search_depth="basic")
        budget_guard.record_call()
        snippets = "\n".join(
            f"- {r.get('title', '')}: {r.get('content', '')[:400]} (source: {r.get('url', '')})"
            for r in search.get("results", [])
        )
        sources = [r.get("url") for r in search.get("results", []) if r.get("url")][:6]

        model = os.environ.get("MEDIATOR_MODEL", "google/gemini-2.5-flash-lite")
        llm = ChatOpenAI(model=model, api_key=os.environ["OPENROUTER_API_KEY"], base_url="https://openrouter.ai/api/v1")
        resp = llm.invoke([SystemMessage(content=system_prompt), HumanMessage(content=snippets or "No search results found.")])
        budget_guard.record_call()
        content = re.sub(r"^```(json)?|```$", "", resp.content.strip(), flags=re.MULTILINE).strip()
        data = json.loads(content)
        if not isinstance(data, dict):
            return None
        data["sources"] = sources
        return data
    except Exception as exc:
        print(f"[live_data_agent] search/synthesis failed: {exc}")
        return None


def search_flight_prices(origin_airport: str, destination_name: str, destination_country: str,
                          depart_month_name: str) -> dict:
    """Real web-search-derived flight price estimate, split into a budget option
    and a luxury/premium option so the user can see the trade-off, not one number."""
    if not is_configured():
        return _unconfigured({"origin": origin_airport, "destination": destination_name})

    query = (
        f"cheapest flights from {origin_airport} New York to {destination_name} {destination_country} "
        f"{depart_month_name} 2026 price economy business class"
    )
    system = (
        "You read live web search results about flight prices and extract real, currently-cited figures only. "
        "Never invent a number that isn't grounded in the search results. "
        "Respond with strict JSON: {"
        '"budget_option": {"price_usd": number|null, "airline_or_source": str, "notes": str}, '
        '"luxury_option": {"price_usd": number|null, "airline_or_source": str, "notes": str}, '
        '"summary": "2-3 sentences comparing the trade-off"'
        "}. If the search results don't contain a real price, set price_usd to null and say so in notes — "
        "do not estimate or make one up."
    )
    data = _search_and_synthesize(query, system)
    if data is None:
        return {"status": "error", "message": "Live flight search failed or returned nothing usable.",
                "origin": origin_airport, "destination": destination_name}
    data.update({"status": "ok", "origin": origin_airport, "destination": destination_name})
    return data


def search_best_time(destination_name: str, destination_country: str) -> dict:
    """Real web-search-derived best-time-to-visit — season, weather, crowd/price
    pattern — replacing what used to be a synthetic latitude-based climate curve."""
    if not is_configured():
        return _unconfigured({"destination": destination_name})

    query = f"best time to visit {destination_name} {destination_country} weather by month crowds cheap flights"
    system = (
        "You read live web search results about a travel destination's climate and seasonality. "
        "Respond with strict JSON: {"
        '"best_months": [list of 1-4 short month names, e.g. "Apr", "May"], '
        '"narrative": "3-4 sentences on weather, crowds, and price patterns through the year", '
        '"avoid_months": [list of month names worth avoiding, may be empty]'
        "}. Ground every claim in the search results; do not invent seasonal data you don't see cited."
    )
    data = _search_and_synthesize(query, system)
    if data is None:
        return {"status": "error", "message": "Live weather/season search failed or returned nothing usable.",
                "destination": destination_name}
    data.update({"status": "ok", "destination": destination_name})
    return data


def search_tradeoff(destination_name: str, destination_country: str, budget_usd: float) -> dict:
    """Budget-aware cheap-vs-luxury comparison across flights + stay, so the user
    can pick a point on the trade-off curve instead of getting one fixed answer."""
    if not is_configured():
        return _unconfigured({"destination": destination_name, "budget_usd": budget_usd})

    query = (
        f"{destination_name} {destination_country} trip cost budget travel vs luxury travel "
        f"hotel prices flight prices per day cost comparison"
    )
    system = (
        "You read live web search results about travel costs for a destination and build a budget-tier vs "
        "luxury-tier comparison, evaluated specifically against the traveler's stated total budget. "
        "Respond with strict JSON: {"
        '"budget_tier": {"est_total_usd": number|null, "flight_style": str, "stay_style": str, "notes": str}, '
        '"luxury_tier": {"est_total_usd": number|null, "flight_style": str, "stay_style": str, "notes": str}, '
        '"fits_budget": "budget" | "luxury" | "neither" | "both", '
        f'"recommendation": "2-3 sentences, explicitly weighed against a ${budget_usd:.0f} budget"'
        "}. Only use figures grounded in the search results; use null where the results don't say."
    )
    data = _search_and_synthesize(query, system)
    if data is None:
        return {"status": "error", "message": "Live cost-comparison search failed or returned nothing usable.",
                "destination": destination_name, "budget_usd": budget_usd}
    data.update({"status": "ok", "destination": destination_name, "budget_usd": budget_usd})
    return data
