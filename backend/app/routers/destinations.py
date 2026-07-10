"""Serve the canonical destination list so the frontend and backend never drift."""
from fastapi import APIRouter

from app.services.destinations import all_destinations

router = APIRouter(prefix="/api/destinations", tags=["destinations"])


@router.get("")
def list_destinations():
    return all_destinations()
