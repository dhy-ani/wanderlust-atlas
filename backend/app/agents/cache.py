"""Content-hash LLM response cache — the single biggest cost lever in this system.

Every LLM call is keyed by a hash of (prompt content + identity-vector version +
model name). Re-scoring an unchanged proposal, or the same twin re-evaluating a
near-identical option in a later round, hits the cache and costs nothing. Backed by
a small SQLite file so it survives restarts; no external service required.
"""
from __future__ import annotations

import hashlib
import json
import sqlite3
from pathlib import Path
from threading import Lock

CACHE_PATH = Path(__file__).resolve().parents[2] / "data" / "llm_cache.sqlite3"
_lock = Lock()


def _conn() -> sqlite3.Connection:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(CACHE_PATH)
    conn.execute(
        "CREATE TABLE IF NOT EXISTS llm_cache ("
        "  key TEXT PRIMARY KEY, response TEXT NOT NULL, created_at TEXT NOT NULL"
        ")"
    )
    return conn


def cache_key(*, model: str, purpose: str, payload: dict) -> str:
    """Deterministic key: same inputs -> same key -> cache hit."""
    blob = json.dumps(payload, sort_keys=True, default=str)
    return hashlib.sha256(f"{model}|{purpose}|{blob}".encode()).hexdigest()


def get(key: str) -> dict | None:
    with _lock, _conn() as conn:
        row = conn.execute("SELECT response FROM llm_cache WHERE key = ?", (key,)).fetchone()
        return json.loads(row[0]) if row else None


def put(key: str, response: dict) -> None:
    with _lock, _conn() as conn:
        conn.execute(
            "INSERT OR REPLACE INTO llm_cache (key, response, created_at) VALUES (?, ?, datetime('now'))",
            (key, json.dumps(response)),
        )


def stats() -> dict:
    with _lock, _conn() as conn:
        n = conn.execute("SELECT COUNT(*) FROM llm_cache").fetchone()[0]
    return {"cached_responses": n}
