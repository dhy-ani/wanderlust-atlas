"""'Best time to travel' and a budget-vs-luxury trade-off comparison — both
real web-search-derived (see agents/live_data_agent.py). The old synthetic
gradient-boosting price-curve model and the latitude-based climate model are
gone entirely: there is no modeled/estimated fallback, only real data or an
honest 'not available'."""
from fastapi import APIRouter, Query

from app.agents import live_data_agent

router = APIRouter(prefix="/api/predict", tags=["predict"])


@router.get("/best-time")
async def best_time(
    destination_name: str = Query(...),
    destination_country: str = Query(""),
):
    return live_data_agent.search_best_time(destination_name, destination_country)


@router.get("/tradeoff")
async def tradeoff(
    destination_name: str = Query(...),
    destination_country: str = Query(""),
    budget_usd: float = Query(..., ge=0, description="the traveler's total trip budget"),
):
    return live_data_agent.search_tradeoff(destination_name, destination_country, budget_usd)
