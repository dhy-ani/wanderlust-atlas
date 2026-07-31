"""A CrewAI crew of three agents that research a destination on the open web via
Tavily search: best time of year to visit, current cheap-ticket/price trends,
and what's currently popular/trending to do there. This is the "replace mock
data with what agents can find, once prompted, for that specific destination"
feature — triggered on demand (POST /api/research/{destination_id}), not run
automatically, and cached so repeat requests don't re-spend.

Needs TAVILY_API_KEY (search) and OPENROUTER_API_KEY (the agents' reasoning) —
without either, `run_research()` returns a clear "not configured" result rather
than crashing, the same graceful-degrade pattern as everywhere else in this app.
Goes through the same budget_guard as the negotiation LLM calls: a crew run is
several LLM calls at once, so it's the single most expensive action in the app
and is capped accordingly.
"""
from __future__ import annotations

import os
from datetime import datetime, timedelta, timezone

from app.agents import budget_guard

RESEARCH_TTL_HOURS = 24
MAX_RESEARCH_LLM_CALLS = 6  # a 3-agent crew: ~2 calls/agent (tool use + final answer)


def is_configured() -> bool:
    return bool(os.environ.get("TAVILY_API_KEY")) and bool(os.environ.get("OPENROUTER_API_KEY"))


def _build_crew(destination_name: str, max_budget: float | None):
    from crewai import Agent, Crew, LLM, Process, Task
    from crewai_tools import TavilySearchTool

    model = os.environ.get("MEDIATOR_MODEL", "google/gemini-2.5-flash-lite")
    llm = LLM(model=f"openrouter/{model}", api_key=os.environ["OPENROUTER_API_KEY"])
    search = TavilySearchTool(api_key=os.environ["TAVILY_API_KEY"])

    timing_agent = Agent(
        role="Travel Timing Researcher",
        goal=f"Find the best time of year to visit {destination_name}, considering weather and crowds.",
        backstory="You research seasonal travel patterns using current web sources.",
        tools=[search], llm=llm, verbose=False,
    )
    deal_agent = Agent(
        role="Flight Deal Finder",
        goal=f"Find current cheap-ticket trends and price insight for flights to {destination_name}.",
        backstory="You track flight price trends and booking-window advice using current web sources.",
        tools=[search], llm=llm, verbose=False,
    )
    trends_agent = Agent(
        role="Local Trends Researcher",
        goal=f"Find what's currently popular and trending to do in {destination_name} right now.",
        backstory="You research current travel forums, blogs, and guides for up-to-date recommendations.",
        tools=[search], llm=llm, verbose=False,
    )
    # This agent doesn't search the web itself — it EVALUATES what the three
    # researchers above found (CrewAI passes their task outputs in as context,
    # via `context=` below) and decides what's actually worth recommending.
    # This is the guardrail the timing/deal/trends agents don't enforce on
    # their own: it must not recommend anything priced above the group's
    # budget, full stop.
    negotiator_agent = Agent(
        role="Trip Negotiator",
        goal="Weigh the timing, price, and trends research against the group's budget and decide what to "
             "actually recommend.",
        backstory="You evaluate other researchers' findings critically — you don't just repeat them, you judge "
                  "whether they're actually a good, affordable fit for this group.",
        llm=llm, verbose=False,
    )

    timing_task = Task(
        description=f"Research the best time of year to visit {destination_name}. Answer in 2-3 sentences, "
                    "in English only, citing what you found.",
        expected_output="2-3 sentences on the best time of year to visit, in English.", agent=timing_agent,
    )
    deal_task = Task(
        description=f"Research current cheap flight ticket trends/price insight for {destination_name}. "
                    "Answer in 2-3 sentences, in English only.",
        expected_output="2-3 sentences on flight price trends, in English.", agent=deal_agent,
    )
    trends_task = Task(
        description=f"Research 4-6 currently popular/trending things to do in {destination_name}. "
                    "Return them as a short bullet list, place names in English only.",
        expected_output="A bullet list of 4-6 popular activities, in English.", agent=trends_agent,
    )
    budget_line = (
        f"The group's budget ceiling is ${max_budget:.0f} total. Do NOT recommend anything that would push the "
        f"trip over this — explicitly flag if the researched price trend exceeds it."
        if max_budget else
        "No budget ceiling was given — note that price-fit can't be judged without one."
    )
    negotiate_task = Task(
        description=f"Given the timing, price, and trends research above for {destination_name}, write a short "
                    f"final recommendation (3-4 sentences, English only). {budget_line}",
        expected_output="A short, budget-aware final recommendation combining the three research findings.",
        agent=negotiator_agent, context=[timing_task, deal_task, trends_task],
    )

    crew = Crew(
        agents=[timing_agent, deal_agent, trends_agent, negotiator_agent],
        tasks=[timing_task, deal_task, trends_task, negotiate_task],
        process=Process.sequential, verbose=False,
    )
    return crew, (timing_task, deal_task, trends_task, negotiate_task)


def run_research(destination_name: str, max_budget: float | None = None) -> dict:
    """Returns {status, best_time, price_insight, top_activities, recommendation}.
    status is "ok" | "not_configured" | "budget_exceeded" | "error". `max_budget`
    (the group's collective budget ceiling, if known) is passed to the Negotiator
    agent so it can flag — not silently ignore — a price trend that's too high."""
    if not is_configured():
        return {
            "status": "not_configured",
            "message": "Set TAVILY_API_KEY and OPENROUTER_API_KEY to enable live web research for this destination.",
            "best_time": "", "price_insight": "", "top_activities": [], "recommendation": "",
        }

    allowed, reason = budget_guard.allow_call()
    if not allowed:
        return {"status": "budget_exceeded", "message": reason, "best_time": "", "price_insight": "",
                "top_activities": [], "recommendation": ""}

    try:
        crew, (timing_task, deal_task, trends_task, negotiate_task) = _build_crew(destination_name, max_budget)
        crew.kickoff()
        for _ in range(MAX_RESEARCH_LLM_CALLS):
            budget_guard.record_call()  # crew ran multiple LLM calls internally; count them against the budget
        activities = [
            line.strip("-* ").strip()
            for line in str(trends_task.output).splitlines()
            if line.strip().lstrip("-* ").strip()
        ][:6]
        return {
            "status": "ok",
            "best_time": str(timing_task.output).strip(),
            "price_insight": str(deal_task.output).strip(),
            "top_activities": activities,
            "recommendation": str(negotiate_task.output).strip(),
        }
    except Exception as exc:
        print(f"[research_crew] failed, returning empty result: {exc}")
        return {"status": "error", "message": str(exc), "best_time": "", "price_insight": "",
                "top_activities": [], "recommendation": ""}


def is_stale(created_at: datetime) -> bool:
    if created_at.tzinfo is None:
        created_at = created_at.replace(tzinfo=timezone.utc)
    return datetime.now(timezone.utc) - created_at > timedelta(hours=RESEARCH_TTL_HOURS)
