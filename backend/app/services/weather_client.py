"""Weather / climate service.

OpenWeather's free tier gives *current* conditions but not historical monthly
climate normals (that endpoint is paid). So we always build the 12-month comfort
curve from a latitude-based climate model, and — when a key is present — calibrate
the current month with a live reading and label the source `openweather`.
Swap in the paid One Call "climate" endpoint later for true normals.
"""
from __future__ import annotations

from datetime import date

import httpx

from app.config import get_settings
from app.models.schemas import MonthWeather, WeatherResponse
from app.services.destinations import by_id
from app.services.mock_data import mock_monthly_weather


async def _live_current_temp(lat: float, lng: float) -> float | None:
    s = get_settings()
    try:
        async with httpx.AsyncClient(timeout=12) as client:
            r = await client.get(
                "https://api.openweathermap.org/data/2.5/weather",
                params={"lat": lat, "lon": lng, "units": "metric", "appid": s.openweather_api_key},
            )
            r.raise_for_status()
            return float(r.json()["main"]["temp"])
    except Exception as exc:
        print(f"[openweather] live fetch failed: {exc}")
        return None


async def get_weather(dest_id: str) -> WeatherResponse:
    s = get_settings()
    dest = by_id(dest_id)
    months: list[MonthWeather] = mock_monthly_weather(dest_id)
    source = "climate-model"

    if s.has_weather:
        live = await _live_current_temp(dest["lat"], dest["lng"])
        if live is not None:
            m = date.today().month
            cur = months[m - 1]
            # nudge this month's modelled temp toward the live reading
            blended = round(0.6 * cur.avg_temp_c + 0.4 * live, 1)
            comfort = max(0, min(100, 100 - abs(blended - 22) * 3.2 - cur.rain_mm * 0.18))
            months[m - 1] = MonthWeather(month=m, month_name=cur.month_name,
                                         avg_temp_c=blended, rain_mm=cur.rain_mm,
                                         comfort_score=round(comfort, 1))
            source = "openweather"

    best = sorted(months, key=lambda x: x.comfort_score, reverse=True)[:3]
    return WeatherResponse(
        destination_id=dest_id,
        months=months,
        best_months=[b.month_name for b in best],
        source=source,
    )
