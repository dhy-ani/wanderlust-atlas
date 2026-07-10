# 🌍 The Wanderlust Atlas

An interactive travel-planning app built around a real 3D satellite globe. Spin the
globe, explore dream destinations, search for nearby places, plan multi-stop routes
drawn as dashed lines across the map, and get **live flight prices**, **weather
comfort scores**, and **machine-learning price predictions** ("book now vs. wait")
for trips departing from **New York (JFK / EWR)**.

![stack](https://img.shields.io/badge/backend-FastAPI-009688) ![stack](https://img.shields.io/badge/frontend-Vite%20%2B%20Three.js-646cff) ![ml](https://img.shields.io/badge/ML-scikit--learn-f7931e)

---

## What it does

| Feature | Where it lives |
|---|---|
| Real satellite 3D globe + Google-style pins | `frontend/src/globe/` |
| 2D detail map with **Satellite + Street View** | `frontend/src/panels/mapPanel.js` |
| Search nearby famous places / add manually | `frontend/src/panels/mapPanel.js` + `backend/.../places.py` |
| **Add any place as a destination** (geocoded, persisted) | `frontend/src/panels/addDestination.js` + `backend/.../destinations.py` |
| Remove destinations & suggestions | `frontend/src/panels/*` |
| **Live flight prices** from JFK / EWR | `backend/app/services/amadeus_client.py` |
| **Weather** best-time scoring | `backend/app/services/weather_client.py` |
| **ML price prediction** (drop %, best month to book) | `backend/app/ml/` |
| Multi-stop **route planner** with dashed globe lines | `frontend/src/panels/routePlanner.js` + `globe/routes.js` |

## Quick start

### 🐳 Option A — Docker (easiest; nothing but Docker required)

Best for running on another laptop — no Python/Node install needed.

```bash
docker compose up --build      # from the project root
# open http://localhost:8080
```

New to Docker? [`docs/DOCKER.md`](docs/DOCKER.md) teaches the concepts using these exact files.

### Option B — run the two dev servers directly

```bash
# 1. Backend (Python 3.10+)
cd backend
python -m venv .venv
.venv\Scripts\activate           # Windows  (source .venv/bin/activate on macOS/Linux)
pip install -r requirements.txt
copy ..\.env.example ..\.env      # then fill in your keys (see docs/SETUP.md)
python -m app.ml.train            # train the ML price models (writes data/models/*.joblib)
uvicorn app.main:app --reload --port 8000

# 2. Frontend (Node 18+)  -- in a second terminal
cd frontend
npm install
copy .env.example .env            # add your Google Maps browser key
npm run dev                        # opens http://localhost:5173
```

The app **runs with zero keys** thanks to realistic mock fallbacks — add real keys
in `.env` to switch each feature to live data. See [`docs/SETUP.md`](docs/SETUP.md).

## Repo layout

```
wanderlust-atlas/
├── backend/      FastAPI API: flights, weather, places, ML predictions, routes
│   └── app/
│       ├── routers/    HTTP endpoints (one file per feature)
│       ├── services/   Third-party API clients + mock fallback
│       ├── ml/         Trainable price + best-time models
│       └── models/     Pydantic request/response schemas
├── frontend/     Vite + Three.js single-page app
│   └── src/
│       ├── globe/      3D satellite globe, pins, dashed routes
│       ├── panels/     Detail / map / flights / route / bucket UI
│       └── search/     Nearby + manual place search
└── docs/         Architecture, setup (API keys), and ML explainer
```

Read [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for how data flows through the app,
and [`docs/ML.md`](docs/ML.md) for how the price models work.
