"""Pure interval-algebra tests for 'which dates is everyone free'."""
from datetime import date

from app.scheduling import find_common_availability, intersect_interval_sets, merge_intervals


def d(s: str) -> date:
    return date.fromisoformat(s)


def test_merge_intervals_combines_overlapping():
    merged = merge_intervals([(d("2026-08-01"), d("2026-08-10")), (d("2026-08-05"), d("2026-08-15"))])
    assert merged == [(d("2026-08-01"), d("2026-08-15"))]


def test_merge_intervals_keeps_disjoint_separate():
    merged = merge_intervals([(d("2026-08-01"), d("2026-08-05")), (d("2026-08-20"), d("2026-08-25"))])
    assert merged == [(d("2026-08-01"), d("2026-08-05")), (d("2026-08-20"), d("2026-08-25"))]


def test_intersect_interval_sets_finds_overlap():
    a = [(d("2026-08-01"), d("2026-08-10"))]
    b = [(d("2026-08-05"), d("2026-08-20"))]
    assert intersect_interval_sets(a, b) == [(d("2026-08-05"), d("2026-08-10"))]


def test_intersect_interval_sets_no_overlap_returns_empty():
    a = [(d("2026-08-01"), d("2026-08-05"))]
    b = [(d("2026-08-10"), d("2026-08-15"))]
    assert intersect_interval_sets(a, b) == []


def test_find_common_availability_two_users_overlapping():
    by_user = {
        1: [(d("2026-08-01"), d("2026-08-15"))],
        2: [(d("2026-08-10"), d("2026-08-20"))],
    }
    assert find_common_availability(by_user) == [(d("2026-08-10"), d("2026-08-15"))]


def test_find_common_availability_three_users_narrows_progressively():
    by_user = {
        1: [(d("2026-08-01"), d("2026-08-20"))],
        2: [(d("2026-08-05"), d("2026-08-15"))],
        3: [(d("2026-08-08"), d("2026-08-12"))],
    }
    assert find_common_availability(by_user) == [(d("2026-08-08"), d("2026-08-12"))]


def test_find_common_availability_no_overlap_returns_empty():
    by_user = {1: [(d("2026-08-01"), d("2026-08-05"))], 2: [(d("2026-09-01"), d("2026-09-05"))]}
    assert find_common_availability(by_user) == []


def test_find_common_availability_no_submissions_returns_empty():
    assert find_common_availability({}) == []


def test_find_common_availability_one_user_returns_their_own_ranges():
    by_user = {1: [(d("2026-08-01"), d("2026-08-05"))]}
    assert find_common_availability(by_user) == [(d("2026-08-01"), d("2026-08-05"))]
