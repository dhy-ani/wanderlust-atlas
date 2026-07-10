// "Add to destinations" modal: type any place name, geocode it worldwide, and
// promote a result to a full destination (nav entry + pin + flights + ML + bucket).
import { api } from '../api.js';

export function initAddDestination({ onAdd }) {
  const modal = document.getElementById('addDestModal');
  const input = document.getElementById('addSearchInput');
  const results = document.getElementById('addResults');

  document.getElementById('addDestToggle').onclick = open;
  document.getElementById('closeAddDest').onclick = () => modal.classList.remove('open');
  document.getElementById('addSearchBtn').onclick = () => search(input.value);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') search(input.value); });

  function open() {
    modal.classList.add('open');
    results.innerHTML = '<div class="loading">Type a city, landmark, or place (e.g. “Kyoto”, “Machu Picchu”) and hit Search.</div>';
    input.value = '';
    setTimeout(() => input.focus(), 50);
  }

  async function search(q) {
    q = q.trim();
    if (!q) return;
    results.innerHTML = '<div class="loading">Searching worldwide…</div>';
    try {
      const data = await api.geocode(q);
      if (!data.results.length) { results.innerHTML = '<div class="loading">No matches. Try a more specific name.</div>'; return; }
      results.innerHTML = data.results.map((p, i) => `
        <div class="placeCard">
          <div class="pcMain">
            <div class="pcName">${p.name}</div>
            <div class="pcMeta">${p.country || p.address || ''} · ${p.lat.toFixed(2)}, ${p.lng.toFixed(2)} · ${data.source}</div>
          </div>
          <button class="addOneBtn" data-i="${i}">Add</button>
        </div>`).join('');
      results.querySelectorAll('.addOneBtn').forEach((b) => {
        b.onclick = async () => {
          b.disabled = true; b.textContent = '…';
          try { await onAdd(data.results[+b.dataset.i]); b.textContent = '✓ Added'; }
          catch (e) { b.disabled = false; b.textContent = 'Retry'; }
        };
      });
    } catch (e) {
      results.innerHTML = `<div class="loading err">Search failed: ${e.message}. Is the backend running?</div>`;
    }
  }

  return { open };
}
