"""Shared, group-visible wishlist — any member of a group can add a destination
to it, and every member sees the same list. Distinct from the personal, solo
Bucket List (client-side, localStorage-only) — this one is server-persisted and
requires group membership, which is what makes "let others add to the
wishlist" actually mean something."""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.auth import get_current_user
from app.db.engine import get_db
from app.db.models import GroupMember, User, WishlistItem
from app.models.agent_schemas import WishlistItemIn, WishlistItemOut

router = APIRouter(prefix="/api/group/{group_id}/wishlist", tags=["wishlist"])


def _require_member(group_id: int, user: User, db: Session) -> None:
    is_member = db.query(GroupMember).filter(GroupMember.group_id == group_id, GroupMember.user_id == user.id).first()
    if not is_member:
        raise HTTPException(403, "you're not a member of this group")


@router.get("", response_model=list[WishlistItemOut])
def list_wishlist(group_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    _require_member(group_id, user, db)
    rows = (
        db.query(WishlistItem, User.name)
        .join(User, User.id == WishlistItem.added_by_user_id)
        .filter(WishlistItem.group_id == group_id)
        .order_by(WishlistItem.created_at.desc())
        .all()
    )
    return [
        WishlistItemOut(
            id=item.id, destination_id=item.destination_id, name=item.name, country=item.country,
            notes=item.notes, added_by=added_by_name, created_at=item.created_at.isoformat(),
        )
        for item, added_by_name in rows
    ]


@router.post("", response_model=WishlistItemOut, status_code=201)
def add_wishlist_item(group_id: int, payload: WishlistItemIn, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    _require_member(group_id, user, db)
    item = WishlistItem(
        group_id=group_id, added_by_user_id=user.id, destination_id=payload.destination_id,
        name=payload.name, country=payload.country, notes=payload.notes,
    )
    db.add(item)
    db.commit()
    db.refresh(item)
    return WishlistItemOut(
        id=item.id, destination_id=item.destination_id, name=item.name, country=item.country,
        notes=item.notes, added_by=user.name, created_at=item.created_at.isoformat(),
    )


@router.delete("/{item_id}")
def remove_wishlist_item(group_id: int, item_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    _require_member(group_id, user, db)
    item = db.get(WishlistItem, item_id)
    if not item or item.group_id != group_id:
        raise HTTPException(404, "unknown wishlist item")
    # Anyone in the group can remove an item (it's a shared list) — only the
    # group membership check above gates access, not authorship.
    db.delete(item)
    db.commit()
    return {"removed": item_id}
