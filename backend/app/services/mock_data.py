"""Deterministic mock data used whenever a real API key is absent. Prices come
from the same `simulate_price` used to train the ML model, so mock and real
predictions stay coherent."""
from __future__ import annotations

import hashlib
import math
from datetime import date, timedelta

from app.ml.price_model import simulate_price
from app.models.schemas import FlightOffer, MonthWeather, Place
from app.services.destinations import by_id

AIRLINES = ["United", "Delta", "American", "Lufthansa", "Emirates", "Qatar", "Turkish", "ANA"]
MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
               "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


def _seed(*parts) -> int:
    h = hashlib.md5("|".join(map(str, parts)).encode()).hexdigest()
    return int(h[:8], 16)


def mock_flight_offers(origin: str, dest_id: str, depart: date, days_out: int) -> list[FlightOffer]:
    dest = by_id(dest_id)
    base = simulate_price(dest_id, origin, depart.month, days_out)
    offers = []
    for i in range(5):
        s = _seed(origin, dest_id, depart.isoformat(), i)
        price = round(base * (0.9 + (s % 45) / 100.0), 2)   # spread ±
        stops = (s >> 3) % 3
        price += stops * -35                                 # more stops, a bit cheaper
        offers.append(
            FlightOffer(
                origin=origin,
                destination=dest["airport"],
                price_usd=max(price, 120),
                airline=AIRLINES[s % len(AIRLINES)],
                stops=stops,
                depart_date=depart.isoformat(),
                return_date=(depart + timedelta(days=dest["days"])).isoformat(),
                duration=f"{7 + (s % 15)}h {(s % 6) * 10}m",
                source="mock",
            )
        )
    return sorted(offers, key=lambda o: o.price_usd)


def mock_monthly_weather(dest_id: str) -> list[MonthWeather]:
    """A simple sinusoidal climate model keyed to latitude — good enough to show
    a realistic seasonal comfort curve without an external API."""
    d = by_id(dest_id)
    lat = d["lat"]
    months = []
    for m in range(1, 13):
        # Northern hemisphere warms mid-year; southern is inverted.
        phase = math.cos(2 * math.pi * (m - 7) / 12) if lat >= 0 else math.cos(2 * math.pi * (m - 1) / 12)
        base_temp = 27 - abs(lat) * 0.35            # equator hot, poles cold
        avg_temp = round(base_temp + phase * (6 + abs(lat) * 0.18), 1)
        rain = round(max(0, 90 + 70 * math.sin(2 * math.pi * (m - 4) / 12) - abs(lat)), 0)
        # Comfort peaks near 22°C with low rain.
        comfort = 100 - abs(avg_temp - 22) * 3.2 - rain * 0.18
        comfort = max(0, min(100, comfort))
        months.append(
            MonthWeather(month=m, month_name=MONTH_NAMES[m - 1],
                         avg_temp_c=avg_temp, rain_mm=rain, comfort_score=round(comfort, 1))
        )
    return months


def mock_places(query: str, lat: float, lng: float) -> list[Place]:
    """A few synthetic nearby POIs so search works with no key."""
    suffixes = ["Old Town", "Central Market", "Grand Museum", "Riverside Park",
                "Cathedral", "Viewpoint", "Botanical Garden", "Historic Fort"]
    out = []
    for i, suf in enumerate(suffixes[:6]):
        s = _seed(query, suf, i)
        out.append(
            Place(
                name=f"{query.title()} {suf}" if query else suf,
                lat=lat + ((s % 200) - 100) / 2000.0,
                lng=lng + (((s >> 4) % 200) - 100) / 2000.0,
                category="point_of_interest",
                rating=round(3.8 + (s % 12) / 10.0, 1),
                source="mock",
            )
        )
    return out
