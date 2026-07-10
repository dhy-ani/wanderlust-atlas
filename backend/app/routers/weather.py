"""12-month weather comfort curve + best months for a destination."""
from fastapi import APIRouter, HTTPException

from app.models.schemas import WeatherResponse
from app.services.destinations import by_id
from app.services.weather_client import get_weather

router = APIRouter(prefix="/api/weather", tags=["weather"])


@router.get("/{dest_id}", response_model=WeatherResponse)
async def weather(dest_id: str):
    if by_id(dest_id) is None:
        raise HTTPException(404, f"unknown destination '{dest_id}'")
    return await get_weather(dest_id)
