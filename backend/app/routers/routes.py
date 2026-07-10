"""Route planner. Given an ordered (or unordered) list of stops, compute the
great-circle legs the globe draws as dashed lines, plus total distance and a
rough flight-time estimate. Optionally reorder stops with a nearest-neighbour
heuristic starting from New York."""
from fastapi import APIRouter

from app.models.schemas import RouteLeg, RouteResponse, RouteStop
from app.services.destinations import haversine_km
from pydantic import BaseModel

router = APIRouter(prefix="/api/routes", tags=["routes"])

NYC = (40.7128, -74.0060)
CRUISE_KMH = 850.0  # jet cruise speed for the time estimate


class RouteRequest(BaseModel):
    stops: list[RouteStop]
    optimize: bool = False       # nearest-neighbour reorder from NYC
    round_trip: bool = False     # append NYC at the end


def _nearest_neighbour(stops: list[RouteStop]) -> list[RouteStop]:
    remaining = stops[:]
    ordered: list[RouteStop] = []
    cur = NYC
    while remaining:
        nxt = min(remaining, key=lambda s: haversine_km(cur[0], cur[1], s.lat, s.lng))
        ordered.append(nxt)
        cur = (nxt.lat, nxt.lng)
        remaining.remove(nxt)
    return ordered


@router.post("/plan", response_model=RouteResponse)
def plan_route(req: RouteRequest):
    stops = _nearest_neighbour(req.stops) if req.optimize and len(req.stops) > 2 else req.stops
    legs: list[RouteLeg] = []
    total = 0.0
    for a, b in zip(stops, stops[1:]):
        km = haversine_km(a.lat, a.lng, b.lat, b.lng)
        total += km
        legs.append(RouteLeg(from_name=a.name, to_name=b.name,
                             distance_km=round(km, 1), est_flight_hours=round(km / CRUISE_KMH, 1)))
    return RouteResponse(
        stops=stops, legs=legs, total_distance_km=round(total, 1),
        total_flight_hours=round(total / CRUISE_KMH, 1), optimized=bool(req.optimize),
    )
