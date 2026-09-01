"""Start survey (-> Identity Vector, DB-backed) and end survey (-> feedback fed
into memory). Both require being signed in AND a member of the group — the
Identity is always the CALLER's, never someone else's (no member_name field on
the request bodies)."""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.agents import memory
from app.agents import storage as end_survey_storage
from app.auth import get_current_user
from app.db.engine import get_db
from app.db.models import GroupMember, Identity, User
from app.models.agent_schemas import IdentityVector, SurveyEndIn, SurveyStartIn

router = APIRouter(prefix="/api/survey", tags=["survey"])

_CATEGORY_WORDS = ["hiking", "museums", "nightlife", "beaches", "food", "history",
                   "shopping", "nature", "adventure", "relaxed", "urban", "wildlife", "technology"]


def _require_member(group_id: int, user: User, db: Session) -> None:
    is_member = db.query(GroupMember).filter(GroupMember.group_id == group_id, GroupMember.user_id == user.id).first()
    if not is_member:
        raise HTTPException(403, "you're not a member of this group")


_RICH_FIELDS = [
    "budget_min", "budget_max", "pace", "likes", "dislikes", "hard_constraints",
    "accommodation_style", "food_preferences", "must_see", "avoid", "chronotype",
    "transportation_pref", "trip_priority", "accessibility_needs", "notes",
]


def _to_vector(row: Identity, member_name: str) -> IdentityVector:
    return IdentityVector(
        member_name=member_name, group_id=str(row.group_id), budget_min=row.budget_min, budget_max=row.budget_max,
        pace=row.pace, likes=row.likes, dislikes=row.dislikes, hard_constraints=row.hard_constraints,
        accommodation_style=row.accommodation_style, food_preferences=row.food_preferences,
        must_see=row.must_see, avoid=row.avoid, chronotype=row.chronotype,
        transportation_pref=row.transportation_pref, trip_priority=row.trip_priority,
        accessibility_needs=row.accessibility_needs, notes=row.notes,
        version=row.version, updated_at=row.updated_at.isoformat(),
    )


@router.post("/start", response_model=IdentityVector)
def survey_start(payload: SurveyStartIn, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    _require_member(payload.group_id, user, db)
    existing = db.query(Identity).filter(Identity.group_id == payload.group_id, Identity.user_id == user.id).first()
    row = existing or Identity(group_id=payload.group_id, user_id=user.id)
    for field in _RICH_FIELDS:
        setattr(row, field, getattr(payload, field))
    if existing:
        row.version += 1
    else:
        db.add(row)
    db.commit()
    db.refresh(row)
    if payload.notes:
        memory.store(str(payload.group_id), user.name, payload.notes, {"kind": "start_survey"})
    return _to_vector(row, user.name)


@router.get("/identity/{group_id}", response_model=IdentityVector)
def get_identity(group_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    _require_member(group_id, user, db)
    row = db.query(Identity).filter(Identity.group_id == group_id, Identity.user_id == user.id).first()
    if not row:
        raise HTTPException(404, "no survey submitted yet")
    return _to_vector(row, user.name)


@router.post("/end")
def survey_end(payload: SurveyEndIn, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    _require_member(payload.group_id, user, db)
    entry = end_survey_storage.save_end_survey(payload)
    text = f"Liked: {payload.liked}. Would change: {payload.would_change}. Rating: {payload.rating}/10."
    memory.store(str(payload.group_id), user.name, text, {"kind": "end_survey"})
    return entry


@router.get("/end/{group_id}")
def list_end_surveys(group_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    _require_member(group_id, user, db)
    return end_survey_storage.list_end_surveys(group_id)


@router.post("/extract")
def extract_preferences(chat_text: str, user: User = Depends(get_current_user)):
    """Turn free-text chat into likes/dislikes. Uses a keyword pass by default (free,
    real, no key needed); an LLM-based extractor can replace this once
    OPENROUTER_API_KEY is set and worth the marginal accuracy for your use case."""
    text = chat_text.lower()
    likes = [w for w in _CATEGORY_WORDS if w in text and "not " + w not in text and f"don't like {w}" not in text]
    dislikes = [w for w in _CATEGORY_WORDS if f"hate {w}" in text or f"don't like {w}" in text or f"not {w}" in text]
    likes = [w for w in likes if w not in dislikes]
    return {"member_name": user.name, "extracted_likes": likes, "extracted_dislikes": dislikes, "method": "keyword"}
