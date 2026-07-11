"""A Digital Twin: one group member's agent. Wraps their Identity Vector + semantic
memory of past trips. `evaluate()` always runs the free rule-based scorer; whether
an LLM call happens at all is decided by the mediator (batched across all twins),
not by the twin itself — keeping the "when do we spend money" decision centralized.
"""
from __future__ import annotations

from app.agents import memory, reasoner
from app.models.agent_schemas import IdentityVector, Proposal, TwinVerdict


class DigitalTwin:
    def __init__(self, identity: IdentityVector):
        self.identity = identity

    def recall_memory(self, proposal: Proposal) -> list[str]:
        query = " ".join(item.category for item in proposal.items)
        hits = memory.recall(self.identity.group_id, self.identity.member_name, query, k=3)
        return [h["text"] for h in hits]

    def rule_evaluate(self, proposal: Proposal) -> TwinVerdict:
        hits = self.recall_memory(proposal)
        return reasoner.rule_based_verdict(self.identity, proposal, memory_hits=hits)

    def remember_trip_feedback(self, text: str, metadata: dict | None = None) -> None:
        memory.store(self.identity.group_id, self.identity.member_name, text, metadata)
