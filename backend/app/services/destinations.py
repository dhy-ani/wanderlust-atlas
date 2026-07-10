"""Loads the canonical destination list (with airport codes) from
`backend/data/destinations.json` and exposes small lookup helpers."""
from __future__ import annotations

import json
from functools import lru_cache
from math import asin, cos, radians, sin, sqrt
from pathlib import Path

DATA_PATH = Path(__file__).resolve().parents[2] / "data" / "destinations.json"

# New York origin airports the whole app prices from.
NYC_ORIGINS = {"JFK": (40.6413, -73.7781), "EWR": (40.6895, -74.1745)}


@lru_cache
def all_destinations() -> list[dict]:
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


@lru_cache
def by_id(dest_id: str) -> dict | None:
    return next((d for d in all_destinations() if d["id"] == dest_id), None)


def haversine_km(lat1: float, lng1: float, lat2: float, lng2: float) -> float:
    """Great-circle distance in km between two lat/lng points."""
    r = 6371.0
    dlat, dlng = radians(lat2 - lat1), radians(lng2 - lng1)
    a = sin(dlat / 2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlng / 2) ** 2
    return 2 * r * asin(sqrt(a))
