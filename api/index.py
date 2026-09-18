"""Root-level Vercel Python entrypoint — Vercel's zero-config detection scans
`api/*.py` at the PROJECT ROOT (not backend/api/), so this thin file lives here
and re-exports the real FastAPI app.

Vercel's Python function bundler reliably packages only files that live
INSIDE the function's own directory (api/) — a sys.path trick pointing at a
sibling top-level directory (backend/) is not reliably traced/bundled. So
vercel.json's buildCommand copies backend/app + backend/data into api/app +
api/data before the function is packaged, and this file imports the LOCAL
copy. Falls back to backend/ for local tooling that runs this file directly
without that copy step (there isn't any today, but this keeps it safe)."""
import os
import sys

_here = os.path.dirname(__file__)
_local_app = os.path.join(_here, "app")
if os.path.isdir(_local_app):
    sys.path.insert(0, _here)
else:
    sys.path.insert(0, os.path.join(_here, "backend"))

from app.main import app  # noqa: E402
