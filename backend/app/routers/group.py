"""Group ("group chat") creation and join-by-code — real accounts now: the
admin is whoever's signed-in when they create the group, and joining requires
being logged in too, so a shared wishlist/survey can't be spoofed as someone
else. See app/db/models.py for the underlying tables."""
import secrets
import string

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.auth import get_current_user
from app.db.engine import get_db
from app.db.models import Group, GroupMember, User
from app.models.agent_schemas import GroupCreateIn, GroupJoinIn, GroupOut, MemberOut

router = APIRouter(prefix="/api/group", tags=["group"])


def _gen_code(length: int = 6) -> str:
    alphabet = string.ascii_uppercase + string.digits
    return "".join(secrets.choice(alphabet) for _ in range(length))


def _to_out(group: Group, db: Session) -> GroupOut:
    members = (
        db.query(User).join(GroupMember, GroupMember.user_id == User.id)
        .filter(GroupMember.group_id == group.id).all()
    )
    return GroupOut(
        id=group.id, name=group.name, code=group.code, admin_user_id=group.admin_user_id,
        members=[MemberOut(id=m.id, name=m.name) for m in members],
        created_at=group.created_at.isoformat(),
    )


@router.post("", response_model=GroupOut, status_code=201)
def create_group(payload: GroupCreateIn, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    code = (payload.code or _gen_code()).upper()
    if db.query(Group).filter(Group.code == code).first():
        raise HTTPException(409, "that join code is already taken — pick another")
    group = Group(name=payload.name, code=code, admin_user_id=user.id)
    db.add(group)
    db.flush()  # assigns group.id before we reference it
    db.add(GroupMember(group_id=group.id, user_id=user.id))
    db.commit()
    db.refresh(group)
    return _to_out(group, db)


@router.get("/{group_id}", response_model=GroupOut)
def get_group(group_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    group = db.get(Group, group_id)
    if not group:
        raise HTTPException(404, "unknown group")
    is_member = db.query(GroupMember).filter(GroupMember.group_id == group_id, GroupMember.user_id == user.id).first()
    if not is_member:
        raise HTTPException(403, "you're not a member of this group")
    return _to_out(group, db)


@router.post("/join", response_model=GroupOut)
def join_group(payload: GroupJoinIn, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    group = db.query(Group).filter(Group.code == payload.code.upper()).first()
    if not group:
        raise HTTPException(404, "invalid code")
    exists = db.query(GroupMember).filter(GroupMember.group_id == group.id, GroupMember.user_id == user.id).first()
    if not exists:
        db.add(GroupMember(group_id=group.id, user_id=user.id))
        db.commit()
    return _to_out(group, db)
