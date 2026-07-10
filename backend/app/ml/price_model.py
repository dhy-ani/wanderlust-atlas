"""Flight-price model.

We model round-trip economy fares from NYC (JFK/EWR) as a function of:
  * destination distance (longer routes cost more),
  * departure month (seasonality: summer + holidays are pricier),
  * how far ahead you book (days_before_departure: last-minute is expensive,
    booking too early is also slightly pricier; a trough sits ~6-10 weeks out).

`simulate_price()` is the ground-truth generator. `build_dataset()` samples it
(with noise) to produce a training set, and `PriceModel` wraps a scikit-learn
GradientBoostingRegressor fitted on that set. This is a realistic, self-contained
ML pipeline: with a real historical-fare dataset you would simply swap
`build_dataset()` for a loader and keep everything else identical.

See docs/ML.md for the full write-up.
"""
from __future__ import annotations

import math
from pathlib import Path

import joblib
import numpy as np
import pandas as pd

from app.services.destinations import NYC_ORIGINS, by_id, haversine_km, static_destinations

MODEL_PATH = Path(__file__).resolve().parents[2] / "data" / "models" / "price_model.joblib"

# Peak-season multipliers per month (1 = Jan ... 12 = Dec). Northern-hemisphere
# summer travel + Dec holidays push fares up.
_SEASON = {
    1: 1.02, 2: 0.92, 3: 0.95, 4: 1.00, 5: 1.06, 6: 1.18,
    7: 1.28, 8: 1.24, 9: 1.00, 10: 0.96, 11: 0.98, 12: 1.22,
}


def _origin_dest_km(origin: str, dest_id: str) -> float:
    olat, olng = NYC_ORIGINS[origin]
    d = by_id(dest_id)
    return haversine_km(olat, olng, d["lat"], d["lng"])


def simulate_price(dest_id: str, origin: str, depart_month: int, days_out: int) -> float:
    """Ground-truth fare (USD) for one (destination, origin, month, lead-time)."""
    km = _origin_dest_km(origin, dest_id)

    # Base fare grows sub-linearly with distance.
    base = 120 + 0.055 * km + 0.0000009 * km ** 2

    # Booking curve: U-shape. Cheapest around ~55 days out; expensive last-minute.
    d = max(days_out, 0)
    lastminute = 0.55 * math.exp(-d / 18.0)        # steep spike < 3 weeks out
    tooearly = 0.10 * max(0, (d - 120) / 240.0)     # mild premium booking > 4 months out
    booking = 1.0 + lastminute + tooearly
    booking *= 0.90 if 40 <= d <= 75 else 1.0        # the sweet-spot trough

    # Seasonality + JFK slightly cheaper than EWR on long-haul (illustrative).
    season = _SEASON[depart_month]
    origin_adj = 1.0 if origin == "JFK" else 1.015

    return round(base * booking * season * origin_adj, 2)


def build_dataset(samples_per_dest: int = 900, seed: int = 7) -> pd.DataFrame:
    """Sample simulate_price() across months/lead-times/origins with noise."""
    rng = np.random.default_rng(seed)
    rows = []
    for dest in static_destinations():
        for _ in range(samples_per_dest):
            origin = rng.choice(list(NYC_ORIGINS))
            month = int(rng.integers(1, 13))
            days_out = int(rng.integers(1, 330))
            price = simulate_price(dest["id"], origin, month, days_out)
            price *= rng.normal(1.0, 0.06)  # market noise
            rows.append(
                {
                    "dest_id": dest["id"],
                    "distance_km": _origin_dest_km(origin, dest["id"]),
                    "origin_ewr": 1 if origin == "EWR" else 0,
                    "month": month,
                    "month_sin": math.sin(2 * math.pi * month / 12),
                    "month_cos": math.cos(2 * math.pi * month / 12),
                    "days_out": days_out,
                    "price": max(price, 90.0),
                }
            )
    return pd.DataFrame(rows)


FEATURES = ["distance_km", "origin_ewr", "month_sin", "month_cos", "days_out"]


def _featurize(distance_km: float, origin: str, month: int, days_out: int) -> list[float]:
    return [
        distance_km,
        1 if origin == "EWR" else 0,
        math.sin(2 * math.pi * month / 12),
        math.cos(2 * math.pi * month / 12),
        days_out,
    ]


class PriceModel:
    """Thin wrapper around the fitted regressor with the app-level queries."""

    def __init__(self, estimator=None):
        self.estimator = estimator

    # ---- persistence ----
    @classmethod
    def load(cls) -> "PriceModel | None":
        if MODEL_PATH.exists():
            return cls(joblib.load(MODEL_PATH))
        return None

    def save(self) -> None:
        MODEL_PATH.parent.mkdir(parents=True, exist_ok=True)
        joblib.dump(self.estimator, MODEL_PATH)

    # ---- inference ----
    def predict(self, dest_id: str, origin: str, month: int, days_out: int) -> float:
        km = _origin_dest_km(origin, dest_id)
        if self.estimator is None:  # heuristic fallback if never trained
            return simulate_price(dest_id, origin, month, days_out)
        x = np.array([_featurize(km, origin, month, days_out)])
        return float(self.estimator.predict(x)[0])

    def booking_curve(self, dest_id: str, origin: str, month: int, max_days: int = 300):
        """Predicted price for each lead-time — the 'when to book' curve."""
        return [(d, self.predict(dest_id, origin, month, d)) for d in range(3, max_days, 7)]

    def monthly_prices(self, dest_id: str, origin: str, days_out: int = 60) -> list[float]:
        """Predicted best-case price for each month — the 'when to fly' curve."""
        return [self.predict(dest_id, origin, m, days_out) for m in range(1, 13)]
