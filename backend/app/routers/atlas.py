"""A signed-in user's personal atlas (the solo globe's destination list) —
replaces the old global, unauthenticated `destinations.json` +
`custom_destinations.json` file store. Every destination belongs to exactly
one account, added by that account, with no shared/seeded/hardcoded starting
data for anyone — every new account starts completely empty."""
from __future__ import annotations

import re
import secrets

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session

from app.auth import get_current_user
from app.db.engine import get_db
from app.db.models import User, UserDestination
from app.services.destinations import register_custom

router = APIRouter(prefix="/api/atlas", tags=["atlas"])


class NewAtlasDestination(BaseModel):
    name: str = Field(..., min_length=1)
    country: str = ""
    lat: float = Field(..., ge=-90, le=90)
    lng: float = Field(..., ge=-180, le=180)
    airport: str = ""
    days: int = 4
    budgetLow: int = 100
    budgetHigh: int = 200
    tagline: str = ""


def _slugify(name: str) -> str:
    base = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-") or "place"
    return f"{base}-{secrets.token_hex(2)}"


def _serialize(row: UserDestination) -> dict:
    return {
        "id": row.dest_key, "name": row.name, "country": row.country,
        "lat": row.lat, "lng": row.lng, "airport": row.airport, "days": row.days,
        "budgetLow": row.budget_low, "budgetHigh": row.budget_high,
        "tagline": row.tagline, "custom": row.custom,
        **(row.content or {}),
    }


@router.get("")
def list_my_atlas(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.query(UserDestination).filter_by(user_id=user.id).order_by(UserDestination.added_at).all()
    return [_serialize(r) for r in rows]


@router.post("", status_code=201)
def add_to_atlas(d: NewAtlasDestination, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    row = UserDestination(
        user_id=user.id, dest_key=_slugify(d.name), name=d.name, country=d.country,
        lat=d.lat, lng=d.lng, airport=d.airport, days=d.days,
        budget_low=d.budgetLow, budget_high=d.budgetHigh, tagline=d.tagline, custom=True, content={},
    )
    db.add(row)
    db.commit()
    # Also register it with the legacy destination registry that the group-
    # negotiation pipeline (mediator/research/negotiate routers) still resolves
    # `destination_id` against — otherwise a destination you just added couldn't
    # be picked for group trip planning. Read-only reference data, not exposed
    # to any personal-atlas endpoint.
    register_custom({
        "id": row.dest_key, "name": row.name, "country": row.country,
        "lat": row.lat, "lng": row.lng, "airport": row.airport or "JFK",
        "days": row.days, "budgetLow": row.budget_low, "budgetHigh": row.budget_high,
        "bestTime": "", "custom": True,
    })
    return _serialize(row)


@router.delete("/{dest_key}")
def remove_from_atlas(dest_key: str, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    row = db.query(UserDestination).filter_by(user_id=user.id, dest_key=dest_key).first()
    if not row:
        raise HTTPException(404, f"'{dest_key}' isn't in your atlas")
    db.delete(row)
    db.commit()
    return {"removed": dest_key}
