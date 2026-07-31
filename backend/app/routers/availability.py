"""Each member submits date ranges they're free; GET /overlap returns the
windows where EVERYONE who's submitted is simultaneously free — the "which
dates is everyone free" piece. Pure interval math lives in app/scheduling.py."""
from datetime import date as date_type

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.auth import get_current_user
from app.db.engine import get_db
from app.db.models import Availability, GroupMember, User
from app.models.agent_schemas import AvailabilityIn, AvailabilityWindowOut
from app.scheduling import find_common_availability

router = APIRouter(prefix="/api/group/{group_id}/availability", tags=["availability"])


def _require_member(group_id: int, user: User, db: Session) -> None:
    is_member = db.query(GroupMember).filter(GroupMember.group_id == group_id, GroupMember.user_id == user.id).first()
    if not is_member:
        raise HTTPException(403, "you're not a member of this group")


@router.post("", status_code=201)
def add_availability(group_id: int, payload: AvailabilityIn, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    _require_member(group_id, user, db)
    start = date_type.fromisoformat(payload.start_date)
    end = date_type.fromisoformat(payload.end_date)
    if end < start:
        raise HTTPException(400, "end_date must be on or after start_date")
    row = Availability(group_id=group_id, user_id=user.id, start_date=start, end_date=end)
    db.add(row)
    db.commit()
    return {"added": True, "start_date": payload.start_date, "end_date": payload.end_date}


@router.get("/overlap", response_model=list[AvailabilityWindowOut])
def get_overlap(group_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    _require_member(group_id, user, db)
    rows = db.query(Availability).filter(Availability.group_id == group_id).all()
    by_user: dict[int, list[tuple[date_type, date_type]]] = {}
    for r in rows:
        by_user.setdefault(r.user_id, []).append((r.start_date, r.end_date))
    windows = find_common_availability(by_user)
    return [AvailabilityWindowOut(start_date=s.isoformat(), end_date=e.isoformat()) for s, e in windows]
