"""Loads the canonical destination list (with airport codes) from
`backend/data/destinations.json`, plus any user-added custom destinations
persisted to `custom_destinations.json`, and exposes small lookup helpers.

Custom destinations are what powers the "add to destinations" feature: once
registered here, flights / weather / ML predictions / routes all work for them
automatically, because every service resolves coordinates + airport via `by_id`.
"""
from __future__ import annotations

import json
from functools import lru_cache
from math import asin, cos, radians, sin, sqrt
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parents[2] / "data"
DATA_PATH = DATA_DIR / "destinations.json"
CUSTOM_PATH = DATA_DIR / "custom_destinations.json"

# New York origin airports the whole app prices from.
NYC_ORIGINS = {"JFK": (40.6413, -73.7781), "EWR": (40.6895, -74.1745)}

# In-memory registry of user-added destinations (loaded from disk at import).
_custom: dict[str, dict] = {}


@lru_cache
def static_destinations() -> list[dict]:
    """The built-in destinations only (used for ML training, never mutated)."""
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def _load_custom() -> None:
    if CUSTOM_PATH.exists():
        try:
            for d in json.loads(CUSTOM_PATH.read_text(encoding="utf-8")):
                _custom[d["id"]] = d
        except Exception as exc:  # corrupt file shouldn't crash the app
            print(f"[destinations] could not read custom file: {exc}")


def _save_custom() -> None:
    CUSTOM_PATH.write_text(json.dumps(list(_custom.values()), indent=2), encoding="utf-8")


def all_destinations() -> list[dict]:
    """Built-in + custom destinations (what the API/frontend list)."""
    return static_destinations() + list(_custom.values())


def by_id(dest_id: str) -> dict | None:
    if dest_id in _custom:
        return _custom[dest_id]
    return next((d for d in static_destinations() if d["id"] == dest_id), None)


def register_custom(dest: dict) -> dict:
    """Add/replace a custom destination and persist it to disk."""
    _custom[dest["id"]] = dest
    _save_custom()
    return dest


def remove_custom(dest_id: str) -> bool:
    if dest_id in _custom:
        del _custom[dest_id]
        _save_custom()
        return True
    return False


def haversine_km(lat1: float, lng1: float, lat2: float, lng2: float) -> float:
    """Great-circle distance in km between two lat/lng points."""
    r = 6371.0
    dlat, dlng = radians(lat2 - lat1), radians(lng2 - lng1)
    a = sin(dlat / 2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlng / 2) ** 2
    return 2 * r * asin(sqrt(a))


def nearest_airport(lat: float, lng: float) -> str:
    """Nearest built-in destination's airport — a sensible default for a custom
    place that doesn't come with its own IATA code (used for flight lookups)."""
    best, best_d = "JFK", float("inf")
    for d in static_destinations():
        dist = haversine_km(lat, lng, d["lat"], d["lng"])
        if dist < best_d:
            best_d, best = dist, d["airport"]
    return best


_load_custom()
