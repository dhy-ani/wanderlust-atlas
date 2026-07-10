# Backend — Wanderlust Atlas API

FastAPI service providing flights, weather, ML price prediction, place search and
route planning. Every external integration degrades gracefully to mock data, so it
runs with an empty `.env`.

## Run

```bash
python -m venv .venv && .venv\Scripts\activate     # Windows
pip install -r requirements.txt
python -m app.ml.train        # optional but recommended: trains the price model
uvicorn app.main:app --reload --port 8000
```

Interactive docs: **http://localhost:8000/docs**

## Endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/health` | which live integrations are active |
| GET | `/api/destinations` | canonical destination list (+ airport codes) |
| GET | `/api/flights?dest_id=&origin=JFK` | live/mock flight offers |
| GET | `/api/weather/{dest_id}` | 12-month comfort curve + best months |
| GET | `/api/places/search?lat=&lng=&q=` | nearby / free-text place search |
| GET | `/api/predict/price?dest_id=&days_out=` | ML "book now vs. wait" + drop % |
| GET | `/api/predict/best-time?dest_id=` | cheap-tickets + perfect-weather month |
| POST | `/api/routes/plan` | route legs & totals for dashed globe lines |

## Layout

```
app/
├── main.py         app assembly + CORS + /api/health
├── config.py       .env-driven settings, has_* feature flags
├── models/         pydantic request/response schemas
├── routers/        one file per feature (thin HTTP layer)
├── services/       third-party clients + mock fallback
│   ├── amadeus_client.py   weather_client.py   places_client.py
│   ├── mock_data.py        deterministic offline data
│   └── destinations.py     data loader + haversine
└── ml/             trainable models
    ├── price_model.py  simulate_price + GradientBoosting wrapper
    ├── best_time.py    price × weather blend
    └── train.py        `python -m app.ml.train`
```

## Tests

```bash
pytest            # all mock-path smoke tests, no keys needed
```
