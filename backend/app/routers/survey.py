"""Start survey (-> Identity Vector) and end survey (-> feedback fed into memory)."""
from fastapi import APIRouter

from app.agents import memory, storage
from app.models.agent_schemas import IdentityVector, SurveyEndIn, SurveyStartIn

router = APIRouter(prefix="/api/survey", tags=["survey"])

_CATEGORY_WORDS = ["hiking", "museums", "nightlife", "beaches", "food", "history",
                   "shopping", "nature", "adventure", "relaxed", "urban", "wildlife", "technology"]


@router.post("/start", response_model=IdentityVector)
def survey_start(payload: SurveyStartIn):
    identity = storage.save_identity_from_survey(payload)
    if payload.notes:
        memory.store(payload.group_id, payload.member_name, payload.notes, {"kind": "start_survey"})
    return identity


@router.get("/identity/{group_id}/{member_name}", response_model=IdentityVector)
def get_identity(group_id: str, member_name: str):
    identity = storage.get_identity(group_id, member_name)
    return identity


@router.post("/end")
def survey_end(payload: SurveyEndIn):
    entry = storage.save_end_survey(payload)
    # Feed the retrospective back into the twin's memory so future trips benefit.
    text = f"Liked: {payload.liked}. Would change: {payload.would_change}. Rating: {payload.rating}/10."
    memory.store(payload.group_id, payload.member_name, text, {"kind": "end_survey"})
    return entry


@router.get("/end/{group_id}")
def list_end_surveys(group_id: str):
    return storage.list_end_surveys(group_id)


@router.post("/extract")
def extract_preferences(group_id: str, member_name: str, chat_text: str):
    """Turn free-text chat into likes/dislikes. Uses a keyword pass by default (free,
    real, no key needed); an LLM-based extractor can replace this once
    OPENROUTER_API_KEY is set and worth the marginal accuracy for your use case."""
    text = chat_text.lower()
    likes = [w for w in _CATEGORY_WORDS if w in text and "not " + w not in text and f"don't like {w}" not in text]
    dislikes = [w for w in _CATEGORY_WORDS if f"hate {w}" in text or f"don't like {w}" in text or f"not {w}" in text]
    likes = [w for w in likes if w not in dislikes]
    return {"member_name": member_name, "extracted_likes": likes, "extracted_dislikes": dislikes, "method": "keyword"}
