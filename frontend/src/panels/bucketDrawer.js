// The bucket-list drawer: destinations grouped by planned year with a live budget
// summary (scaled by number of travellers). Owns the bucket state, persisted to
// localStorage so it survives a reload — every entry it holds either came from an
// explicit "Add to Bucket List" or from adding a new destination (see main.js),
// which is why the count here doubles as "how many destinations have been added."
import { grandTotal, groupByYear, rescaleBudget, totalDays } from '../logic/budget.js';

const LS_KEY = 'wa_bucket';

function loadBucket() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; }
}
function saveBucket(bucket) {
  localStorage.setItem(LS_KEY, JSON.stringify(bucket));
}

export function initBucketDrawer() {
  const drawer = document.getElementById('bucketDrawer');
  const yearsCol = document.getElementById('yearsCol');
  const summaryCol = document.getElementById('summaryCol');
  const statCount = document.getElementById('statCount');
  const badge = document.getElementById('bucketBadge');

  let bucket = loadBucket();   // { destId, name, country, year, budget, days, addedBy }
  let people = 1;

  document.getElementById('bucketToggle').onclick = () => drawer.classList.add('open');
  document.getElementById('closeDrawer').onclick = () => drawer.classList.remove('open');

  function persist() { saveBucket(bucket); }

  function add(dest, year, budget, days = dest.days, addedBy = 'Guest') {
    bucket.push({ destId: dest.id, name: dest.name, country: dest.country, year, budget, days, addedBy });
    persist();
    render();
  }
  function remove(idx) { bucket.splice(idx, 1); persist(); render(); }
  function yearsFor(destId) { return bucket.filter((b) => b.destId === destId).map((b) => b.year); }

  // Unique destinations currently on the list — used by the group negotiation
  // panel to let the group pick WHICH bucket-list destination to plan within.
  function listDestinations() {
    const seen = new Map();
    bucket.forEach((b) => { if (!seen.has(b.destId)) seen.set(b.destId, { destId: b.destId, name: b.name }); });
    return [...seen.values()];
  }

  function setDays(idx, newDays) {
    const item = bucket[idx];
    if (!item) return;
    const rescaled = rescaleBudget(item.budget, item.days, newDays);
    item.days = rescaled.days;
    item.budget = rescaled.budget;
    persist();
    render();
  }

  function render() {
    statCount.textContent = bucket.length;
    badge.textContent = bucket.length;

    if (bucket.length === 0) {
      yearsCol.innerHTML = '<div class="emptyState">Your atlas is empty.<br>Add a destination or click a pin to plan a trip.</div>';
      summaryCol.innerHTML = '<h4>Budget Summary</h4><div class="summaryRow total"><span>Grand total</span><span>$0</span></div>';
      return;
    }

    const groups = groupByYear(bucket, people);
    yearsCol.innerHTML = groups.map(({ year, items, subtotal }) => `
      <div class="yearGroup">
        <div class="yearTitle"><span>${year}</span><span>$${subtotal.toLocaleString()}</span></div>
        ${items.map((it) => `<div class="bucketCard">
          <div><div class="bcName">${it.name}</div>
          <div class="bcMeta">${it.country} ·
            <input type="number" class="bcDaysInput" data-idx="${it._idx}" value="${it.days}" min="1" max="60"/> days ·
            $${(it.budget * people).toLocaleString()}</div>
          <div class="bcAddedBy">added by ${it.addedBy || 'Guest'}</div></div>
          <button class="bcRemove" data-idx="${it._idx}">✕</button></div>`).join('')}
      </div>`).join('');
    yearsCol.querySelectorAll('.bcRemove').forEach((b) => (b.onclick = () => remove(+b.dataset.idx)));
    yearsCol.querySelectorAll('.bcDaysInput').forEach((inp) => {
      inp.onclick = (e) => e.stopPropagation();
      inp.onchange = () => setDays(+inp.dataset.idx, inp.value);
    });

    summaryCol.innerHTML = `<h4>Budget Summary</h4>
      <div class="summaryRow"><span>Destinations added</span><span>${bucket.length}</span></div>
      <div class="summaryRow"><span>Total travel days</span><span>${totalDays(bucket)}</span></div>
      <div class="summaryRow"><span>Years spanned</span><span>${groups.length}</span></div>
      <div class="summaryRow total"><span>Grand total</span><span>$${grandTotal(bucket, people).toLocaleString()}</span></div>
      <div class="peopleInput"><label>People traveling</label>
        <input type="number" id="peopleInput" value="${people}" min="1"></div>`;
    document.getElementById('peopleInput').onchange = (e) => { people = Math.max(1, parseInt(e.target.value, 10) || 1); render(); };
  }

  render();
  return { add, yearsFor, listDestinations };
}
