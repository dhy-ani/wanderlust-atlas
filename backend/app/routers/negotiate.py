"""Kick off a negotiation for a group's chosen destination and return the full
transcript. The mediator builds its own initial proposal from GraphRAG POIs +
Reddit trending + the group's collective likes — the frontend just picks WHICH
destination (from the bucket list), not which places within it."""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.agents import budget_guard, cache, graphrag, llm_client, storage
from app.agents.mediator import build_initial_proposal, run_negotiation
from app.agents.twin import DigitalTwin
from app.models.agent_schemas import NegotiationResult, Proposal
from app.services.destinations import by_id

router = APIRouter(prefix="/api/negotiate", tags=["negotiate"])


class NegotiateRequest(BaseModel):
    group_id: str
    destination_id: str
    max_rounds: int = 5


@router.post("/run", response_model=NegotiationResult)
def negotiate(req: NegotiateRequest):
    if by_id(req.destination_id) is None:
        raise HTTPException(404, f"unknown destination '{req.destination_id}'")
    identities = storage.list_identities(req.group_id)
    if not identities:
        raise HTTPException(404, "no members have completed the start survey for this group yet")

    twins = [DigitalTwin(identity) for identity in identities]
    initial = build_initial_proposal(req.destination_id, twins)
    if not initial.items:
        raise HTTPException(404, f"no known points of interest for '{req.destination_id}' yet")
    return run_negotiation(twins, initial, max_rounds=req.max_rounds)


@router.get("/preview/{destination_id}", response_model=Proposal)
def preview_initial_proposal(destination_id: str, group_id: str):
    """Lets the UI show the agent's proposed route before committing to a full
    negotiation run — same proposal-building logic /run uses internally."""
    if by_id(destination_id) is None:
        raise HTTPException(404, f"unknown destination '{destination_id}'")
    identities = storage.list_identities(group_id)
    twins = [DigitalTwin(identity) for identity in identities]
    return build_initial_proposal(destination_id, twins)


@router.get("/category/{dest_id}")
def category(dest_id: str):
    """Lets the frontend build proposals with a real GraphRAG category instead of
    a placeholder — without this, a twin's likes/dislikes never actually match a
    UI-driven proposal item."""
    cats = graphrag.categories_of(dest_id)
    return {"destination_id": dest_id, "categories": cats, "primary": cats[0] if cats else "general"}


@router.get("/status")
def status():
    """Cost/infra visibility: is the LLM configured, how much has been cached,
    and how much of today's hard spend budget has been used."""
    return {
        "llm_configured": llm_client.has_llm(),
        "twin_model": llm_client.twin_model(),
        "mediator_model": llm_client.mediator_model(),
        **cache.stats(),
        "budget": budget_guard.usage_today(),
    }
