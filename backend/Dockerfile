# syntax=docker/dockerfile:1
# ---------------------------------------------------------------------------
#  Backend image — FastAPI + the trained ML price model.
#  Single stage: the Python data libs ship as prebuilt wheels, so we don't need
#  a separate compiler/build stage. We DO order the steps so Docker's layer
#  cache is used well (dependencies before code — see docs/DOCKER.md).
# ---------------------------------------------------------------------------
FROM python:3.12-slim

# Keep Python lean & unbuffered inside containers.
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

# 1) Dependencies first. This layer is cached and only rebuilds when
#    requirements.txt changes — not on every code edit.
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 2) Application code + data.
COPY app ./app
COPY data ./data

# 3) Train the ML model at build time so the image is ready to serve instantly
#    (no train step needed on the target laptop). Writes data/models/*.joblib.
RUN python -m app.ml.train

# 4) Run as a non-root user. Pre-create the persistence dir and give it to the
#    user so the mounted volume inherits writable ownership on first run.
RUN useradd --create-home appuser \
    && mkdir -p /app/persist \
    && chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

# Container-level health signal (compose waits on this before starting nginx).
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD python -c "import urllib.request,sys; sys.exit(0 if urllib.request.urlopen('http://localhost:8000/api/health').status==200 else 1)"

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
