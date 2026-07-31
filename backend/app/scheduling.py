"""Pure interval-algebra for "which dates is everyone free" — no DB, no I/O,
easy to unit-test exhaustively (see tests/test_scheduling.py)."""
from __future__ import annotations

from datetime import date


def merge_intervals(intervals: list[tuple[date, date]]) -> list[tuple[date, date]]:
    """Merges overlapping/adjacent (start, end) ranges for ONE person's own
    submissions (e.g. they added two trips that happen to overlap)."""
    if not intervals:
        return []
    ordered = sorted(intervals, key=lambda iv: iv[0])
    merged = [ordered[0]]
    for start, end in ordered[1:]:
        last_start, last_end = merged[-1]
        if start <= last_end:  # overlapping or touching -> merge
            merged[-1] = (last_start, max(last_end, end))
        else:
            merged.append((start, end))
    return merged


def intersect_interval_sets(a: list[tuple[date, date]], b: list[tuple[date, date]]) -> list[tuple[date, date]]:
    """Intersection of two already-merged (non-overlapping, sorted) interval lists."""
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        start = max(a[i][0], b[j][0])
        end = min(a[i][1], b[j][1])
        if start <= end:
            result.append((start, end))
        if a[i][1] < b[j][1]:
            i += 1
        else:
            j += 1
    return result


def find_common_availability(by_user: dict[int, list[tuple[date, date]]]) -> list[tuple[date, date]]:
    """Given each user's submitted free-date ranges, returns the windows where
    EVERY user who submitted at least one range is simultaneously free. Users
    with no submissions are simply not counted (we don't know their
    availability, so we can't require it) — an empty dict returns []."""
    per_user_merged = [merge_intervals(ranges) for ranges in by_user.values() if ranges]
    if not per_user_merged:
        return []
    common = per_user_merged[0]
    for ranges in per_user_merged[1:]:
        common = intersect_interval_sets(common, ranges)
        if not common:
            break
    return common
