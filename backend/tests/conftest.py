"""Test-wide fixtures. Most importantly: the entire test suite must be provably
correct and $0-cost regardless of what's in the local/CI .env file — a real
OPENROUTER_API_KEY being present (e.g. for manual live-verification) must never
cause routine `pytest` runs to silently make real, billed API calls. This
autouse fixture forces `llm_client.has_llm()` to False for every test unless a
test explicitly opts back in via `monkeypatch.setattr(llm_client, "has_llm", ...)`
after this fixture runs."""
import pytest

from app.agents import llm_client


@pytest.fixture(autouse=True)
def no_real_llm_calls_in_tests(monkeypatch):
    monkeypatch.setattr(llm_client, "has_llm", lambda: False)
