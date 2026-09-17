"""Request/response shapes shared by the routers. Keeping them in one place
makes the API self-documenting at /docs and easy to consume from the frontend."""
from __future__ import annotations

from typing import Literal, Optional

from pydantic import BaseModel, Field


# --------------------------------------------------------------------------- #
#  Flights / best-time / trade-off — real web-search-derived data only.
#  See agents/live_data_agent.py: every response is a free-form dict with a
#  "status" field ("ok" | "not_configured" | "error"), not a rigid schema,
#  since the shape depends on what the search actually found. No response_model
#  is declared on those routes for that reason.
# --------------------------------------------------------------------------- #


# --------------------------------------------------------------------------- #
#  Places search
# --------------------------------------------------------------------------- #
class Place(BaseModel):
    name: str
    lat: float
    lng: float
    category: Optional[str] = None
    address: Optional[str] = None
    country: Optional[str] = None
    rating: Optional[float] = None
    source: Literal["google", "nominatim"] = "nominatim"


class PlacesResponse(BaseModel):
    query: str
    results: list[Place]
    source: Literal["google", "nominatim", "unavailable"]


# --------------------------------------------------------------------------- #
#  Route planning
# --------------------------------------------------------------------------- #
class RouteStop(BaseModel):
    name: str
    lat: float
    lng: float


class RouteLeg(BaseModel):
    from_name: str
    to_name: str
    distance_km: float
    est_flight_hours: float


class RouteResponse(BaseModel):
    stops: list[RouteStop]
    legs: list[RouteLeg]
    total_distance_km: float
    total_flight_hours: float
    optimized: bool
