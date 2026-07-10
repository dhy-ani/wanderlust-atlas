// App entry point: wires the globe, panels, and backend together.
import './styles/main.css';
import { DESTINATIONS } from './data/destinations.js';
import { api } from './api.js';
import { initGlobe } from './globe/globe.js';
import { initDetailPanel } from './panels/detailPanel.js';
import { initMapPanel } from './panels/mapPanel.js';
import { initRoutePlanner } from './panels/routePlanner.js';
import { initBucketDrawer } from './panels/bucketDrawer.js';

const byId = (id) => DESTINATIONS.find((d) => d.id === id);

// ---- globe ----
const globe = initGlobe(document.getElementById('globeCanvas'), {
  onSelect: (id) => selectDestination(id),
});
globe.addDestinations(DESTINATIONS);

// ---- panels ----
const bucket = initBucketDrawer();
const route = initRoutePlanner({ globe });

const map = initMapPanel({
  onPinGlobe: (place) => globe.addCustomPin(place.lat, place.lng, 'place:' + place.name),
  onAddRoute: (stop) => route.addStop(stop),
});

const detail = initDetailPanel({
  onAddBucket: (dest, year, budget) => bucket.add(dest, year, budget),
  onAddRoute: (dest) => route.addStop({ id: dest.id, name: dest.name, lat: dest.lat, lng: dest.lng }),
  onOpenMap: (dest) => map.open(dest),
  onSearchNearby: (dest) => map.open(dest, { nearby: true }),
  getBucketYears: (destId) => bucket.yearsFor(destId),
});

// ---- nav list ----
const navList = document.getElementById('navListItems');
DESTINATIONS.forEach((d, i) => {
  const el = document.createElement('div');
  el.className = 'navItem';
  el.dataset.id = d.id;
  el.innerHTML = `<span class="dot"></span>${d.name}<span class="rankTag">${String(i + 1).padStart(2, '0')}</span>`;
  el.onclick = () => selectDestination(d.id);
  navList.appendChild(el);
});

function selectDestination(id) {
  const d = byId(id);
  if (!d) return; // e.g. a custom "place:" pin
  globe.setSelected(id);
  globe.focusOn(d.lat, d.lng);
  document.querySelectorAll('.navItem').forEach((n) => n.classList.toggle('active', n.dataset.id === id));
  detail.open(d);
}

// ---- live-integration status badge in the header ----
api.health().then((h) => {
  const bits = [];
  bits.push(h.live.flights_amadeus ? 'flights✓' : 'flights·demo');
  bits.push(h.live.weather_openweather ? 'weather✓' : 'weather·model');
  bits.push(h.live.places_google ? 'places✓' : 'places·osm');
  document.getElementById('liveStatus').textContent = bits.join('  ·  ');
}).catch(() => {
  document.getElementById('liveStatus').textContent = 'backend offline — start it on :8000';
});
