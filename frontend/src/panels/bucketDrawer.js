// The bucket-list drawer: destinations grouped by planned year with a live budget
// summary (scaled by number of travellers). Owns the bucket state.
export function initBucketDrawer() {
  const drawer = document.getElementById('bucketDrawer');
  const yearsCol = document.getElementById('yearsCol');
  const summaryCol = document.getElementById('summaryCol');
  const statCount = document.getElementById('statCount');
  const badge = document.getElementById('bucketBadge');

  let bucket = [];   // { destId, name, country, year, budget, days }
  let people = 1;

  document.getElementById('bucketToggle').onclick = () => drawer.classList.add('open');
  document.getElementById('closeDrawer').onclick = () => drawer.classList.remove('open');

  function add(dest, year, budget, days = dest.days) {
    bucket.push({ destId: dest.id, name: dest.name, country: dest.country, year, budget, days });
    render();
  }
  function remove(idx) { bucket.splice(idx, 1); render(); }
  function yearsFor(destId) { return bucket.filter((b) => b.destId === destId).map((b) => b.year); }

  // Editing days scales the budget proportionally (same $/day rate), so a 3-day
  // trip stretched to 5 days keeps its per-day cost instead of silently overspending.
  function setDays(idx, newDays) {
    const item = bucket[idx];
    if (!item) return;
    newDays = Math.max(1, Math.min(60, parseInt(newDays, 10) || item.days));
    const perDay = item.days > 0 ? item.budget / item.days : 0;
    item.budget = Math.round(perDay * newDays);
    item.days = newDays;
    render();
  }

  function render() {
    statCount.textContent = bucket.length;
    badge.textContent = bucket.length;

    if (bucket.length === 0) {
      yearsCol.innerHTML = '<div class="emptyState">Your atlas is empty.<br>Click a pin, then add a destination to a year.</div>';
      summaryCol.innerHTML = '<h4>Budget Summary</h4><div class="summaryRow total"><span>Grand total</span><span>$0</span></div>';
      return;
    }

    const byYear = {};
    bucket.forEach((b, idx) => { b._idx = idx; (byYear[b.year] ||= []).push(b); });
    const years = Object.keys(byYear).sort();

    yearsCol.innerHTML = years.map((y) => {
      const items = byYear[y];
      const subtotal = items.reduce((s, i) => s + i.budget, 0) * people;
      return `<div class="yearGroup">
        <div class="yearTitle"><span>${y}</span><span>$${subtotal.toLocaleString()}</span></div>
        ${items.map((it) => `<div class="bucketCard">
          <div><div class="bcName">${it.name}</div>
          <div class="bcMeta">${it.country} ·
            <input type="number" class="bcDaysInput" data-idx="${it._idx}" value="${it.days}" min="1" max="60"/> days ·
            $${(it.budget * people).toLocaleString()}</div></div>
          <button class="bcRemove" data-idx="${it._idx}">✕</button></div>`).join('')}
      </div>`;
    }).join('');
    yearsCol.querySelectorAll('.bcRemove').forEach((b) => (b.onclick = () => remove(+b.dataset.idx)));
    yearsCol.querySelectorAll('.bcDaysInput').forEach((inp) => {
      inp.onclick = (e) => e.stopPropagation();
      inp.onchange = () => setDays(+inp.dataset.idx, inp.value);
    });

    const grand = bucket.reduce((s, i) => s + i.budget, 0) * people;
    const totalDays = bucket.reduce((s, i) => s + i.days, 0);
    summaryCol.innerHTML = `<h4>Budget Summary</h4>
      <div class="summaryRow"><span>Trips planned</span><span>${bucket.length}</span></div>
      <div class="summaryRow"><span>Total travel days</span><span>${totalDays}</span></div>
      <div class="summaryRow"><span>Years spanned</span><span>${years.length}</span></div>
      <div class="summaryRow total"><span>Grand total</span><span>$${grand.toLocaleString()}</span></div>
      <div class="peopleInput"><label>People traveling</label>
        <input type="number" id="peopleInput" value="${people}" min="1"></div>`;
    document.getElementById('peopleInput').onchange = (e) => { people = Math.max(1, parseInt(e.target.value, 10) || 1); render(); };
  }

  render();
  return { add, yearsFor };
}

