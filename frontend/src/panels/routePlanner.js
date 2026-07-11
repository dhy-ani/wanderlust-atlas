// Multi-stop route planner. Collects stops, calls the backend to compute legs &
// totals, and asks the globe to draw the dashed great-circle route. Can start
// from New York and optionally optimise stop order (nearest-neighbour).
import { api } from '../api.js';
import { NYC } from '../config.js';

export function initRoutePlanner({ globe }) {
  const panel = document.getElementById('routePanel');
  const listEl = document.getElementById('routeStops');
  const summaryEl = document.getElementById('routeSummary');
  const badge = document.getElementById('routeBadge');

  let stops = [];                 // { id, name, lat, lng }
  let fromNYC = true;
  let optimize = false;

  document.getElementById('routeToggle').onclick = () => panel.classList.toggle('open');
  document.getElementById('closeRoute').onclick = () => panel.classList.remove('open');
  document.getElementById('optFromNYC').onchange = (e) => { fromNYC = e.target.checked; recompute(); };
  document.getElementById('optOptimize').onchange = (e) => { optimize = e.target.checked; recompute(); };
  document.getElementById('clearRoute').onclick = () => { stops = []; recompute(); };

  function addStop(stop) {
    if (stops.some((s) => s.id === stop.id)) return;
    stops.push({ id: stop.id, name: stop.name, lat: stop.lat, lng: stop.lng });
    panel.classList.add('open');
    recompute();
  }
  function removeStop(id) { stops = stops.filter((s) => s.id !== id); recompute(); }

  function orderedForApi() {
    const base = fromNYC ? [{ name: NYC.name, lat: NYC.lat, lng: NYC.lng }] : [];
    return [...base, ...stops.map((s) => ({ name: s.name, lat: s.lat, lng: s.lng }))];
  }

  async function recompute() {
    badge.textContent = stops.length;
    if (stops.length === 0) {
      listEl.innerHTML = '<div class="emptyState">No stops yet. Open a destination and hit “➕ Add to route”, or add places from the map.</div>';
      summaryEl.innerHTML = '';
      globe.setRoute(null);
      return;
    }
    const apiStops = orderedForApi();
    globe.setRoute(apiStops); // draw immediately for responsiveness

    listEl.innerHTML = stops.map((s, i) => `
      <div class="routeStop">
        <span class="rsNum">${fromNYC ? i + 1 : i + 1}</span>
        <span class="rsName">${s.name}</span>
        <button class="rsRemove" data-id="${s.id}">✕</button>
      </div>`).join('');
    listEl.querySelectorAll('.rsRemove').forEach((b) => (b.onclick = () => removeStop(b.dataset.id)));

    if (apiStops.length < 2) { summaryEl.innerHTML = '<div class="hintSmall">Add one more stop to draw a route.</div>'; return; }
    try {
      const r = await api.planRoute(apiStops, optimize, false);
      if (optimize) globe.setRoute(r.stops); // redraw in optimised order
      summaryEl.innerHTML = `
        <div class="summaryRow"><span>Stops</span><span>${r.stops.length}</span></div>
        <div class="summaryRow"><span>Total distance</span><span>${Math.round(r.total_distance_km).toLocaleString()} km</span></div>
        <div class="summaryRow total"><span>Flight time (approx)</span><span>${r.total_flight_hours} h</span></div>`;
    } catch (e) {
      summaryEl.innerHTML = `<div class="hintSmall err">Route calc failed: ${e.message}</div>`;
    }
  }

  recompute();
  return { addStop, getStops: () => stops.slice() };
}
