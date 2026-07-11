"""Tests for the hard spend guardrails and the Reddit trending-signal agent.
budget_guard tests use a temp sqlite file (not the real cache db) so they don't
interfere with real usage counters."""
import os

import pytest

from app.agents import budget_guard, scraper


@pytest.fixture
def isolated_budget_db(tmp_path, monkeypatch):
    monkeypatch.setattr(budget_guard, "LOG_PATH", tmp_path / "test_llm_cache.sqlite3")
    yield


def test_allow_call_true_when_under_limits(isolated_budget_db):
    allowed, reason = budget_guard.allow_call()
    assert allowed is True
    assert reason == ""


def test_record_call_increments_usage(isolated_budget_db):
    before = budget_guard.usage_today()["calls_last_24h"]
    budget_guard.record_call()
    after = budget_guard.usage_today()["calls_last_24h"]
    assert after == before + 1


def test_per_minute_limit_blocks_once_exceeded(isolated_budget_db, monkeypatch):
    monkeypatch.setenv("MAX_LLM_CALLS_PER_MINUTE", "2")
    budget_guard.record_call()
    budget_guard.record_call()
    allowed, reason = budget_guard.allow_call()
    assert allowed is False
    assert "rate limit" in reason


def test_daily_limit_blocks_once_exceeded(isolated_budget_db, monkeypatch):
    monkeypatch.setenv("MAX_LLM_CALLS_PER_DAY", "1")
    monkeypatch.setenv("MAX_LLM_CALLS_PER_MINUTE", "999")  # isolate from the minute limit
    budget_guard.record_call()
    allowed, reason = budget_guard.allow_call()
    assert allowed is False
    assert "daily budget" in reason


def test_usage_today_reports_configured_limits(isolated_budget_db, monkeypatch):
    monkeypatch.setenv("MAX_LLM_CALLS_PER_DAY", "42")
    monkeypatch.setenv("MAX_LLM_CALLS_PER_MINUTE", "7")
    usage = budget_guard.usage_today()
    assert usage["daily_limit"] == 42
    assert usage["per_minute_limit"] == 7


# --------------------------------------------------------------------------- #
#  Reddit scraper — network calls are not made in tests (no live dependency);
#  we verify the graceful-degrade contract: unreachable -> all-zero, not a crash.
# --------------------------------------------------------------------------- #
def test_trending_scores_empty_poi_list_returns_empty():
    assert scraper.trending_scores("Paris", []) == {}


def test_trending_scores_degrades_to_zero_when_reddit_unreachable(monkeypatch):
    monkeypatch.setattr(scraper, "_fetch_posts", lambda query, limit=25: [])
    scores = scraper.trending_scores("NoSuchPlaceEver12345", ["Some POI", "Another POI"])
    assert scores == {"Some POI": 0.0, "Another POI": 0.0}


def test_trending_scores_ranks_mentioned_pois_higher(monkeypatch):
    fake_posts = [
        {"data": {"title": "The Eiffel Tower views at sunset are incredible", "selftext": "", "ups": 500}},
        {"data": {"title": "just a random post about nothing", "selftext": "", "ups": 10}},
    ]
    monkeypatch.setattr(scraper, "_fetch_posts", lambda query, limit=25: fake_posts)
    scores = scraper.trending_scores("Paris", ["Eiffel Tower", "Notre-Dame"])
    assert scores["Eiffel Tower"] > scores["Notre-Dame"]
    assert scores["Eiffel Tower"] == 1.0  # normalized to the peak
