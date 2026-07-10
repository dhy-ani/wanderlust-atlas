// Thin typed-ish wrapper around the backend REST API. Every call returns parsed
// JSON or throws. The backend already falls back to mock data, so the UI never
// has to special-case "no keys".
import { API_BASE } from './config.js';
import { staticApi } from './staticApi.js';

// On GitHub Pages there is no backend, so builds with VITE_STATIC=1 use a
// client-side implementation (staticApi) with the identical interface.
const USE_STATIC = import.meta.env.VITE_STATIC === '1' || import.meta.env.VITE_STATIC === 'true';

async function get(path, params = {}) {
  const qs = new URLSearchParams(params).toString();
  const url = `${API_BASE}/api${path}${qs ? `?${qs}` : ''}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

async function post(path, body) {
  const res = await fetch(`${API_BASE}/api${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

const realApi = {
  health: () => get('/health'),
  destinations: () => get('/destinations'),
  addDestination: (dest) => post('/destinations', dest),
  deleteDestination: (id) =>
    fetch(`${API_BASE}/api/destinations/${encodeURIComponent(id)}`, { method: 'DELETE' }).then((r) => r.json()),
  geocode: (q) => get('/places/geocode', { q }),
  flights: (destId, origin = 'JFK', depart) =>
    get('/flights', depart ? { dest_id: destId, origin, depart } : { dest_id: destId, origin }),
  weather: (destId) => get(`/weather/${destId}`),
  places: (lat, lng, q = '', radius_m = 40000) => get('/places/search', { lat, lng, q, radius_m }),
  predictPrice: (destId, origin = 'JFK', daysOut = 60, month) =>
    get('/predict/price', month ? { dest_id: destId, origin, days_out: daysOut, month }
                                : { dest_id: destId, origin, days_out: daysOut }),
  bestTime: (destId, origin = 'JFK', priceWeight = 0.5) =>
    get('/predict/best-time', { dest_id: destId, origin, price_weight: priceWeight }),
  planRoute: (stops, optimize = false, roundTrip = false) =>
    post('/routes/plan', { stops, optimize, round_trip: roundTrip }),
};

export const api = USE_STATIC ? staticApi : realApi;
