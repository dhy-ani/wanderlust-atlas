# syntax=docker/dockerfile:1
# ---------------------------------------------------------------------------
#  Frontend image — a classic MULTI-STAGE build:
#    stage 1 (node)  : install deps + `vite build` -> static files in /app/dist
#    stage 2 (nginx) : copy ONLY those static files into a tiny web server
#  The final image contains no Node, no node_modules, no source — just nginx
#  and the built assets (a few MB). See docs/DOCKER.md.
# ---------------------------------------------------------------------------

# ---- stage 1: build ----
FROM node:20-alpine AS build
WORKDIR /app

# Dependencies first (cache-friendly).
COPY package*.json ./
RUN npm ci

# Source, then build.
COPY . .
# Vite inlines env vars at BUILD time, so the Google Maps key (if any) must be a
# build arg. Without it the app uses the keyless Leaflet/Esri satellite fallback.
ARG VITE_GOOGLE_MAPS_API_KEY=""
ENV VITE_GOOGLE_MAPS_API_KEY=$VITE_GOOGLE_MAPS_API_KEY
RUN npm run build

# ---- stage 2: runtime ----
FROM nginx:alpine AS runtime
# Our SPA + reverse-proxy config (proxies /api -> backend service).
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Just the built static assets from stage 1.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1
