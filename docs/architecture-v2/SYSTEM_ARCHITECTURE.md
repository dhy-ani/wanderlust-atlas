# System Architecture — Multi-Agent Group Trip Planner

Branch: `agent-integration`. This document describes the target architecture and,
where a section says **[BUILT]**, that piece is real and tested on this branch today.
Everything else is designed but not yet implemented — see
[`IMPLEMENTATION_CHECKLIST.md`](IMPLEMENTATION_CHECKLIST.md) for exact status.

## The idea, restated precisely

A **group** (like a group chat) is created by an **admin** who sets a join code.
Anyone with the link + code joins and fills out a **start survey** (what they like,
budget, dislikes) — this becomes their **Identity Vector**. Each member gets a
**Digital Twin**: an agent that argues on their behalf during planning, using their
Identity Vector plus anything learned from past trips (vector memory) and contextual
world knowledge (GraphRAG). A **Mediator** proposes an itinerary; twins score it;
if the blended score is **< 80**, the mediator reconfigures using GraphRAG-sourced
alternatives and tries again. When the trip is over, an **end survey** captures what
worked and what didn't, feeding back into each twin's memory for next time.

## Diagram

```mermaid
flowchart TB
    subgraph Client["FRONTEND (Vite + Three.js)"]
        Globe["3D Globe + Route Lines"]
        Chat["Negotiation Chat UI"]
        Survey["Start / End Survey"]
        TwinDash["Twin Preference Dashboard"]
    end

    subgraph API["FASTAPI ORCHESTRATOR"]
        REST["REST endpoints\n(group, survey, negotiate)"]
        Graph["LangGraph negotiation engine"]
    end

    subgraph Agents["AGENT ECOSYSTEM"]
        Mediator["Mediator / Negotiator Agent"]
        TwinA["Digital Twin — User A"]
        TwinB["Digital Twin — User B"]
        TwinN["Digital Twin — User N"]
        Scraper["Web/Weather Scraper Agent"]
    end

    subgraph Reasoning["COST-OPTIMIZED REASONING CORE"]
        Rules["Rule-based pre-scorer\n(free, deterministic)"]
        Cache["LLM response cache\n(content-hash keyed)"]
        LLM["OpenRouter LLM\n(cheapest-effective model)"]
    end

    subgraph Data["TOOLS & DATA (MCP-wrapped)"]
        Neo4j[("Neo4j — GraphRAG\nplaces · relationships · safety")]
        Chroma[("ChromaDB — per-twin\nsemantic memory")]
        ML["XGBoost / GBM\nprice models"]
        RealAPI["Amadeus · OpenWeather\n· Places (real APIs)"]
    end

    Client -- HTTP/JSON --> REST
    REST --> Graph
    Graph --> Mediator
    Mediator <--> TwinA & TwinB & TwinN
    Mediator --> Scraper
    TwinA & TwinB & TwinN --> Rules
    Rules -- "ambiguous score (55-90)\nor first-time proposal" --> Cache
    Cache -- "cache miss" --> LLM
    Cache -- "cache hit" --> TwinA
    Mediator -- "pre-fetch context\n(1 round-trip, no tool loop)" --> Neo4j
    Mediator --> Chroma
    Mediator --> ML
    Scraper --> RealAPI
    Graph -- "score < 80 → reconfigure" --> Mediator
    Graph -- "transcript + final plan" --> REST
```

## Why this design keeps API calls (and cost) low

This is the part most multi-agent tutorials get wrong — they call the LLM for
*everything*, including things a rule can decide for free. Four deliberate choices:

1. **Rule-based pre-scorer is the default path — [BUILT].** Each twin's Identity
   Vector has structured fields (budget range, category likes/dislikes, pace). A
   proposal is scored against these with plain arithmetic: budget-fit %, category
   overlap, dislike collisions. This produces a 0–100 score **with zero API calls**.
   Most proposals are either obviously good (≥90, rule-score is trustworthy) or
   obviously bad (≤40, reject without asking an LLM to confirm the obvious).

2. **The LLM is only invoked in the ambiguous zone.** Only when the rule-based score
   lands in `[55, 90)` — genuinely uncertain — or the natural-language reasoning text
   is needed for the chat log, do we call OpenRouter. This alone typically eliminates
   the majority of calls a naive "ask the LLM to score everything" design would make.

