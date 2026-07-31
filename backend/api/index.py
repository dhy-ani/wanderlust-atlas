"""Vercel Python entrypoint. Vercel's Python runtime auto-detects an ASGI `app`
variable exported from a file under api/ and serves it as a serverless
function. This just re-exports the real FastAPI app from app/main.py, after
making sure `backend/` (the parent of this api/ dir) is on sys.path so the
existing `from app.xxx import yyy` imports throughout the codebase keep
working unmodified — same app, same routes, whether it's run via
`uvicorn app.main:app` (local/Docker) or here (Vercel serverless).
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from app.main import app  # noqa: E402
