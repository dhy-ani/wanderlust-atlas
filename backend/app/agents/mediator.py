"""The negotiation loop: propose -> score twins -> check threshold -> reconfigure
-> repeat. Built as a LangGraph StateGraph when the `langgraph` package is
installed; falls back to an identical plain-Python loop otherwise (same node
functions either way, so behavior never differs — only the orchestration wrapper
does). This means the loop is fully testable before you `pip install langgraph`.

Scoring policy (the cost-control core): every twin gets a free rule-based verdict.
Only twins whose rule score lands in the "ambiguous zone" are included in a SINGLE
batched LLM call for the whole round — see llm_client.batched_twin_scores.
"""
from __future__ import annotations

from typing import TypedDict

from app.agents import graphrag, llm_client, reasoner, scraper
from app.agents.twin import DigitalTwin
from app.models.agent_schemas import (
    NegotiationResult,
    NegotiationRound,
    Proposal,
    ProposalItem,
    TwinVerdict,
    Verdict,
)

MAX_ROUNDS = 5
SCORE_THRESHOLD = 80
REJECT_PENALTY = 0.55   # applied when >=2 twins reject — "hurts the score" per spec


class _NegotiationState(TypedDict):
    """Module-level (not nested) so LangGraph's `get_type_hints()` introspection can
    resolve it — a TypedDict defined inside a function isn't visible to that call,
    since it only sees the function's module globals, not its enclosing locals."""
    proposal: Proposal
    rounds: list[NegotiationRound]
    round_num: int
    stalled: bool


def _score_round(twins: list[DigitalTwin], proposal: Proposal) -> tuple[list[TwinVerdict], float, int, bool, float]:
    """Runs the free rule pass for everyone, then ONE batched LLM call for whichever
    twins landed in the ambiguous zone (if an LLM is configured)."""
    rule_verdicts = {t.identity.member_name: t.rule_evaluate(proposal) for t in twins}
    ambiguous_names = [name for name, v in rule_verdicts.items() if reasoner.is_ambiguous(v.personal_score)]

    final_verdicts: dict[str, TwinVerdict] = dict(rule_verdicts)

    if ambiguous_names and llm_client.has_llm():
        twins_by_name = {t.identity.member_name: t for t in twins}
        proposal_summary = ", ".join(f"{i.name} ({i.category}, ${i.est_cost:.0f})" for i in proposal.items)
        context = [
            {
                "member_name": name,
                "identity_summary": {
                    "likes": twins_by_name[name].identity.likes,
                    "dislikes": twins_by_name[name].identity.dislikes,
                    "budget_max": twins_by_name[name].identity.budget_max,
                    "pace": twins_by_name[name].identity.pace,
                },
                "memory_hits": twins_by_name[name].recall_memory(proposal),
            }
            for name in ambiguous_names
        ]
        llm_result = llm_client.batched_twin_scores(context, proposal_summary)
        if llm_result:
            for v in llm_result.get("verdicts", []):
                name = v.get("member_name")
                if name in ambiguous_names:
                    final_verdicts[name] = TwinVerdict(
                        member_name=name, verdict=Verdict(v.get("verdict", "NEUTRAL")),
                        personal_score=float(v.get("score", 50)), reasoning=v.get("reasoning", ""), via="llm",
                    )

    verdicts = list(final_verdicts.values())
    base_score = sum(v.personal_score for v in verdicts) / len(verdicts) if verdicts else 0.0
    reject_count = sum(1 for v in verdicts if v.verdict == Verdict.REJECT)
    penalty_applied = reject_count >= 2
    final_score = base_score * (REJECT_PENALTY if penalty_applied else 1.0)
    return verdicts, base_score, reject_count, penalty_applied, final_score


