// App entry point: wires the globe, panels, and backend together.
import './styles/main.css';
import { DESTINATIONS, byId, addRuntimeDestination, removeRuntimeDestination, getHiddenBuiltins, hideBuiltinDestination } from './data/destinations.js';
import { api } from './api.js';
import { initGlobe } from './globe/globe.js';
import { initDetailPanel } from './panels/detailPanel.js';
import { initMapPanel } from './panels/mapPanel.js';
import { initRoutePlanner } from './panels/routePlanner.js';
import { initBucketDrawer } from './panels/bucketDrawer.js';
import { initAddDestination } from './panels/addDestination.js';
import { initNegotiationPanel } from './panels/negotiationPanel.js';
import { ensureCurrentUser } from './identity.js';

// Drop any built-ins the user previously hid, before anything renders.
const hiddenIds = new Set(getHiddenBuiltins());
if (hiddenIds.size) {
  for (let i = DESTINATIONS.length - 1; i >= 0; i--) {
    if (hiddenIds.has(DESTINATIONS[i].id)) DESTINATIONS.splice(i, 1);
  }
}

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
  onAddDestination: (place) => addDestinationFromPlace(place),
});

const detail = initDetailPanel({
  onAddBucket: (dest, year, budget, days, addedBy) => bucket.add(dest, year, budget, days, addedBy),
  onAddRoute: (dest) => route.addStop({ id: dest.id, name: dest.name, lat: dest.lat, lng: dest.lng }),
  onOpenMap: (dest) => map.open(dest),
  onSearchNearby: (dest) => map.open(dest, { nearby: true }),
  onRemoveDestination: (dest) => removeDestination(dest),
  getBucketYears: (destId) => bucket.yearsFor(destId),
});

initAddDestination({ onAdd: (place) => addDestinationFromPlace(place) });
initNegotiationPanel({ getBucketDestinations: () => bucket.listDestinations() });

// ---- nav list ----
const navList = document.getElementById('navListItems');
function addNavItem(d, index = document.querySelectorAll('.navItem').length) {
  const el = document.createElement('div');
  el.className = 'navItem';
  el.dataset.id = d.id;
  el.innerHTML = `<span class="dot"></span>${d.name}<span class="rankTag">${d.custom ? '★' : String(index + 1).padStart(2, '0')}</span>`;
  el.onclick = () => selectDestination(d.id);
  navList.appendChild(el);
}
DESTINATIONS.forEach((d, i) => addNavItem(d, i));

function selectDestination(id) {
  const d = byId(id);
  if (!d) return; // e.g. a transient "place:" search pin
  globe.setSelected(id);
  globe.focusOn(d.lat, d.lng);
  document.querySelectorAll('.navItem').forEach((n) => n.classList.toggle('active', n.dataset.id === id));
  detail.open(d);
}

// ---- add / remove custom destinations ----
async function addDestinationFromPlace(place) {
  const addedBy = ensureCurrentUser();
  const payload = {
    name: place.name,
    country: place.country || (place.address ? place.address.split(',').slice(-1)[0].trim() : 'Custom pin'),
    lat: place.lat,
    lng: place.lng,
    added_by: addedBy,
  };
  const dest = await api.addDestination(payload); // backend fills id, nearest airport, defaults
  addRuntimeDestination(dest);
  addNavItem(dest);
  globe.removePin('place:' + place.name); // clear any transient search pin for the same spot
  globe.addDestination(dest);
  document.getElementById('addDestModal').classList.remove('open');

  // Adding a destination IS planning to go there — it becomes a bucket-list entry
  // right away (default: next year), attributed to whoever added it.
  const nextYear = new Date().getFullYear() + 1;
  bucket.add(dest, nextYear, dest.budgetLow * dest.days, dest.days, addedBy);

  selectDestination(dest.id);
  return dest;
}

async function removeDestination(dest) {
  if (dest.custom) {
    try { await api.deleteDestination(dest.id); } catch (e) { /* still remove locally */ }
    removeRuntimeDestination(dest.id);
  } else {
    // Built-ins are shared data — hide it from this browser only, persisted locally.
    hideBuiltinDestination(dest.id);
  }
  globe.removePin(dest.id);
  document.querySelector(`.navItem[data-id="${dest.id}"]`)?.remove();
}

// ---- restore previously-saved custom destinations from the backend ----
api.destinations().then((list) => {
  list.filter((d) => d.custom && !byId(d.id)).forEach((d) => {
    addRuntimeDestination(d);
    addNavItem(d);
    globe.addDestination(d);
  });
}).catch(() => {});
