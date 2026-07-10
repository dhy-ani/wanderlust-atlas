"""Live flight prices from JFK / EWR to a destination's nearest airport."""
from datetime import date, timedelta

from fastapi import APIRouter, HTTPException, Query

from app.models.schemas import FlightSearchResponse
from app.services.amadeus_client import search_flights
from app.services.destinations import by_id

router = APIRouter(prefix="/api/flights", tags=["flights"])


@router.get("", response_model=FlightSearchResponse)
async def flights(
    dest_id: str = Query(..., description="destination id"),
    origin: str = Query("JFK", pattern="^(JFK|EWR)$"),
    depart: str | None = Query(None, description="YYYY-MM-DD; defaults to 60 days out"),
):
    if by_id(dest_id) is None:
        raise HTTPException(404, f"unknown destination '{dest_id}'")
    depart_date = date.fromisoformat(depart) if depart else date.today() + timedelta(days=60)
    days_out = (depart_date - date.today()).days
    return await search_flights(origin, dest_id, depart_date, max(days_out, 1))