def build_initial_proposal(destination_id: str, twins: list[DigitalTwin], top_n: int = 4) -> Proposal:
    """The mediator builds the FIRST proposal itself — a route within ONE
    destination, made of the points-of-interest that best match the group's
    collective likes (GraphRAG) and what's currently trending on Reddit
    (scraper.py). This is deliberately not "which city should we visit"; that
    choice already happened (the group picked a destination from the bucket
    list) — this is "which places inside it, and in what order to negotiate."""
    pois = graphrag.pois_for_destination(destination_id)
    if not pois:
        return Proposal(destination_id=destination_id, items=[], total_cost=0, note="no known POIs for this destination")

    all_likes = {like for t in twins for like in t.identity.likes}
    all_dislikes = {dislike for t in twins for dislike in t.identity.dislikes}
    trending = scraper.trending_scores(destination_id, [p["name"] for p in pois])

    scored = []
    for poi in pois:
        cat = poi.get("category", "general")
        like_score = 1.0 if cat in all_likes else (-1.0 if cat in all_dislikes else 0.0)
        scored.append((like_score + trending.get(poi["name"], 0.0), poi))
    scored.sort(key=lambda x: -x[0])

    # Budget guardrail: the group's most budget-constrained twin sets the
    # ceiling — reasoner.rule_score hard-rejects (score=15) ANY proposal over
    # ANY twin's budget_max, so proposing past that isn't "ambitious," it's a
    # proposal that's mathematically guaranteed to fail round 1. Greedily add
    # top-ranked POIs while staying under the ceiling, instead of blindly
    # taking the top `top_n` regardless of cost.
    budget_ceiling = min((t.identity.budget_max for t in twins), default=float("inf"))
    chosen, running_cost = [], 0.0
    for _, poi in scored:
        if len(chosen) >= top_n:
            break
        cost = poi.get("est_cost", 0)
        if running_cost + cost > budget_ceiling:
            continue  # skip this one, keep looking for a cheaper fit lower in the ranking
        chosen.append(poi)
        running_cost += cost

    items = [ProposalItem(destination_id=_slug(p["name"]), name=p["name"],
                          category=p.get("category", "general"), est_cost=p.get("est_cost", 0)) for p in chosen]
    note = "initial proposal: top POIs by group likes + Reddit trending signal, within budget"
    if len(chosen) < min(top_n, len(pois)):
        note += f" (fewer items than usual — ${budget_ceiling:.0f} budget ceiling limited selection)"
    return Proposal(
        destination_id=destination_id, items=items, total_cost=round(running_cost, 2), note=note,
    )


def _slug(name: str) -> str:
    return "".join(c.lower() if c.isalnum() else "-" for c in name).strip("-")


def _reconfigure(proposal: Proposal, twins: list[DigitalTwin], verdicts: list[TwinVerdict]) -> Proposal:
    """Swap out the item(s) that triggered rejections for a different POI WITHIN
    THE SAME DESTINATION (never a different city — see Proposal's docstring),
    sourced from GraphRAG and matching the group's collective likes. Only called
    when the round's overall score already failed the >=80 gate, so any twin
    who isn't a clean ACCEPT (REJECT *or* NEUTRAL) is worth addressing —
    otherwise a single mildly-unhappy NEUTRAL twin (one disliked category, not
    enough to tip into REJECT) would stall every round with nothing changing."""
    twins_by_name = {t.identity.member_name: t for t in twins}
    rejecting = [v for v in verdicts if v.verdict != Verdict.ACCEPT]
    if not rejecting:
        return proposal  # everyone already accepted; shouldn't normally reach here

    all_likes = {like for t in twins for like in t.identity.likes}
    used_names = {i.name for i in proposal.items}

    new_items = list(proposal.items)
    swapped_notes = []
    for verdict in rejecting:
        twin = twins_by_name.get(verdict.member_name)
        if not twin:
            continue
        disliked = set(twin.identity.dislikes)
        for idx, item in enumerate(new_items):
            if item.category in disliked:
                alts = graphrag.poi_alternatives(
                    proposal.destination_id, item.category,
                    prefer_categories=list(all_likes), exclude_names=list(used_names), limit=1,
                )
                if alts:
                    alt = alts[0]
                    new_items[idx] = ProposalItem(
                        destination_id=_slug(alt["name"]), name=alt["name"],
                        category=alt["category"], est_cost=alt.get("est_cost", item.est_cost),
                    )
                    used_names.discard(item.name)
                    used_names.add(alt["name"])
                    swapped_notes.append(f"swapped {item.name} -> {alt['name']} (was disliked by {verdict.member_name})")
                break  # found this twin's disliked item (swapped it, or no alt existed) — one attempt per twin per round

    note = "; ".join(swapped_notes) if swapped_notes else "no in-destination alternative found; re-scoring as-is"
    return Proposal(
        destination_id=proposal.destination_id, round=proposal.round + 1, items=new_items,
        total_cost=sum(i.est_cost for i in new_items), note=note,
    )


