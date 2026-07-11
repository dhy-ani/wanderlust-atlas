// ============================================================================
//  STATIC MODE  (used on GitHub Pages, where there is no backend)
//
//  A faithful client-side port of the backend's *mock/heuristic* layer so the
//  app is fully functional as a static site: the same price simulation, climate
//  model, best-time blend and route math, plus keyless OpenStreetMap for place
//  search. Custom destinations persist in localStorage.
//
//  It exposes the SAME interface as ./api.js (real backend), so nothing else in
//  the app changes. Enabled at build time via VITE_STATIC=1 (see api.js).
//  Mirrors: backend/app/ml/price_model.py, services/mock_data.py, ml/best_time.py
// ============================================================================
import { DESTINATIONS } from './data/destinations.js';
import { englishOnly } from './logic/text.js';

const NYC_ORIGINS = { JFK: [40.6413, -73.7781], EWR: [40.6895, -74.1745] };
const SEASON = { 1: 1.02, 2: 0.92, 3: 0.95, 4: 1.0, 5: 1.06, 6: 1.18, 7: 1.28, 8: 1.24, 9: 1.0, 10: 0.96, 11: 0.98, 12: 1.22 };
const AIRLINES = ['United', 'Delta', 'American', 'Lufthansa', 'Emirates', 'Qatar', 'Turkish', 'ANA'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const CRUISE_KMH = 850;
const LS_KEY = 'wa_custom_destinations';

// ---- geo helpers ----
function haversineKm(la1, lo1, la2, lo2) {
  const R = 6371, r = Math.PI / 180;
  const dLa = (la2 - la1) * r, dLo = (lo2 - lo1) * r;
  const a = Math.sin(dLa / 2) ** 2 + Math.cos(la1 * r) * Math.cos(la2 * r) * Math.sin(dLo / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

// ---- custom destination persistence (localStorage) ----
const loadCustoms = () => { try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; } };
const saveCustoms = (list) => localStorage.setItem(LS_KEY, JSON.stringify(list));
const destById = (id) => DESTINATIONS.find((d) => d.id === id) || loadCustoms().find((d) => d.id === id);

function originDestKm(origin, destId) {
  const [olat, olng] = NYC_ORIGINS[origin] || NYC_ORIGINS.JFK;
  const d = destById(destId);
  return d ? haversineKm(olat, olng, d.lat, d.lng) : 6000;
}

// ---- the price simulation (== backend simulate_price) ----
function simulatePrice(destId, origin, month, daysOut) {
  const km = originDestKm(origin, destId);
  const base = 120 + 0.055 * km + 0.0000009 * km * km;
  const d = Math.max(daysOut, 0);
  const lastminute = 0.55 * Math.exp(-d / 18);
  const tooearly = 0.10 * Math.max(0, (d - 120) / 240);
  let booking = 1 + lastminute + tooearly;
  if (d >= 40 && d <= 75) booking *= 0.9;
  const season = SEASON[month] || 1;
  const originAdj = origin === 'JFK' ? 1.0 : 1.015;
  return Math.round(base * booking * season * originAdj * 100) / 100;
}

// ---- climate model (== backend mock_monthly_weather) ----
function monthlyWeather(destId) {
  const d = destById(destId);
  const lat = d ? d.lat : 20;
  const out = [];
  for (let m = 1; m <= 12; m++) {
    const phase = lat >= 0 ? Math.cos((2 * Math.PI * (m - 7)) / 12) : Math.cos((2 * Math.PI * (m - 1)) / 12);
    const baseTemp = 27 - Math.abs(lat) * 0.35;
    const avgTemp = Math.round((baseTemp + phase * (6 + Math.abs(lat) * 0.18)) * 10) / 10;
    const rain = Math.max(0, Math.round(90 + 70 * Math.sin((2 * Math.PI * (m - 4)) / 12) - Math.abs(lat)));
    const comfort = Math.max(0, Math.min(100, 100 - Math.abs(avgTemp - 22) * 3.2 - rain * 0.18));
    out.push({ month: m, month_name: MONTHS[m - 1], avg_temp_c: avgTemp, rain_mm: rain, comfort_score: Math.round(comfort * 10) / 10 });
  }
  return out;
}

// simple deterministic string hash -> uint32 (stands in for the backend md5 seed)
function seed(...parts) {
  let h = 2166136261;
  const s = parts.join('|');
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

// ---- the api surface (mirrors ./api.js) ----
export const staticApi = {
  health: async () => ({ status: 'ok', static: true, live: { flights_amadeus: false, weather_openweather: false, places_google: false } }),

  destinations: async () => loadCustoms(),

  addDestination: async (payload) => {
    const slug = (payload.name || 'place').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'place';
    // nearest built-in airport
    let airport = 'JFK', best = Infinity;
    for (const d of DESTINATIONS.filter((x) => !x.custom && x.airport)) {
      const km = haversineKm(payload.lat, payload.lng, d.lat, d.lng);
      if (km < best) { best = km; airport = d.airport; }
    }
    const dest = {
      id: `custom-${slug}-${seed(payload.name, payload.lat).toString(16).slice(0, 4)}`,
      name: payload.name, country: payload.country || 'Custom pin',
      lat: payload.lat, lng: payload.lng, airport,
      days: 4, budgetLow: 80, budgetHigh: 150, bestTime: 'Year-round', custom: true,
    };
    const customs = loadCustoms();
    customs.push(dest);
    saveCustoms(customs);
    return dest;
  },

  deleteDestination: async (id) => { saveCustoms(loadCustoms().filter((d) => d.id !== id)); return { removed: id }; },

  flights: async (destId, origin = 'JFK') => {
    const d = destById(destId);
    const depart = new Date(Date.now() + 60 * 864e5);
    const daysOut = 60;
    const baseP = simulatePrice(destId, origin, depart.getMonth() + 1, daysOut);
    const offers = [];
    for (let i = 0; i < 5; i++) {
      const s = seed(origin, destId, i);
      const stops = (s >> 3) % 3;
      const price = Math.max(120, Math.round(baseP * (0.9 + (s % 45) / 100)) - stops * 35);
      offers.push({
        origin, destination: d?.airport || '???', price_usd: price, airline: AIRLINES[s % AIRLINES.length],
        stops, depart_date: depart.toISOString().slice(0, 10), duration: `${7 + (s % 15)}h ${(s % 6) * 10}m`, source: 'mock',
      });
    }
    offers.sort((a, b) => a.price_usd - b.price_usd);
    return { origin, destination: d?.airport || '???', cheapest: offers[0], offers, source: 'mock' };
  },

  weather: async (destId) => {
    const months = monthlyWeather(destId);
    const best = [...months].sort((a, b) => b.comfort_score - a.comfort_score).slice(0, 3).map((m) => m.month_name);
    return { destination_id: destId, months, best_months: best, source: 'climate-model' };
  },

  predictPrice: async (destId, origin = 'JFK', daysOut = 60, month) => {
    const departMonth = month || (new Date(Date.now() + daysOut * 864e5).getMonth() + 1);
    const curve = [];
    for (let dd = 3; dd < 300; dd += 7) curve.push({ days_before_departure: dd, predicted_price_usd: simulatePrice(destId, origin, departMonth, dd) });
    const priceNow = simulatePrice(destId, origin, departMonth, daysOut);
    const cheapest = curve.reduce((m, c) => (c.predicted_price_usd < m.predicted_price_usd ? c : m), curve[0]);
    const drop = priceNow ? Math.round((100 * (priceNow - cheapest.predicted_price_usd)) / priceNow * 10) / 10 : 0;
    let rec;
    if (daysOut <= cheapest.days_before_departure + 7 && drop < 6) rec = "BOOK NOW — you're already near the cheapest window.";
    else if (drop >= 12) rec = `WAIT — prices are expected to fall ~${Math.round(drop)}% toward ${cheapest.days_before_departure} days out.`;
    else rec = `SOON — modest ~${Math.round(drop)}% savings expected; book within a few weeks.`;
    const monthly = [];
    for (let m = 1; m <= 12; m++) monthly.push(simulatePrice(destId, origin, m, 60));
    const bestIdx = monthly.indexOf(Math.min(...monthly));
    return {
      destination_id: destId, origin, depart_month: departMonth, current_days_out: daysOut,
      predicted_price_now: priceNow, cheapest_price: cheapest.predicted_price_usd,
      cheapest_days_out: cheapest.days_before_departure, expected_drop_pct: drop, recommendation: rec,
      best_month_to_fly: bestIdx + 1, best_month_price: Math.round(monthly[bestIdx] * 100) / 100,
      curve, monthly: monthly.map((p) => Math.round(p * 100) / 100), model: 'heuristic',
    };
  },

  bestTime: async (destId, origin = 'JFK', priceWeight = 0.5) => {
    const monthly = [];
    for (let m = 1; m <= 12; m++) monthly.push(simulatePrice(destId, origin, m, 60));
    const comfort = monthlyWeather(destId).map((m) => m.comfort_score);
    const lo = Math.min(...monthly), hi = Math.max(...monthly);
    const w = Math.max(0, Math.min(1, priceWeight));
    const months = monthly.map((p, i) => {
      const priceScore = hi === lo ? 50 : (100 * (hi - p)) / (hi - lo);
      const overall = w * priceScore + (1 - w) * comfort[i];
      return {
        month: i + 1, month_name: MONTHS[i], price: Math.round(p * 100) / 100,
        price_score: Math.round(priceScore * 10) / 10, comfort_score: Math.round(comfort[i] * 10) / 10,
        overall_score: Math.round(overall * 10) / 10,
      };
    });
    const best = months.reduce((m, x) => (x.overall_score > m.overall_score ? x : m), months[0]);
    return { destination_id: destId, origin, months, best_month: best, weather_source: 'climate-model', price_model: 'heuristic' };
  },

  planRoute: async (stops, optimize = false) => {
    let ordered = stops;
    if (optimize && stops.length > 2) {
      const remaining = [...stops];
      ordered = [];
      let cur = [40.7128, -74.006];
      while (remaining.length) {
        let bi = 0, bd = Infinity;
        remaining.forEach((s, i) => { const d = haversineKm(cur[0], cur[1], s.lat, s.lng); if (d < bd) { bd = d; bi = i; } });
        const nx = remaining.splice(bi, 1)[0];
        ordered.push(nx); cur = [nx.lat, nx.lng];
      }
    }
    const legs = [];
    let total = 0;
    for (let i = 0; i < ordered.length - 1; i++) {
      const a = ordered[i], b = ordered[i + 1];
      const km = haversineKm(a.lat, a.lng, b.lat, b.lng);
      total += km;
      legs.push({ from_name: a.name, to_name: b.name, distance_km: Math.round(km * 10) / 10, est_flight_hours: Math.round((km / CRUISE_KMH) * 10) / 10 });
    }
    return { stops: ordered, legs, total_distance_km: Math.round(total * 10) / 10, total_flight_hours: Math.round((total / CRUISE_KMH) * 10) / 10, optimized: !!optimize };
  },

  // Place search hits OpenStreetMap Nominatim directly (public, CORS-enabled).
  places: async (lat, lng, q = '', radius_m = 40000) => {
    const box = 1.2;
    const params = new URLSearchParams({ q: q || 'tourist attraction', format: 'jsonv2', limit: '10', 'accept-language': 'en',
      viewbox: `${lng - box},${lat + box},${lng + box},${lat - box}`, bounded: '1' });
    const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`);
    const data = await res.json();
    const results = data.map((p) => ({ name: englishOnly((p.display_name || '').split(',')[0]), lat: +p.lat, lng: +p.lon, category: p.type, address: p.display_name, source: 'nominatim' }));
    return { query: q, results, source: 'nominatim' };
  },

  geocode: async (q) => {
    const params = new URLSearchParams({ q, format: 'jsonv2', limit: '8', addressdetails: '1', 'accept-language': 'en' });
    const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`);
    const data = await res.json();
    const results = data.map((p) => ({ name: englishOnly((p.display_name || '').split(',')[0]), lat: +p.lat, lng: +p.lon,
      category: p.type, address: p.display_name, country: p.address?.country, source: 'nominatim' }));
    return { query: q, results, source: 'nominatim' };
  },
};
