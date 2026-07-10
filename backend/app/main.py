"""Wanderlust Atlas API.

Run:  uvicorn app.main:app --reload --port 8000
Docs: http://localhost:8000/docs
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routers import destinations, flights, places, predictions, routes, weather

settings = get_settings()

app = FastAPI(
    title="Wanderlust Atlas API",
    version="1.0.0",
    description="Flights, weather, ML price prediction, places & route planning.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_origin, "http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(destinations.router)
app.include_router(flights.router)
app.include_router(weather.router)
app.include_router(places.router)
app.include_router(predictions.router)
app.include_router(routes.router)


@app.get("/api/health")
def health():
    """Handy for the frontend to show which live integrations are active."""
    return {
        "status": "ok",
        "live": {
            "flights_amadeus": settings.has_amadeus,
            "weather_openweather": settings.has_weather,
            "places_google": settings.has_places,
        },
        "mock_forced": settings.use_mock_data,
    }
