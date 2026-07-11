"""Gate script: reads mutmut's CI/CD stats JSON and fails the build if the
mutation score is below the required threshold.

    python -m mutmut run
    python -m mutmut export-cicd-stats                 # writes mutants/mutmut-cicd-stats.json
    python -m scripts.check_mutation_score              # exits 1 if score < threshold

Mutation score = killed / (killed + survived). Mutants classified `no_tests`,
`skipped`, `suspicious`, or `timeout` are excluded from both sides of that ratio —
they represent ambiguous outcomes (e.g. no coverage at all), not a clean
pass/fail signal from the test suite, so folding them in would either inflate or
unfairly punish the score.
"""
from __future__ import annotations

import json
import os
import sys
from pathlib import Path

STATS_PATH = Path(__file__).resolve().parents[1] / "mutants" / "mutmut-cicd-stats.json"
DEFAULT_THRESHOLD = 80.0


def main() -> int:
    threshold = float(os.environ.get("MUTATION_SCORE_THRESHOLD", DEFAULT_THRESHOLD))

    if not STATS_PATH.exists():
        print(f"No stats file at {STATS_PATH} — run `mutmut run && mutmut export-cicd-stats` first.")
        return 1

    stats = json.loads(STATS_PATH.read_text(encoding="utf-8"))
    killed, survived = stats["killed"], stats["survived"]
    decided = killed + survived

    if decided == 0:
        print("No mutants were killed or survived (decided=0) — can't compute a score.")
        return 1

    score = 100.0 * killed / decided
    verdict = "PASS" if score >= threshold else "FAIL"
    print(
        f"Mutation score: {score:.1f}% ({killed}/{decided} killed) — "
        f"threshold {threshold:.1f}% — {verdict}\n"
        f"  no_tests={stats.get('no_tests', 0)} skipped={stats.get('skipped', 0)} "
        f"suspicious={stats.get('suspicious', 0)} timeout={stats.get('timeout', 0)}"
    )
    return 0 if score >= threshold else 1


if __name__ == "__main__":
    sys.exit(main())
