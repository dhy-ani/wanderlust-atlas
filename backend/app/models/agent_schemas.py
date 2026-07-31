"""Schemas for the multi-agent group-planning system: groups, identity vectors,
surveys, proposals, and negotiation transcripts. Kept separate from schemas.py
(the original flights/weather/places API) since this is a distinct subsystem."""
from __future__ import annotations

from datetime import datetime, timezone
from enum import Enum
from typing import Literal, Optional

from pydantic import BaseModel, Field


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


# --------------------------------------------------------------------------- #
#  Groups (the "group chat") — real accounts back these now (app/db/models.py);
#  these schemas are just the HTTP request/response shapes for that data.
# --------------------------------------------------------------------------- #
class GroupCreateIn(BaseModel):
    name: str
    code: Optional[str] = None   # admin can set it; auto-generated if omitted


class GroupJoinIn(BaseModel):
    code: str


class MemberOut(BaseModel):
    id: int
    name: str


class GroupOut(BaseModel):
    id: int
    name: str
    code: str
    admin_user_id: int
    members: list[MemberOut] = Field(default_factory=list)
    created_at: str


class WishlistItemIn(BaseModel):
    destination_id: str
    name: str
    country: str = ""
    notes: str = ""


class WishlistItemOut(WishlistItemIn):
    id: int
    added_by: str
    created_at: str


class AvailabilityIn(BaseModel):
    start_date: str   # ISO date, e.g. "2026-08-01"
    end_date: str


class AvailabilityWindowOut(BaseModel):
    start_date: str
    end_date: str


# --------------------------------------------------------------------------- #
#  Identity Vector — the structured core of a Digital Twin
# --------------------------------------------------------------------------- #
class IdentityVector(BaseModel):
    """A twin's preferences. Structured fields drive the free rule-based scorer;
    `notes` is free text that gets embedded into ChromaDB for semantic recall."""
    member_name: str
    group_id: str

    budget_min: float = 0
    budget_max: float = 3000
    pace: Literal["relaxed", "balanced", "packed"] = "balanced"

    likes: list[str] = Field(default_factory=list)      # e.g. ["hiking", "museums", "nightlife"]
    dislikes: list[str] = Field(default_factory=list)    # e.g. ["crowds", "beaches"]
    hard_constraints: list[str] = Field(default_factory=list)  # e.g. ["no red-eye flights"]
    notes: str = ""                                       # free text, embedded for semantic recall

    version: int = 1                                      # bumped on every update; part of the LLM cache key
    updated_at: str = Field(default_factory=_now)


class SurveyStartIn(BaseModel):
    # No member_name here on purpose — it's derived from the authenticated user
    # server-side (see routers/survey.py), so you can't submit preferences as
    # someone else.
    group_id: int
    budget_min: float = 0
    budget_max: float = 3000
    pace: Literal["relaxed", "balanced", "packed"] = "balanced"
    likes: list[str] = Field(default_factory=list)
    dislikes: list[str] = Field(default_factory=list)
    hard_constraints: list[str] = Field(default_factory=list)
    notes: str = ""


class SurveyEndIn(BaseModel):
    group_id: int
    liked: str = ""            # what they liked about the trip
    would_change: str = ""     # what could've been done differently
    rating: int = Field(5, ge=1, le=10)


# --------------------------------------------------------------------------- #
#  Proposals & negotiation
# --------------------------------------------------------------------------- #
class ProposalItem(BaseModel):
    """One point of interest WITHIN the Proposal's destination (see below) — e.g.
    "Eiffel Tower" inside a Paris proposal. `destination_id` here is a slug for
    the POI itself (not a second destination); items never span destinations."""
    destination_id: str
    name: str
    category: str = "general"     # matched against likes/dislikes, e.g. "hiking", "museums"
    est_cost: float = 0


class Proposal(BaseModel):
    """A candidate itinerary for ONE destination. The negotiation loop plans a
    route among places-of-interest *inside* `destination_id` — never a choice
    between different cities (that's the separate personal Route Planner)."""
    destination_id: str = ""
    round: int = 0
    items: list[ProposalItem]
    total_cost: float = 0
    note: str = ""                 # mediator's rationale for this version


class Verdict(str, Enum):
    ACCEPT = "ACCEPT"
    NEUTRAL = "NEUTRAL"
    REJECT = "REJECT"


class TwinVerdict(BaseModel):
    member_name: str
    verdict: Verdict
    personal_score: float = Field(..., ge=0, le=100)
    reasoning: str
    via: Literal["rule", "llm", "cache"] = "rule"   # transparency: how was this decided?


class NegotiationRound(BaseModel):
    round: int
    proposal: Proposal
    verdicts: list[TwinVerdict]
    base_score: float
    reject_count: int
    penalty_applied: bool
    final_score: float


class NegotiationResult(BaseModel):
    group_id: str
    rounds: list[NegotiationRound]
    final_proposal: Proposal
    final_score: float
    accepted: bool          # True if every twin ACCEPTed or score >= 80
    hit_max_rounds: bool
    llm_calls_made: int      # cost transparency
    cache_hits: int
    engine: Literal["langgraph", "plain-loop"] = "plain-loop"
    narrative: str = ""      # Documentation Agent's human-readable record of the reasoning trail
