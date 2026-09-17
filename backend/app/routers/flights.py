"""Flight prices — real web-search-derived data only. No mock fallback: if
TAVILY_API_KEY/OPENROUTER_API_KEY aren't configured, or the search comes up
empty, this returns status="not_configured"/"error" and the frontend shows
that honestly instead of a fabricated number."""
from datetime import date, timedelta

from fastapi import APIRouter, Query

from app.agents import live_data_agent

router = APIRouter(prefix="/api/flights", tags=["flights"])

_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


@router.get("")
async def flights(
    destination_name: str = Query(..., description="destination name, e.g. 'Paris'"),
    destination_country: str = Query("", description="destination country/region, for search accuracy"),
    origin: str = Query("JFK", pattern="^(JFK|EWR)$"),
    depart: str | None = Query(None, description="YYYY-MM-DD; defaults to 60 days out"),
):
    depart_date = date.fromisoformat(depart) if depart else date.today() + timedelta(days=60)
    month_name = _MONTHS[depart_date.month - 1]
    return live_data_agent.search_flight_prices(origin, destination_name, destination_country, month_name)
