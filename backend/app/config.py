"""Central configuration, loaded once from the repo-root `.env` file."""
from __future__ import annotations

from functools import lru_cache
from pathlib import Path

from dotenv import load_dotenv
from pydantic_settings import BaseSettings, SettingsConfigDict

# repo-root/.env  (this file is backend/app/config.py -> parents[2] == repo root)
ENV_PATH = Path(__file__).resolve().parents[2] / ".env"

# pydantic-settings (below) loads .env into the Settings object only — it does NOT
# populate os.environ. But app/agents/*.py (llm_client, graphrag, memory,
# live_data_agent) read os.environ directly, so without this, TAVILY_API_KEY etc.
# in .env would be silently ignored outside Docker (where compose passes real env
# vars instead). override=False: real shell/OS env vars still win over .env, same
# precedence as Settings' own env_file behaviour.
load_dotenv(ENV_PATH, override=False)


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=ENV_PATH, extra="ignore")

    # --- places (nearby POIs / geocoding) ---
    google_places_api_key: str = ""

    frontend_origin: str = "http://localhost:5173"

    @property
    def has_places(self) -> bool:
        return bool(self.google_places_api_key)


@lru_cache
def get_settings() -> Settings:
    return Settings()
