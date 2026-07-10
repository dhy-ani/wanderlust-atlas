"""Request/response shapes shared by the routers. Keeping them in one place
makes the API self-documenting at /docs and easy to consume from the frontend."""
from __future__ import annotations

from typing import Literal, Optional

from pydantic import BaseModel, Field


# --------------------------------------------------------------------------- #
#  Flights
# --------------------------------------------------------------------------- #
class FlightOffer(BaseModel):
    origin: str
    destination: str
    price_usd: float
    currency: str = "USD"
    airline: str
    stops: int
    depart_date: str
    return_date: Optional[str] = None
    duration: str            # e.g. "14h 20m"
    deep_link: Optional[str] = None
    source: Literal["amadeus", "mock"] = "mock"


class FlightSearchResponse(BaseModel):
    origin: str
    destination: str
    cheapest: Optional[FlightOffer]
    offers: list[FlightOffer]
    source: Literal["amadeus", "mock"]


# --------------------------------------------------------------------------- #
#  Weather
# --------------------------------------------------------------------------- #
class MonthWeather(BaseModel):
    month: int               # 1..12
    month_name: str
    avg_temp_c: float
    rain_mm: float
    comfort_score: float = Field(..., ge=0, le=100)  # higher = nicer to visit


class WeatherResponse(BaseModel):
    destination_id: str
    months: list[MonthWeather]
    best_months: list[str]
    source: Literal["openweather", "climate-model", "mock"]


# --------------------------------------------------------------------------- #
#  ML price prediction
# --------------------------------------------------------------------------- #
class PricePoint(BaseModel):
    days_before_departure: int
    predicted_price_usd: float


class PricePrediction(BaseModel):
    destination_id: str
    origin: str
    depart_month: int
    current_days_out: int
    predicted_price_now: float
    cheapest_price: float
    cheapest_days_out: int
    expected_drop_pct: float          # how much cheaper the trough is vs now
    recommendation: str               # "BOOK NOW" | "WAIT" | ...
    best_month_to_fly: int
    best_month_price: float
    curve: list[PricePoint]           # price vs. days-before-departure
    monthly: list[float]              # 12 avg predicted prices, Jan..Dec
    model: Literal["gradient-boosting", "heuristic"]


# --------------------------------------------------------------------------- #
#  Places search
# --------------------------------------------------------------------------- #
class Place(BaseModel):
    name: str
    lat: float
    lng: float
    category: Optional[str] = None
    address: Optional[str] = None
    rating: Optional[float] = None
    source: Literal["google", "nominatim", "mock"] = "mock"


class PlacesResponse(BaseModel):
    query: str
    results: list[Place]
    source: Literal["google", "nominatim", "mock"]


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
