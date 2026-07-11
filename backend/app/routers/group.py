"""Group ("group chat") creation and join-by-code — the admin sets the code (or
gets one generated), anyone with the code can join."""
from fastapi import APIRouter, HTTPException

from app.agents import storage
from app.models.agent_schemas import Group, GroupCreate, GroupJoin

router = APIRouter(prefix="/api/group", tags=["group"])


@router.post("", response_model=Group, status_code=201)
def create_group(payload: GroupCreate):
    return storage.create_group(payload)


@router.get("/{group_id}", response_model=Group)
def get_group(group_id: str):
    group = storage.get_group(group_id)
    if not group:
        raise HTTPException(404, "unknown group")
    return group


@router.post("/join", response_model=Group)
def join_group(payload: GroupJoin):
    group = storage.join_group(payload.code, payload.member_name)
    if not group:
        raise HTTPException(404, "invalid code")
    return group
