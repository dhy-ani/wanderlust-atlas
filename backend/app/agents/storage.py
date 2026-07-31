"""Persistence for end-of-trip surveys — JSON-file, same pattern as
services/destinations.py's custom-destination registry. Groups/identities/
wishlist used to live here too but are now real DB tables (app/db/models.py),
since "sign in" needs real accounts, not a name typed into a box — see
routers/group.py, routers/survey.py, routers/wishlist.py.
"""
from __future__ import annotations

import json
from pathlib import Path

from app.models.agent_schemas import SurveyEndIn

DATA_DIR = Path(__file__).resolve().parents[2] / "data"
END_SURVEYS_PATH = DATA_DIR / "end_surveys.json"

_end_surveys: list[dict] = []


def _load(path: Path, default):
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return default


def _save(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2), encoding="utf-8")


def _init():
    global _end_surveys
    _end_surveys = _load(END_SURVEYS_PATH, [])


_init()


def save_end_survey(payload: SurveyEndIn) -> dict:
    entry = payload.model_dump()
    _end_surveys.append(entry)
    _save(END_SURVEYS_PATH, _end_surveys)
    return entry


def list_end_surveys(group_id: int) -> list[dict]:
    return [s for s in _end_surveys if s["group_id"] == group_id]
