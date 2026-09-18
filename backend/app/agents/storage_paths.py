"""Resolves a writable path for the small local files various modules use for
caching, rate-limit bookkeeping, and JSON-file fallback persistence (cache.py,
budget_guard.py, memory.py, storage.py, services/destinations.py).

Vercel's serverless filesystem is read-only everywhere except /tmp (Vercel
always sets VERCEL=1 in that runtime) -- writing to backend/data/ there
raises OSError: unable to open database file / read-only file system. /tmp
is ephemeral per function instance, an acceptable trade-off for caches, rate
limiters, and this graceful-degrade JSON fallback data (not the primary
database, which is real Postgres via DATABASE_URL): worst case, a cold
instance starts with an empty cache/fallback store instead of losing real
data."""
from __future__ import annotations

import os
from pathlib import Path


def data_path(*parts: str) -> Path:
    if os.environ.get("VERCEL"):
        return Path("/tmp").joinpath(*parts)
    return Path(__file__).resolve().parents[2] / "data" / Path(*parts)


def sqlite_path(filename: str) -> Path:
    return data_path(filename)
