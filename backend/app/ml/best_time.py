"""Combines the ML price curve with the weather comfort score to answer
"when is the best time to travel with perfect weather AND cheap tickets?".

The recommendation blends two normalised signals per month:
  * price score  (cheaper month  -> higher)
  * comfort score (nicer weather -> higher, straight from the weather service)
weighted by `price_weight` (default 0.5 / 0.5).
"""
from __future__ import annotations

from app.ml.price_model import PriceModel

MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


def _normalise_low_is_good(values: list[float]) -> list[float]:
    lo, hi = min(values), max(values)
    if hi == lo:
        return [50.0] * len(values)
    return [100 * (hi - v) / (hi - lo) for v in values]  # cheapest -> 100


def best_time_scores(
    monthly_prices: list[float],
    comfort_by_month: list[float],
    price_weight: float = 0.5,
) -> list[dict]:
    price_scores = _normalise_low_is_good(monthly_prices)
    w = max(0.0, min(1.0, price_weight))
    out = []
    for i in range(12):
        blended = w * price_scores[i] + (1 - w) * comfort_by_month[i]
        out.append(
            {
                "month": i + 1,
                "month_name": MONTHS[i],
                "price": round(monthly_prices[i], 2),
                "price_score": round(price_scores[i], 1),
                "comfort_score": round(comfort_by_month[i], 1),
                "overall_score": round(blended, 1),
            }
        )
    return out


def recommend_booking(model: PriceModel, dest_id: str, origin: str, month: int,
                      current_days_out: int):
    """Return (predict_now, cheapest_price, cheapest_days_out, drop_pct, text)."""
    curve = model.booking_curve(dest_id, origin, month)
    price_now = model.predict(dest_id, origin, month, current_days_out)
    cheapest_days, cheapest_price = min(curve, key=lambda p: p[1])
    drop_pct = round(100 * (price_now - cheapest_price) / price_now, 1) if price_now else 0.0

    if current_days_out <= cheapest_days + 7 and drop_pct < 6:
        text = "BOOK NOW — you're already near the cheapest window."
    elif drop_pct >= 12:
        text = f"WAIT — prices are expected to fall ~{drop_pct:.0f}% toward {cheapest_days} days out."
    else:
        text = f"SOON — modest ~{drop_pct:.0f}% savings expected; book within a few weeks."
    return price_now, cheapest_price, cheapest_days, drop_pct, curve, text
