"""Central configuration, loaded once from the repo-root `.env` file.

Every third-party key is optional. `has_amadeus`, `has_weather`, etc. let the
service layer decide, per-request, whether to hit the real API or fall back to
deterministic mock data — so the app is always runnable.
"""
from __future__ import annotations

from functools import lru_cache
from pathlib import Path

from dotenv import load_dotenv
from pydantic_settings import BaseSettings, SettingsConfigDict

# repo-root/.env  (this file is backend/app/config.py -> parents[2] == repo root)
ENV_PATH = Path(__file__).resolve().parents[2] / ".env"

# pydantic-settings (below) loads .env into the Settings object only — it does NOT
# populate os.environ. But app/agents/*.py (llm_client, graphrag, memory) read
# os.environ directly, so without this, OPENROUTER_API_KEY etc. in .env would be
# silently ignored outside Docker (where compose passes real env vars instead).
# override=False: real shell/OS env vars still win over .env, same precedence as
# Settings' own env_file behaviour.
load_dotenv(ENV_PATH, override=False)


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=ENV_PATH, extra="ignore")

    # --- flights (Amadeus) ---
    amadeus_client_id: str = ""
    amadeus_client_secret: str = ""
    amadeus_env: str = "test"  # "test" | "production"

    # --- weather ---
    openweather_api_key: str = ""

    # --- places ---
    google_places_api_key: str = ""

    # --- behaviour ---
    use_mock_data: bool = False
    frontend_origin: str = "http://localhost:5173"

    # ---- convenience flags -------------------------------------------------
    @property
    def has_amadeus(self) -> bool:
        return bool(self.amadeus_client_id and self.amadeus_client_secret) and not self.use_mock_data

    @property
    def has_weather(self) -> bool:
        return bool(self.openweather_api_key) and not self.use_mock_data

    @property
    def has_places(self) -> bool:
        return bool(self.google_places_api_key) and not self.use_mock_data

    @property
    def amadeus_base_url(self) -> str:
        return (
            "https://api.amadeus.com"
            if self.amadeus_env == "production"
            else "https://test.api.amadeus.com"
        )


@lru_cache
def get_settings() -> Settings:
    return Settings()
