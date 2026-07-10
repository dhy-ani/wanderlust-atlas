"""ML endpoints: 'book now vs. wait' price prediction and 'best time to travel'
(cheap tickets + perfect weather)."""
from datetime import date, timedelta

from fastapi import APIRouter, HTTPException, Query

from app.ml.best_time import best_time_scores, recommend_booking
from app.ml.price_model import PriceModel, simulate_price
from app.models.schemas import PricePoint, PricePrediction
from app.services.destinations import by_id
from app.services.weather_client import get_weather

router = APIRouter(prefix="/api/predict", tags=["ml"])

# Loaded once at import; None -> heuristic fallback (see PriceModel.predict).
_model = PriceModel.load() or PriceModel(None)
_model_name = "gradient-boosting" if _model.estimator is not None else "heuristic"


@router.get("/price", response_model=PricePrediction)
def predict_price(
    dest_id: str = Query(...),
    origin: str = Query("JFK", pattern="^(JFK|EWR)$"),
    month: int | None = Query(None, ge=1, le=12, description="departure month; default = next 60d"),
    days_out: int = Query(60, ge=1, le=330, description="how far ahead you'd book today"),
):
    if by_id(dest_id) is None:
        raise HTTPException(404, f"unknown destination '{dest_id}'")
    depart_month = month or (date.today() + timedelta(days=days_out)).month

    price_now, cheapest, cheap_days, drop, curve, text = recommend_booking(
        _model, dest_id, origin, depart_month, days_out
    )
    monthly = _model.monthly_prices(dest_id, origin)
    best_month_idx = min(range(12), key=lambda i: monthly[i])

    return PricePrediction(
        destination_id=dest_id, origin=origin, depart_month=depart_month,
        current_days_out=days_out, predicted_price_now=round(price_now, 2),
        cheapest_price=round(cheapest, 2), cheapest_days_out=cheap_days,
        expected_drop_pct=drop,
        recommendation=text,
        best_month_to_fly=best_month_idx + 1,
        best_month_price=round(monthly[best_month_idx], 2),
        curve=[PricePoint(days_before_departure=d, predicted_price_usd=round(p, 2)) for d, p in curve],
        monthly=[round(p, 2) for p in monthly],
        model=_model_name,
    )


@router.get("/best-time")
async def best_time(
    dest_id: str = Query(...),
    origin: str = Query("JFK", pattern="^(JFK|EWR)$"),
    price_weight: float = Query(0.5, ge=0, le=1, description="0=weather only, 1=price only"),
):
    if by_id(dest_id) is None:
        raise HTTPException(404, f"unknown destination '{dest_id}'")
    monthly_prices = _model.monthly_prices(dest_id, origin)
    weather = await get_weather(dest_id)
    comfort = [m.comfort_score for m in weather.months]
    scores = best_time_scores(monthly_prices, comfort, price_weight)
    best = max(scores, key=lambda s: s["overall_score"])
    return {
        "destination_id": dest_id,
        "origin": origin,
        "months": scores,
        "best_month": best,
        "weather_source": weather.source,
        "price_model": _model_name,
    }
