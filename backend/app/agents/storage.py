"""Persistence for groups, identity vectors, and end-of-trip surveys. Same JSON-file
pattern as services/destinations.py's custom-destination registry — simple, human
-readable, and volume-mountable in Docker. Swap for a real DB if usage grows."""
from __future__ import annotations

import json
import secrets
import string
import uuid
from pathlib import Path

from app.models.agent_schemas import Group, GroupCreate, IdentityVector, SurveyEndIn, SurveyStartIn

DATA_DIR = Path(__file__).resolve().parents[2] / "data"
GROUPS_PATH = DATA_DIR / "groups.json"
IDENTITIES_PATH = DATA_DIR / "identities.json"
END_SURVEYS_PATH = DATA_DIR / "end_surveys.json"

_groups: dict[str, dict] = {}
_identities: dict[str, dict] = {}   # key: f"{group_id}:{member_name}"
_end_surveys: list[dict] = []


def _load(path: Path, default):
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return default


def _save(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2), encoding="utf-8")


def _init():
    global _groups, _identities, _end_surveys
    _groups = _load(GROUPS_PATH, {})
    _identities = _load(IDENTITIES_PATH, {})
    _end_surveys = _load(END_SURVEYS_PATH, [])


_init()


def _gen_code(length: int = 6) -> str:
    alphabet = string.ascii_uppercase + string.digits
    return "".join(secrets.choice(alphabet) for _ in range(length))


# ---- groups ----
def create_group(payload: GroupCreate) -> Group:
    group = Group(
        id=str(uuid.uuid4())[:8], name=payload.name, code=payload.code or _gen_code(),
        admin_name=payload.admin_name, member_names=[payload.admin_name],
    )
    _groups[group.id] = group.model_dump()
    _save(GROUPS_PATH, _groups)
    return group


def get_group(group_id: str) -> Group | None:
    raw = _groups.get(group_id)
    return Group(**raw) if raw else None


def get_group_by_code(code: str) -> Group | None:
    for raw in _groups.values():
        if raw["code"].upper() == code.upper():
            return Group(**raw)
    return None


def join_group(code: str, member_name: str) -> Group | None:
    group = get_group_by_code(code)
    if not group:
        return None
    if member_name not in group.member_names:
        group.member_names.append(member_name)
        _groups[group.id] = group.model_dump()
        _save(GROUPS_PATH, _groups)
    return group


# ---- identity vectors ----
def _identity_key(group_id: str, member_name: str) -> str:
    return f"{group_id}:{member_name}"


def save_identity_from_survey(payload: SurveyStartIn) -> IdentityVector:
    key = _identity_key(payload.group_id, payload.member_name)
    existing = _identities.get(key)
    version = (existing["version"] + 1) if existing else 1
    identity = IdentityVector(
        member_name=payload.member_name, group_id=payload.group_id,
        budget_min=payload.budget_min, budget_max=payload.budget_max, pace=payload.pace,
        likes=payload.likes, dislikes=payload.dislikes,
        hard_constraints=payload.hard_constraints, notes=payload.notes, version=version,
    )
    _identities[key] = identity.model_dump()
    _save(IDENTITIES_PATH, _identities)
    return identity


def get_identity(group_id: str, member_name: str) -> IdentityVector | None:
    raw = _identities.get(_identity_key(group_id, member_name))
    return IdentityVector(**raw) if raw else None


def list_identities(group_id: str) -> list[IdentityVector]:
    return [IdentityVector(**v) for k, v in _identities.items() if v["group_id"] == group_id]


# ---- end-of-trip surveys ----
def save_end_survey(payload: SurveyEndIn) -> dict:
    entry = payload.model_dump()
    _end_surveys.append(entry)
    _save(END_SURVEYS_PATH, _end_surveys)
    return entry


def list_end_surveys(group_id: str) -> list[dict]:
    return [s for s in _end_surveys if s["group_id"] == group_id]
