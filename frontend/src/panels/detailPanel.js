// Right-hand detail panel: destination content + on-demand live flights, ML price
// prediction, and best-time-to-travel, plus action buttons (bucket, route, map).
import { api } from '../api.js';
import { renderFlights, renderPrediction, renderBestTime } from './flightPanel.js';

const YEARS = [2026, 2027, 2028, 2029, 2030, 2031, 2032];

export function initDetailPanel({ onAddBucket, onAddRoute, onOpenMap, onSearchNearby, getBucketYears }) {
  const panel = document.getElementById('detailPanel');
  const scroll = document.getElementById('panelScroll');
  document.getElementById('closeDetail').onclick = () => panel.classList.remove('open');

  let current = null;

  function open(dest) {
    current = dest;
    const takenYears = getBucketYears(dest.id);
    scroll.innerHTML = `
      <div class="eyebrow">${dest.country} · ✈ ${dest.airport}</div>
      <h2>${dest.name}</h2>
      <div class="tagline">${dest.tagline}</div>

      <div class="actionBar">
        <button class="actBtn" id="btnMap">🛰️ Map / Street View</button>
        <button class="actBtn" id="btnRoute">➕ Add to route</button>
        <button class="actBtn" id="btnNearby">🔍 Nearby places</button>
      </div>

      <div class="metaRow">
        <div class="metaChip"><b>Best time:</b> ${dest.bestTime}</div>
        <div class="metaChip"><b>Suggested:</b> ${dest.days} days</div>
        <div class="metaChip"><b>Budget:</b> $${dest.budgetLow}–$${dest.budgetHigh}/day</div>
      </div>

      <div id="liveIntel" class="liveIntel"><div class="loading">Loading live flights, prices &amp; weather…</div></div>

      <div class="sectionTitle">Must-Visit Spots, Ranked</div>
      ${dest.attractions.map((a, i) => `
        <div class="attrItem"><div class="attrRank">${i + 1}</div>
          <div><div class="attrName">${a.name}</div><div class="attrDesc">${a.desc}</div></div></div>`).join('')}

      <div class="sectionTitle">Top Activities</div>
      <div class="pillList">${dest.activities.map((a) => `<div class="pill">${a}</div>`).join('')}</div>

      <div class="sectionTitle">Famous For</div>
      <div class="pillList">${dest.famous.map((a) => `<div class="pill famousPill">${a}</div>`).join('')}</div>

      <div class="addBucketBox">
        <label>Add to bucket list for</label>
        <select id="yearSelect">
          ${YEARS.map((y) => `<option value="${y}" ${takenYears.includes(y) ? 'disabled' : ''}>${y}${takenYears.includes(y) ? ' (added)' : ''}</option>`).join('')}
        </select>
        <label>Estimated trip budget ($ total, ${dest.days} days)</label>
        <input type="number" id="budgetInput" value="${dest.budgetLow * dest.days}" min="0"/>
        <button id="addBucketBtn">✦ Add to Bucket List</button>
      </div>`;

    panel.classList.add('open');

    document.getElementById('btnMap').onclick = () => onOpenMap(dest);
    document.getElementById('btnRoute').onclick = () => onAddRoute(dest);
    document.getElementById('btnNearby').onclick = () => onSearchNearby(dest);
    document.getElementById('addBucketBtn').onclick = () => {
      const year = parseInt(document.getElementById('yearSelect').value, 10);
      const budget = parseFloat(document.getElementById('budgetInput').value) || 0;
      onAddBucket(dest, year, budget);
      const b = document.getElementById('addBucketBtn');
      b.textContent = '✓ Added!'; b.classList.add('added');
      setTimeout(() => open(dest), 700);
    };

    loadIntel(dest);
  }

  async function loadIntel(dest) {
    const box = document.getElementById('liveIntel');
    try {
      const [flights, pred, best] = await Promise.all([
        api.flights(dest.id, 'JFK'),
        api.predictPrice(dest.id, 'JFK', 60),
        api.bestTime(dest.id, 'JFK', 0.5),
      ]);
      if (current?.id !== dest.id) return; // user moved on
      box.innerHTML = renderFlights(flights) + renderPrediction(pred) + renderBestTime(best);
    } catch (e) {
      box.innerHTML = `<div class="loading err">Couldn't load live data: ${e.message}. Is the backend running on :8000?</div>`;
    }
  }

  return { open, close: () => panel.classList.remove('open') };
}
