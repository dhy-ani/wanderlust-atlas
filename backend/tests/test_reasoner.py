"""Boundary-precise tests for the rule-based reasoner. These exist specifically to
kill mutation-testing mutants (off-by-one comparisons, flipped operators, changed
constants) that a purely behavioral test suite tends to miss — see
docs/architecture-v2/TESTING.md for why line coverage alone isn't enough here."""
import pytest

from app.agents import reasoner
from app.models.agent_schemas import IdentityVector, Proposal, ProposalItem, Verdict


def ident(**kw):
    return IdentityVector(member_name="A", group_id="g", **kw)


def prop(cost, categories):
    items = [ProposalItem(destination_id=f"d{i}", name=f"D{i}", category=c, est_cost=0) for i, c in enumerate(categories)]
    return Proposal(items=items, total_cost=cost)


# --------------------------------------------------------------------------- #
#  Budget boundary (strictly >, not >=)
# --------------------------------------------------------------------------- #
def test_budget_exactly_at_max_is_not_a_hard_reject():
    score, _ = reasoner.rule_score(ident(budget_max=500), prop(500, []))
    assert score >= 60   # base score path, NOT the 15.0 hard-reject


def test_budget_one_over_max_is_hard_reject():
    score, reasoning = reasoner.rule_score(ident(budget_max=500), prop(500.01, []))
    assert score == 15.0
    assert "budget" in reasoning.lower()


def test_over_budget_percent_rounds_correctly():
    _, reasoning = reasoner.rule_score(ident(budget_max=100), prop(150, []))
    assert "50%" in reasoning   # exactly 50% over


# --------------------------------------------------------------------------- #
#  Likes/dislikes arithmetic
# --------------------------------------------------------------------------- #
def test_two_liked_categories_stack_additively():
    score, _ = reasoner.rule_score(ident(likes=["museums", "food"], budget_max=999999), prop(0, ["museums", "food"]))
    assert score == 89.0   # 65 + 12 + 12


def test_two_disliked_categories_stack_additively():
    score, _ = reasoner.rule_score(ident(dislikes=["beaches", "nightlife"], budget_max=999999), prop(0, ["beaches", "nightlife"]))
    assert score == 29.0   # 65 - 18 - 18


def test_score_clamps_at_zero_not_negative():
    score, _ = reasoner.rule_score(
        ident(dislikes=["a", "b", "c", "d", "e"], budget_max=999999),
        prop(0, ["a", "b", "c", "d", "e"]),
    )
    assert score == 0.0   # 65 - 90 would be negative without the clamp


def test_score_clamps_at_100_not_above():
    score, _ = reasoner.rule_score(
        ident(likes=["a", "b", "c", "d"], budget_max=999999),
        prop(0, ["a", "b", "c", "d"]),
    )
    assert score == 100.0   # 65 + 48 would exceed 100 without the clamp


def test_reasoning_lists_both_liked_and_disliked_when_both_present():
    _, reasoning = reasoner.rule_score(
        ident(likes=["museums"], dislikes=["beaches"], budget_max=999999),
        prop(0, ["museums", "beaches"]),
    )
    assert "matches interests" in reasoning
    assert "disliked categories" in reasoning


# --------------------------------------------------------------------------- #
#  Memory bonus
# --------------------------------------------------------------------------- #
def test_memory_bonus_is_case_insensitive():
    score, reasoning = reasoner.rule_score(
        ident(budget_max=999999), prop(0, ["museums"]), memory_hits=["Loved the MUSEUMS last time"],
    )
    assert score == 68.0   # 65 + 3
    assert "past-trip notes" in reasoning


def test_memory_bonus_caps_at_ten_even_with_many_matches():
    # 4 items all matching memory text would be 4*3=12 uncapped; capped to 10.
    score, _ = reasoner.rule_score(
        ident(budget_max=999999), prop(0, ["x", "x", "x", "x"]),
        memory_hits=["x x x x"],
    )
    assert score == 75.0   # 65 + min(12, 10)


def test_no_memory_hits_means_no_bonus_and_no_mention():
    score, reasoning = reasoner.rule_score(ident(budget_max=999999), prop(0, ["museums"]), memory_hits=None)
    assert score == 65.0
    assert "past-trip notes" not in reasoning


# --------------------------------------------------------------------------- #
#  Under-budget boundary (strictly <, not <=)
# --------------------------------------------------------------------------- #
def test_cost_exactly_at_budget_min_is_not_flagged_as_under_budget():
    _, reasoning = reasoner.rule_score(ident(budget_min=200, budget_max=999999), prop(200, []))
    assert "under budget" not in reasoning


def test_cost_below_budget_min_is_flagged_as_under_budget():
    _, reasoning = reasoner.rule_score(ident(budget_min=200, budget_max=999999), prop(100, []))
    assert "under budget" in reasoning


def test_default_reasoning_when_nothing_stands_out():
    _, reasoning = reasoner.rule_score(ident(budget_max=999999), prop(0, ["unrelated"]))
    assert reasoning == "neutral fit, no strong signal either way."


# --------------------------------------------------------------------------- #
#  verdict_for_score exact thresholds
# --------------------------------------------------------------------------- #
@pytest.mark.parametrize("score,expected", [
    (75.0, Verdict.ACCEPT), (74.9, Verdict.NEUTRAL),
    (45.0, Verdict.NEUTRAL), (44.9, Verdict.REJECT),
    (100.0, Verdict.ACCEPT), (0.0, Verdict.REJECT),
])
def test_verdict_thresholds_exact(score, expected):
    assert reasoner.verdict_for_score(score) == expected


# --------------------------------------------------------------------------- #
#  is_ambiguous exact thresholds
# --------------------------------------------------------------------------- #
@pytest.mark.parametrize("score,expected", [
    (55.0, True), (54.9, False),
    (89.9, True), (90.0, False),
    (0.0, False), (100.0, False),
])
def test_is_ambiguous_exact(score, expected):
    assert reasoner.is_ambiguous(score) == expected


def test_rule_based_verdict_rounds_score_to_one_decimal():
    identity = ident(likes=["museums"], budget_max=999999)
    verdict = reasoner.rule_based_verdict(identity, prop(0, ["museums"]))
    assert verdict.personal_score == 77.0
    assert verdict.via == "rule"
    assert verdict.member_name == "A"
