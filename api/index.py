"""Root-level Vercel Python entrypoint — Vercel's zero-config detection scans
`api/*.py` at the PROJECT ROOT (not backend/api/), so this thin file lives here
and just re-exports the real FastAPI app, after putting `backend/` on
sys.path so the existing `from app.xxx import yyy` imports keep working
unmodified everywhere else in the codebase."""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "backend"))

from app.main import app  # noqa: E402