3. **One batched call per round, not one call per twin.** When the LLM *is* needed,
   the mediator sends a single prompt containing all twins' identity summaries and
   gets back a structured JSON array of verdicts — turning what would be N calls into
   1. Context (GraphRAG relationships, ChromaDB memory hits) is pre-fetched and
   injected directly into that one prompt, rather than letting the model make its own
   tool calls in a loop (the #1 cost blowup in naive LangGraph/CrewAI agents).

4. **Content-hash response caching — [BUILT].** Every LLM call is cached by
   `hash(proposal + identity_vector_version + model)`. Re-scoring an unchanged
   proposal, or re-planning a similar trip next year, can hit the cache and cost
   nothing. TTL-free by default (identity vectors are versioned, so a cache entry is
   naturally invalidated when a twin's preferences change).

5. **Cheapest-effective model, swappable per role.** Default is
   `google/gemini-2.5-flash-lite` via OpenRouter for both twin scoring (high volume)
   and mediator synthesis (low volume) — configurable independently via
   `TWIN_MODEL` / `MEDIATOR_MODEL` env vars if you later want a stronger model just
   for the mediator's final write-up.

## Scoring & reconfiguration logic — [BUILT]

```
base_score      = average(twin.personal_score for twin in twins)
reject_count    = count(twin.verdict == REJECT)
penalty         = 0.55 if reject_count >= 2 else 1.0     # "hurts the score" per spec
final_score     = base_score * penalty

if final_score < 80:
    mediator queries GraphRAG for alternatives addressing each REJECTing twin's
    stated dislikes, builds a counter-proposal, and the round repeats
    (max 5 rounds; loop also breaks early if every twin ACCEPTs)
```

See `backend/app/agents/reasoner.py::score_proposal` and
`backend/app/agents/mediator.py::run_negotiation`.

## Component reference

| Component | File(s) | Status |
|---|---|---|
| Identity Vector schema | `backend/app/models/agent_schemas.py` | **[BUILT]** |
| Rule-based scorer | `backend/app/agents/reasoner.py` | **[BUILT]** |
| OpenRouter client + cache | `backend/app/agents/llm_client.py`, `cache.py` | **[BUILT]** (no-op without a key) |
| Digital Twin | `backend/app/agents/twin.py` | **[BUILT]** |
| Mediator / negotiation loop | `backend/app/agents/mediator.py` | **[BUILT]** (LangGraph-based) |
| GraphRAG (Neo4j) | `backend/app/agents/graphrag.py` + `docker-compose.agents.yml` | **[BUILT]** client + ingestion; runs against real Neo4j |
| Vector memory (ChromaDB) | `backend/app/agents/memory.py` | **[BUILT]** client with graceful degrade |
| Group / join-code | `backend/app/routers/group.py` | **[BUILT]** in-memory + JSON persistence |
| Start/end survey | `backend/app/routers/survey.py` | **[BUILT]** |
| Negotiation endpoint | `backend/app/routers/negotiate.py` | **[BUILT]** |
| Negotiation chat UI | `frontend/src/panels/negotiationPanel.js` | **[BUILT]** — picks a bucket-list destination, previews/runs the mediator's own POI proposal |
| Web trending-signal agent | `backend/app/agents/scraper.py` | **[BUILT]** — Reddit public search (not Instagram; see checklist) |
| Hard spend guardrails | `backend/app/agents/budget_guard.py` | **[BUILT]** — per-minute/day/run caps, verified with a real key |
| Real Amadeus/ML retraining on Kaggle data | — | not built this session (needs dataset + real key) |
| Twin preference dashboard (rich UI) | — | not built this session (basic survey form only) |

## Real vs. mock, the same philosophy as the rest of the app

Every external dependency degrades gracefully, exactly like flights/weather/places
already do:

| Dependency | Missing → | Present →|
|---|---|---|
| `OPENROUTER_API_KEY` | rule-based scoring only (fully functional, $0) | LLM tie-breaks ambiguous scores + writes chat-log prose |
| Neo4j reachable | GraphRAG queries return a small built-in static relationship dict | real Cypher queries against ingested destination graph |
| ChromaDB reachable | memory lookups return `[]` (no past-trip context) | real semantic search over each twin's trip history |

This means the whole negotiation loop is **testable end-to-end today**, for free,
before you spend a cent on OpenRouter or run a single Docker container.
