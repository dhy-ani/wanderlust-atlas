"""Smoke tests — run `pytest` from the backend/ dir. These exercise the mock
paths so they pass with no API keys and no trained model."""
from datetime import date, timedelta

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health():
    r = client.get("/api/health")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"


def test_destinations():
    r = client.get("/api/destinations")
    assert r.status_code == 200
    assert len(r.json()) == 15
    assert all("airport" in d for d in r.json())


def test_flights_mock():
    r = client.get("/api/flights", params={"dest_id": "paris", "origin": "JFK"})
    assert r.status_code == 200
    body = r.json()
    assert body["cheapest"]["price_usd"] > 0
    assert body["cheapest"]["origin"] == "JFK"


def test_weather_curve():
    r = client.get("/api/weather/tokyo")
    assert r.status_code == 200
    assert len(r.json()["months"]) == 12


def test_price_prediction():
    r = client.get("/api/predict/price", params={"dest_id": "dubai", "days_out": 90})
    assert r.status_code == 200
    body = r.json()
    assert body["predicted_price_now"] > 0
    assert 0 <= body["expected_drop_pct"] <= 100
    assert len(body["monthly"]) == 12


def test_best_time():
    r = client.get("/api/predict/best-time", params={"dest_id": "rio"})
    assert r.status_code == 200
    assert 1 <= r.json()["best_month"]["month"] <= 12


def test_route_plan():
    depart = (date.today() + timedelta(days=30)).isoformat()  # unused, keeps import
    payload = {
        "stops": [
            {"name": "Paris", "lat": 48.85, "lng": 2.35},
            {"name": "Tokyo", "lat": 35.68, "lng": 139.65},
        ],
        "optimize": False,
    }
    r = client.post("/api/routes/plan", json=payload)
    assert r.status_code == 200
    assert r.json()["total_distance_km"] > 0
    assert len(r.json()["legs"]) == 1


def test_unknown_destination_404():
    assert client.get("/api/weather/atlantis").status_code == 404
