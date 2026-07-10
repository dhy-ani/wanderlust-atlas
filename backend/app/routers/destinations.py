"""Serve the destination list, and let users add/remove their own custom
destinations. Custom destinations are persisted so they survive restarts and are
returned on the next `GET`, which is how the frontend restores them after a reload."""
import re
import secrets

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from app.services.destinations import (
    all_destinations,
    by_id,
    nearest_airport,
    register_custom,
    remove_custom,
)

router = APIRouter(prefix="/api/destinations", tags=["destinations"])


class NewDestination(BaseModel):
    name: str = Field(..., min_length=1)
    country: str = "Custom pin"
    lat: float = Field(..., ge=-90, le=90)
    lng: float = Field(..., ge=-180, le=180)
    airport: str | None = None       # IATA; auto-filled with nearest if omitted
    days: int = 4
    budgetLow: int = 80
    budgetHigh: int = 150
    bestTime: str = "Year-round"


def _slugify(name: str) -> str:
    base = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-") or "place"
    return f"custom-{base}-{secrets.token_hex(2)}"


@router.get("")
def list_destinations():
    return all_destinations()


@router.post("", status_code=201)
def add_destination(d: NewDestination):
    dest = d.model_dump()
    dest["id"] = _slugify(d.name)
    dest["custom"] = True
    if not dest.get("airport"):
        dest["airport"] = nearest_airport(d.lat, d.lng)
    return register_custom(dest)


@router.delete("/{dest_id}")
def delete_destination(dest_id: str):
    if by_id(dest_id) is None:
        raise HTTPException(404, f"unknown destination '{dest_id}'")
    if not remove_custom(dest_id):
        raise HTTPException(400, "only custom destinations can be removed")
    return {"removed": dest_id}
