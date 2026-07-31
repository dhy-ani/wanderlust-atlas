"""On-demand web research for a destination — the CrewAI crew in
agents/research_crew.py, cached in the DB so the same destination isn't
re-searched (and re-billed) on every request. Requires sign-in to prevent an
anonymous caller from running up the (capped, but non-zero) LLM/search bill.

If `group_id` is supplied, the group's minimum budget_max across all twins is
passed to the crew's Negotiator agent as a hard ceiling to evaluate the other
agents' findings against (see research_crew.py) — this is what stops the web
research from surfacing a recommendation nobody in the group could afford.
"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.agents import research_crew
from app.auth import get_current_user
from app.db.engine import get_db
from app.db.models import DestinationResearch, GroupMember, Identity, User
from app.services.destinations import by_id

router = APIRouter(prefix="/api/research", tags=["research"])


def _group_budget_ceiling(group_id: int | None, db: Session) -> float | None:
    if not group_id:
        return None
    rows = db.query(Identity.budget_max).filter(Identity.group_id == group_id).all()
    values = [r[0] for r in rows]
    return min(values) if values else None


@router.post("/{destination_id}")
def research_destination(
    destination_id: str, force: bool = False, group_id: int | None = None,
    user: User = Depends(get_current_user), db: Session = Depends(get_db),
):
    dest = by_id(destination_id)
    if not dest:
        raise HTTPException(404, f"unknown destination '{destination_id}'")
    if group_id is not None:
        is_member = db.query(GroupMember).filter(GroupMember.group_id == group_id, GroupMember.user_id == user.id).first()
        if not is_member:
            raise HTTPException(403, "you're not a member of that group")

    cached = db.query(DestinationResearch).filter(DestinationResearch.destination_key == destination_id).first()
    if cached and not force and not research_crew.is_stale(cached.created_at):
        return {
            "status": "ok", "cached": True, "best_time": cached.best_time, "price_insight": cached.price_insight,
            "top_activities": cached.top_activities, "recommendation": cached.recommendation,
        }

    max_budget = _group_budget_ceiling(group_id, db)
    result = research_crew.run_research(dest["name"], max_budget=max_budget)
    if result["status"] == "ok":
        if cached:
            cached.best_time, cached.price_insight = result["best_time"], result["price_insight"]
            cached.top_activities, cached.recommendation = result["top_activities"], result["recommendation"]
        else:
            db.add(DestinationResearch(
                destination_key=destination_id, best_time=result["best_time"], price_insight=result["price_insight"],
                top_activities=result["top_activities"], recommendation=result["recommendation"],
            ))
        db.commit()
    return {**result, "cached": False}


@router.get("/{destination_id}")
def get_cached_research(destination_id: str, db: Session = Depends(get_db)):
    """Read-only, no sign-in needed — just returns whatever's cached, if anything."""
    cached = db.query(DestinationResearch).filter(DestinationResearch.destination_key == destination_id).first()
    if not cached:
        return {"status": "not_researched_yet", "best_time": "", "price_insight": "", "top_activities": [], "recommendation": ""}
    return {
        "status": "ok", "best_time": cached.best_time, "price_insight": cached.price_insight,
        "top_activities": cached.top_activities, "recommendation": cached.recommendation,
        "stale": research_crew.is_stale(cached.created_at),
    }