def _run_plain_loop(twins: list[DigitalTwin], initial_proposal: Proposal, max_rounds: int) -> list[NegotiationRound]:
    """The orchestration logic, as a bare Python loop. Used directly when
    `langgraph` isn't installed, and also called BY the LangGraph graph below (the
    graph wraps this same step function as its nodes, so behavior is identical)."""
    proposal = initial_proposal
    rounds: list[NegotiationRound] = []

    for round_num in range(1, max_rounds + 1):
        proposal.round = round_num
        verdicts, base_score, reject_count, penalty_applied, final_score = _score_round(twins, proposal)
        rounds.append(NegotiationRound(
            round=round_num, proposal=proposal, verdicts=verdicts, base_score=round(base_score, 1),
            reject_count=reject_count, penalty_applied=penalty_applied, final_score=round(final_score, 1),
        ))
        all_accept = all(v.verdict == Verdict.ACCEPT for v in verdicts)
        if all_accept or final_score >= SCORE_THRESHOLD or round_num == max_rounds:
            break

        prev_ids = {i.destination_id for i in proposal.items}
        new_proposal = _reconfigure(proposal, twins, verdicts)
        if {i.destination_id for i in new_proposal.items} == prev_ids:
            break  # no further GraphRAG alternative exists — converged as far as possible
        proposal = new_proposal

    return rounds


def _run_langgraph(twins: list[DigitalTwin], initial_proposal: Proposal, max_rounds: int) -> list[NegotiationRound] | None:
    """Same negotiation as a LangGraph StateGraph: propose -> score_twins ->
    conditional(accept? -> END | reconfigure -> score_twins). Returns None if
    `langgraph` isn't installed, so the caller falls back to `_run_plain_loop`."""
    try:
        from langgraph.graph import END, StateGraph
    except ImportError:
        return None

    def score_node(state: _NegotiationState) -> _NegotiationState:
        proposal = state["proposal"]
        proposal.round = state["round_num"]
        verdicts, base_score, reject_count, penalty_applied, final_score = _score_round(twins, proposal)
        rnd = NegotiationRound(
            round=state["round_num"], proposal=proposal, verdicts=verdicts, base_score=round(base_score, 1),
            reject_count=reject_count, penalty_applied=penalty_applied, final_score=round(final_score, 1),
        )
        return {"proposal": proposal, "rounds": state["rounds"] + [rnd], "round_num": state["round_num"], "stalled": False}

    def reconfigure_node(state: _NegotiationState) -> _NegotiationState:
        last = state["rounds"][-1]
        prev_ids = {i.destination_id for i in last.proposal.items}
        new_proposal = _reconfigure(last.proposal, twins, last.verdicts)
        stalled = {i.destination_id for i in new_proposal.items} == prev_ids
        return {"proposal": new_proposal, "rounds": state["rounds"], "round_num": state["round_num"] + 1, "stalled": stalled}

    def should_continue(state: _NegotiationState) -> str:
        last = state["rounds"][-1]
        all_accept = all(v.verdict == Verdict.ACCEPT for v in last.verdicts)
        if all_accept or last.final_score >= SCORE_THRESHOLD or state["round_num"] >= max_rounds:
            return "end"
        return "reconfigure"

    def after_reconfigure(state: _NegotiationState) -> str:
        return "end" if state["stalled"] else "score"

    graph = StateGraph(_NegotiationState)
    graph.add_node("score", score_node)
    graph.add_node("reconfigure", reconfigure_node)
    graph.set_entry_point("score")
    graph.add_conditional_edges("score", should_continue, {"end": END, "reconfigure": "reconfigure"})
    graph.add_conditional_edges("reconfigure", after_reconfigure, {"score": "score", "end": END})
    app = graph.compile()

    result = app.invoke(
        {"proposal": initial_proposal, "rounds": [], "round_num": 1, "stalled": False},
        {"recursion_limit": max_rounds * 3 + 5},
    )
    return result["rounds"]


def run_negotiation(twins: list[DigitalTwin], initial_proposal: Proposal, max_rounds: int = MAX_ROUNDS) -> NegotiationResult:
    llm_client.LLMStats.reset()

    rounds = _run_langgraph(twins, initial_proposal, max_rounds)
    engine = "langgraph"
    if rounds is None:
        rounds = _run_plain_loop(twins, initial_proposal, max_rounds)
        engine = "plain-loop"

    last = rounds[-1]
    all_accept = all(v.verdict == Verdict.ACCEPT for v in last.verdicts)
    accepted = all_accept or last.final_score >= SCORE_THRESHOLD
    hit_max = not accepted and len(rounds) >= max_rounds

    return NegotiationResult(
        group_id=twins[0].identity.group_id if twins else "",
        rounds=rounds, final_proposal=last.proposal, final_score=last.final_score,
        accepted=accepted, hit_max_rounds=hit_max,
        llm_calls_made=llm_client.LLMStats.calls_made, cache_hits=llm_client.LLMStats.cache_hits,
        engine=engine,
    )
