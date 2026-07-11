"""The free, deterministic scoring path. Runs for every proposal/twin pair with
zero API calls. Its output also decides whether an LLM call is even warranted
(only the "ambiguous zone" escalates) — see mediator.py.
"""
from __future__ import annotations

from app.models.agent_schemas import IdentityVector, Proposal, TwinVerdict, Verdict

# A rule-based score in this range is genuinely uncertain -> worth an LLM opinion.
# Outside it, the rule is confident enough that a call would be spending money to
# confirm the obvious.
AMBIGUOUS_LOW = 55
AMBIGUOUS_HIGH = 90


def rule_score(identity: IdentityVector, proposal: Proposal, memory_hits: list[str] | None = None) -> tuple[float, str]:
    """Returns (score 0-100, human-readable reasoning)."""
    reasons = []

    # Hard budget constraint — enforced for free, no LLM needed to catch this.
    if proposal.total_cost > identity.budget_max:
        over_pct = round(100 * (proposal.total_cost - identity.budget_max) / identity.budget_max)
        return 15.0, f"Exceeds budget by {over_pct}% (${proposal.total_cost:.0f} vs ${identity.budget_max:.0f} max)."

    score = 65.0
    likes, dislikes = set(identity.likes), set(identity.dislikes)
    liked_items, disliked_items = [], []
    for item in proposal.items:
        if item.category in dislikes:
            score -= 18
            disliked_items.append(item.name)
        elif item.category in likes:
            score += 12
            liked_items.append(item.name)

    if liked_items:
        reasons.append(f"matches interests ({', '.join(liked_items[:2])})")
    if disliked_items:
        reasons.append(f"includes disliked categories ({', '.join(disliked_items[:2])})")

    # Memory bonus: past-trip notes that echo this proposal's categories.
    hit_text = " ".join(memory_hits or [])
    memory_bonus = 0
    for item in proposal.items:
        if item.category and item.category in hit_text.lower():
            memory_bonus += 3
    if memory_bonus:
        score += min(memory_bonus, 10)
        reasons.append("aligns with past-trip notes")

    # Under-budget is mildly positive (frugal fit), never penalized.
    if proposal.total_cost < identity.budget_min:
        reasons.append("comfortably under budget")

    score = max(0.0, min(100.0, score))
    reasoning = "; ".join(reasons) if reasons else "neutral fit, no strong signal either way."
    return score, reasoning


def verdict_for_score(score: float) -> Verdict:
    if score >= 75:
        return Verdict.ACCEPT
    if score >= 45:
        return Verdict.NEUTRAL
    return Verdict.REJECT


def is_ambiguous(score: float) -> bool:
    return AMBIGUOUS_LOW <= score < AMBIGUOUS_HIGH


def rule_based_verdict(identity: IdentityVector, proposal: Proposal, memory_hits: list[str] | None = None) -> TwinVerdict:
    score, reasoning = rule_score(identity, proposal, memory_hits)
    return TwinVerdict(
        member_name=identity.member_name, verdict=verdict_for_score(score),
        personal_score=round(score, 1), reasoning=reasoning, via="rule",
    )
