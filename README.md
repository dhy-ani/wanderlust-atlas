# 🌍 The Wanderlust Atlas

**A real 3D satellite globe for planning trips — live flight prices, ML-driven "book now vs. wait" predictions, and a multi-agent AI system that negotiates a group itinerary on your behalf.**

**🌐 Live demo: https://dhy-ani.github.io/wanderlust-atlas/**
*(runs backend-free in "static mode" — a client-side port of the same logic; see [docs/DEPLOY.md](docs/DEPLOY.md))*

![stack](https://img.shields.io/badge/backend-FastAPI-009688) ![stack](https://img.shields.io/badge/frontend-Vite%20%2B%20Three.js-646cff) ![ml](https://img.shields.io/badge/ML-scikit--learn-f7931e) ![agents](https://img.shields.io/badge/agents-LangGraph%20%2B%20GraphRAG-8a2be2) ![docker](https://img.shields.io/badge/deploy-Docker%20Compose-2496ed)

---

## What this is

Most travel-planning demos are a form bolted onto a map API. This one is built
around a genuinely rendered **3D Earth** (real satellite imagery, not a flat
projection), and every "smart" feature behind it is real, working code — not a
mockup:

- A **trained machine-learning model** (GradientBoosting, R² ≈ 0.96) predicts
  flight prices and tells you whether to book now or wait.
- A **multi-agent AI system** (LangGraph + GraphRAG + a real LLM) lets a group
  of people each get a "Digital Twin" that argues on their behalf, negotiating
  a shared itinerary until everyone's happy — or explains exactly why not.
- Every external dependency (flights, weather, places, the LLM, the graph
  database) has a **free, deterministic fallback**, so the entire app — including
  the AI negotiation loop — runs and is fully testable at **$0**, before you add
  a single API key.

## Features

| Feature | What's actually happening |
|---|---|
| 🌍 Real 3D satellite globe | Three.js sphere with a real Earth texture, Google-Maps-style pins, drag-to-rotate, click-to-select |
| 🛰️ 2D map with Satellite + Street View | Google Maps when a key is present; falls back to keyless Leaflet + Esri satellite tiles |
| 🔍 Search & add any destination | Type any place name → geocoded worldwide (Google Places or OpenStreetMap), dropped on the globe with live data |
| ✈️ Live flight prices from JFK/EWR | Real Amadeus flight search, with a realistic simulated fallback when no key is configured |
| 🌦️ Weather best-time scoring | 12-month comfort-score curve from a latitude-driven climate model, calibrated with live data when available |
| 🤖 ML price prediction | A trained scikit-learn model predicts the "book now vs. wait" call and the cheapest month to fly |
| 🧭 Multi-stop route planner | Dashed great-circle flight paths drawn directly on the globe, with nearest-neighbour route optimization |
| ✦ Bucket list with attribution | Every added destination tracks who added it and how many days/budget, persisted locally |
| 🤝 **Multi-agent group negotiation** | Each group member gets a Digital Twin; a Mediator agent proposes a route *within* a chosen destination (real points of interest, not made up ones) and negotiates until the group's score clears 80 |
| 📱 Mobile-responsive | Same feature set, scaled down — no separate app, verified at real phone viewport widths |
| 🐳 One-command Docker deploy | `docker compose up --build` runs the entire stack, including Neo4j + a vector database, on any machine |

## Why this project is relevant right now

This isn't a toy CRUD app — it's built around the specific problems the software
industry is actually working on in 2026:

- **Agentic AI, done responsibly.** Most "multi-agent" demos call an LLM for
  every decision, which is slow and expensive. This system uses a **free
  rule-based scorer first**, and only escalates to a real LLM call when a
  proposal's score is genuinely ambiguous — batching multiple agents into a
  single call, caching every response by content hash, and enforcing hard
  per-minute/per-day/per-run spend caps at the one place API calls actually
  happen. That's the actual engineering challenge in production LLM systems:
  not "can it call an API," but "can it call the API *rarely, cheaply, and
  safely*."
- **RAG done as a real graph, not a vector-only hack.** The mediator queries a
  **Neo4j knowledge graph** of destinations, points of interest, and categories
  to find alternatives when a group member rejects a proposal — genuine
  GraphRAG, not a single embeddings index.
- **Real-time signal from where people actually talk about travel.** A Reddit-based
  trending agent — not Instagram (which has no public API for this and would
  mean scraping against their Terms of Service) — surfaces what's currently
  worth seeing.
- **Machine learning that ships, not a notebook.** The price model is trained,
  serialized, and served from a live FastAPI endpoint, with the training
  pipeline itself in the repo (`python -m app.ml.train`).
- **Production engineering discipline**: Docker multi-stage builds, a
  mock-fallback pattern applied consistently across *every* external
  dependency, mutation testing (not just line coverage) as a quality gate, and
  a static-site deployment path for the parts that don't need a server.

## Architecture

```
┌─────────────────────────────┐        HTTP/JSON        ┌──────────────────────────────┐
│  Frontend (Vite + Three.js) │ ───────────────────────► │  Backend (FastAPI, Python)   │
│                              │ ◄─────────────────────── │                              │
│  • 3D satellite globe        │                          │  • routers/  (HTTP layer)    │
│  • 2D map + Street View       │                         │  • services/ (real API       │
│  • detail / route / bucket UI │                         │     clients + mock fallback) │
│  • negotiation chat UI        │                         │  • ml/       (price models)  │
└──────────────────────────────┘                          │  • agents/   (multi-agent    │
        │                                                 │     negotiation system)      │
        │ Google Maps JS (browser key)                    └──────────────────────────────┘
        ▼                                                          │
   viewer's browser                          ┌───────────┬─────────┼──────────┬────────────┐
                                              ▼           ▼         ▼          ▼            ▼
                                          Amadeus   OpenWeather  Google/OSM  Neo4j      OpenRouter
                                          (flights)  (weather)   (places)  (GraphRAG)  (LLM, capped)
```

Full diagrams and the cost-control design for the agent system:
[`docs/architecture-v2/SYSTEM_ARCHITECTURE.md`](docs/architecture-v2/SYSTEM_ARCHITECTURE.md).

## Skills & tools demonstrated

| Category | Tools |
|---|---|
| **Frontend** | Vite, vanilla JS (ES modules, no framework), Three.js (3D rendering, raycasting, custom shaders-adjacent texture work), Leaflet, responsive CSS (mobile-first breakpoints verified at real viewport sizes) |
| **Backend** | Python, FastAPI, Pydantic v2, async I/O (`httpx`), REST API design |
| **Machine learning** | scikit-learn (GradientBoostingRegressor), feature engineering (cyclic month encoding, booking-curve modeling), model training/serialization pipelines |
| **AI agents / LLM systems** | LangGraph (stateful agent orchestration), OpenRouter (cost-aware model routing), prompt design for structured JSON output, response caching, hard spend guardrails |
| **Knowledge graphs / RAG** | Neo4j + Cypher, GraphRAG query design, ChromaDB (vector memory), embedding-based semantic recall |
| **Testing & quality** | pytest, pytest-cov, **mutation testing** (mutmut — verified 86.8% mutation score, not just line coverage), boundary-condition test design |
| **DevOps** | Docker, Docker Compose (multi-service orchestration, healthchecks, named volumes), multi-stage builds, GitHub Actions (CI groundwork), static-site deployment (GitHub Pages) |
| **Third-party integrations** | Amadeus (flights), OpenWeather, Google Maps/Places, OpenStreetMap/Nominatim, Reddit's public API |
| **Systems design** | Graceful degradation as a first-class design pattern (every external dependency has a tested, free fallback), cost-optimization architecture for LLM systems, content-addressed caching |

## Getting started

### Option A — Docker (recommended; nothing but Docker required)

```bash
git clone https://github.com/dhy-ani/wanderlust-atlas.git
cd wanderlust-atlas
docker compose up --build
# open http://localhost:8080
```

That's the whole app — frontend + backend + ML model, no Python or Node install
needed. New to Docker? [`docs/DOCKER.md`](docs/DOCKER.md) teaches the concepts
using these exact files.

Want the multi-agent group-planning system with a real graph database too?

```bash
docker compose -f docker-compose.yml -f docker-compose.agents.yml up --build
```

### Option B — run frontend and backend directly

```bash
# 1) Backend (Python 3.10+)
git clone https://github.com/dhy-ani/wanderlust-atlas.git
cd wanderlust-atlas/backend
python -m venv .venv
.venv\Scripts\activate            # Windows — use `source .venv/bin/activate` on macOS/Linux
pip install -r requirements.txt
copy ..\.env.example ..\.env       # then fill in any API keys you have (see docs/SETUP.md)
python -m app.ml.train             # trains the price model (~2s), writes data/models/*.joblib
uvicorn app.main:app --reload --port 8000

# 2) Frontend (Node 18+) — in a second terminal
cd wanderlust-atlas/frontend
npm install
copy .env.example .env             # optional: add a Google Maps browser key
npm run dev                         # http://localhost:5173 (proxies /api to :8000)
```

The app **runs correctly with zero API keys** — every integration has a
realistic mock/fallback. Add real keys to `.env` to switch each feature to live
data; see [`docs/SETUP.md`](docs/SETUP.md) for exactly where to get each one
(most are free tiers).

### Running the tests

```bash
cd backend
pytest                       # full suite, $0 cost, deterministic (mocks the LLM even if a key is configured)
pytest --cov=app             # with coverage report
```

## Repository structure

```
wanderlust-atlas/
├── backend/                  FastAPI application
│   ├── app/
│   │   ├── routers/          HTTP endpoints (one file per feature)
│   │   ├── services/         Real API clients + mock fallback for each
│   │   ├── ml/                Trainable flight-price + best-time models
│   │   ├── agents/            Multi-agent negotiation system (twins, mediator,
│   │   │                      GraphRAG, vector memory, cost-guarded LLM client)
│   │   └── models/           Pydantic request/response schemas
│   ├── data/                 Seed datasets (destinations, points of interest,
│   │                          graph relationships) + runtime state (gitignored)
│   ├── scripts/               GraphRAG ingestion, mutation-score CI gate
│   └── tests/                 pytest suite (unit + integration, all $0 cost)
├── frontend/                  Vite single-page app
│   └── src/
│       ├── globe/             3D satellite globe, pins, dashed routes
│       ├── panels/            Detail / map / route / bucket / negotiation UI
│       ├── logic/             Pure, unit-testable business logic
│       └── staticApi.js       Client-side fallback used for the GitHub Pages build
├── docker-compose.yml         Base stack: backend + frontend (nginx)
├── docker-compose.agents.yml  Adds Neo4j + ChromaDB for the agent system
└── docs/                      Architecture, setup, ML explainer, Docker guide,
                                and architecture-v2/ (the multi-agent system's
                                design doc + implementation checklist)
```

## 🤝 Multi-agent group trip planning

Plan a trip as a group instead of alone: an admin creates a group and gets a
join code; each member fills a short preference survey, which becomes their
**Digital Twin's** Identity Vector. Pick a destination from the group's bucket
list, and the **Mediator** proposes a route through real points of interest
inside it — sourced from a Neo4j knowledge graph and a Reddit-based trending
signal, filtered by what the group actually likes. Each twin scores the
proposal; if the blended score is below 80 (or two or more people reject it),
the mediator reconfigures using graph-sourced alternatives and tries again.

- Runs entirely on a **free, deterministic rule-based scorer** by default — the
  whole negotiation loop is provably correct at $0, tested in
  `backend/tests/test_agents.py`.
- Add `OPENROUTER_API_KEY` to upgrade genuinely ambiguous scoring decisions to a
  real LLM call — batched across all twins, cached by content hash, and hard
  -capped (per-minute/per-day/per-run) so nothing can run away on cost. Verified
  end-to-end with a real key: real English-language reasoning, correctly cached
  on a repeat call, and correctly blocked when a cap is hit.
- Try it in the app: **🤝 Group Plan** in the bottom toolbar (needs the backend
  running — see [docs/architecture-v2/SYSTEM_ARCHITECTURE.md](docs/architecture-v2/SYSTEM_ARCHITECTURE.md)
  for the full design, including exactly how LLM cost is kept low).

## Documentation index

| Doc | Covers |
|---|---|
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | How data flows through the core app |
| [`docs/ML.md`](docs/ML.md) | How the flight-price model is trained and used |
| [`docs/SETUP.md`](docs/SETUP.md) | Where to get every API key, and what breaks without each one |
| [`docs/DOCKER.md`](docs/DOCKER.md) | Docker concepts, taught using this repo's actual files |
| [`docs/DEPLOY.md`](docs/DEPLOY.md) | How the GitHub Pages static build works and how to redeploy it |
| [`docs/architecture-v2/SYSTEM_ARCHITECTURE.md`](docs/architecture-v2/SYSTEM_ARCHITECTURE.md) | The multi-agent system's design, diagrams, and cost-control architecture |
| [`docs/architecture-v2/IMPLEMENTATION_CHECKLIST.md`](docs/architecture-v2/IMPLEMENTATION_CHECKLIST.md) | Exactly what's built vs. still open, with evidence |
