"""The Documentation Agent: deterministic (no LLM call), so it's fully testable."""
from app.agents.documentation_agent import document_negotiation
from app.agents.mediator import run_negotiation
from app.agents.twin import DigitalTwin
from app.models.agent_schemas import IdentityVector, Proposal, ProposalItem


def test_narrative_mentions_outcome_and_rounds():
    alice = IdentityVector(member_name="Alice", group_id="g", likes=["museums"], budget_max=2000)
    proposal = Proposal(items=[ProposalItem(destination_id="paris", name="Paris", category="museums", est_cost=500)], total_cost=500)
    result = run_negotiation([DigitalTwin(alice)], proposal, max_rounds=5)

    narrative = document_negotiation(result)

    assert "Accepted" in narrative or "round limit" in narrative
    assert "Round 1" in narrative
    assert "Alice" in narrative
    assert str(result.final_score) in narrative


def test_narrative_explains_multi_round_negotiations():
    alice = IdentityVector(member_name="Alice", group_id="g2", likes=["museums"], dislikes=["beaches"], budget_max=2000)
    bob = IdentityVector(member_name="Bob", group_id="g2", likes=["museums"], dislikes=["beaches"], budget_max=2000)
    proposal = Proposal(items=[ProposalItem(destination_id="rio", name="Rio", category="beaches", est_cost=500)], total_cost=500)
    result = run_negotiation([DigitalTwin(alice), DigitalTwin(bob)], proposal, max_rounds=5)

    narrative = document_negotiation(result)

    if len(result.rounds) > 1:
        assert "Why it took more than one round" in narrative
