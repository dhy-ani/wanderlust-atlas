"""Per-twin semantic memory: past-trip notes and survey free-text, recalled during
future planning so a twin can say "you disliked crowded beaches last time." Backed
by ChromaDB (local embedding model, no API key needed) when reachable, with a
keyword-overlap fallback otherwise — same graceful-degrade pattern as the rest of
the app. Both paths expose the same store()/recall() interface.
"""
from __future__ import annotations

import json
import os
import re
from pathlib import Path

FALLBACK_PATH = Path(__file__).resolve().parents[2] / "data" / "memory_fallback.json"

_client = None
_collection = None
_tried_chroma = False


def _get_collection():
    """Lazily connects to ChromaDB (HTTP mode via CHROMA_HOST, or a local persistent
    client) the first time it's needed. Returns None if unavailable."""
    global _client, _collection, _tried_chroma
    if _tried_chroma:
        return _collection
    _tried_chroma = True
    try:
        import chromadb
        host = os.environ.get("CHROMA_HOST", "")
        if host:
            port = int(os.environ.get("CHROMA_PORT", "8000"))
            _client = chromadb.HttpClient(host=host, port=port)
        else:
            persist_dir = Path(__file__).resolve().parents[2] / "data" / "chroma"
            persist_dir.mkdir(parents=True, exist_ok=True)
            _client = chromadb.PersistentClient(path=str(persist_dir))
        _client.heartbeat()
        _collection = _client.get_or_create_collection("twin_memory")
    except Exception as exc:
        print(f"[memory] ChromaDB unavailable, using keyword fallback: {exc}")
        _collection = None
    return _collection


def is_live() -> bool:
    return _get_collection() is not None


# ---- keyword fallback store (JSON file, no external service) ----
def _load_fallback() -> list[dict]:
    if FALLBACK_PATH.exists():
        return json.loads(FALLBACK_PATH.read_text(encoding="utf-8"))
    return []


def _save_fallback(items: list[dict]) -> None:
    FALLBACK_PATH.parent.mkdir(parents=True, exist_ok=True)
    FALLBACK_PATH.write_text(json.dumps(items, indent=2), encoding="utf-8")


def _tokenize(text: str) -> set[str]:
    return set(re.findall(r"[a-z]+", text.lower()))


def store(group_id: str, member_name: str, text: str, metadata: dict | None = None) -> None:
    if not text.strip():
        return
    meta = {"group_id": group_id, "member_name": member_name, **(metadata or {})}
    col = _get_collection()
    if col is not None:
        doc_id = f"{group_id}:{member_name}:{abs(hash(text))}"
        col.upsert(ids=[doc_id], documents=[text], metadatas=[meta])
        return
    items = _load_fallback()
    items.append({"text": text, **meta})
    _save_fallback(items)


def recall(group_id: str, member_name: str, query: str, k: int = 3) -> list[dict]:
    col = _get_collection()
    if col is not None:
        res = col.query(
            query_texts=[query], n_results=k,
            where={"$and": [{"group_id": group_id}, {"member_name": member_name}]},
        )
        docs = res.get("documents", [[]])[0]
        return [{"text": d} for d in docs]

    items = [i for i in _load_fallback() if i.get("group_id") == group_id and i.get("member_name") == member_name]
    q_tokens = _tokenize(query)
    scored = [(len(q_tokens & _tokenize(i["text"])), i) for i in items]
    scored = [s for s in scored if s[0] > 0]
    scored.sort(key=lambda s: -s[0])
    return [{"text": s[1]["text"]} for s in scored[:k]]
