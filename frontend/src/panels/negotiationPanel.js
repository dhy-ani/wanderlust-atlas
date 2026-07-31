// Group trip planning UI: sign in, create/join a group by code, submit your
// own preference survey, add to the group's SHARED wishlist, submit when
// you're free, and negotiate a route within one destination via each
// member's Digital Twin. Talks to the real Python backend (FastAPI +
// LangGraph + GraphRAG + CrewAI) — GitHub Pages can't run that, so static
// builds show an explainer instead of firing requests that would 404.
import { API_BASE } from '../config.js';
import { USE_STATIC } from '../api.js';
import { authHeaders, getUser, isSignedIn, login, signOut, signup } from '../auth.js';

async function post(path, body) {
  const res = await fetch(`${API_BASE}/api${path}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders() }, body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.detail || `${path} -> ${res.status}`);
  return data;
}
async function get(path) {
  const res = await fetch(`${API_BASE}/api${path}`, { headers: authHeaders() });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.detail || `${path} -> ${res.status}`);
  return data;
}
async function del(path) {
  const res = await fetch(`${API_BASE}/api${path}`, { method: 'DELETE', headers: authHeaders() });
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

export function initNegotiationPanel({ getBucketDestinations }) {
  const modal = document.getElementById('negotiationModal');
  const body = document.getElementById('negotiationBody');
  document.getElementById('negotiationToggle').onclick = () => { modal.classList.add('open'); render(); };
  document.getElementById('closeNegotiation').onclick = () => modal.classList.remove('open');

  let group = null;

  function render() {
    if (USE_STATIC) return renderStaticNotice();
    if (!isSignedIn()) return renderSignIn();
    if (!group) return renderCreateJoin();
    return renderGroup();
  }

  function renderStaticNotice() {
    body.innerHTML = `
      <div class="negoIntro">Group trip planning runs a real multi-agent backend
        (FastAPI + LangGraph + GraphRAG + CrewAI) with real accounts — that
        needs a live Python server + database, which this static demo
        (GitHub Pages) doesn't run.</div>
      <div class="negoCard">
        <h4>Run it locally to try this feature</h4>
        <div class="hintSmall">
          <code>docker compose up --build</code> — then open
          <b>http://localhost:8080</b> and click <b>🤝 Group Plan</b> again.
        </div>
      </div>`;
  }

  // ---- sign in / sign up ----
  function renderSignIn() {
    body.innerHTML = `
      <div class="negoIntro">Sign in to create or join a group. Your account is what makes the
        shared wishlist and negotiation actually "yours" — no typing a name into a box.</div>
      <div class="negoSplit">
        <div class="negoCard">
          <h4>Sign in</h4>
          <input id="ngLoginEmail" type="email" placeholder="Email"/>
          <input id="ngLoginPassword" type="password" placeholder="Password"/>
          <button id="ngLoginBtn">Sign In</button>
        </div>
        <div class="negoCard">
          <h4>Create an account</h4>
          <input id="ngSignupName" placeholder="Your name"/>
          <input id="ngSignupEmail" type="email" placeholder="Email"/>
          <input id="ngSignupPassword" type="password" placeholder="Password (min 8 chars)"/>
          <button id="ngSignupBtn">Sign Up</button>
        </div>
      </div>
      <div id="ngAuthStatus" class="negoStatus"></div>`;

    document.getElementById('ngLoginBtn').onclick = async () => {
      const status = document.getElementById('ngAuthStatus');
      try {
        await login(document.getElementById('ngLoginEmail').value.trim(), document.getElementById('ngLoginPassword').value);
        render();
      } catch (e) { status.textContent = `Failed: ${e.message}`; status.classList.add('err'); }
    };
    document.getElementById('ngSignupBtn').onclick = async () => {
      const status = document.getElementById('ngAuthStatus');
      try {
        await signup(
          document.getElementById('ngSignupEmail').value.trim(),
          document.getElementById('ngSignupPassword').value,
          document.getElementById('ngSignupName').value.trim(),
        );
        render();
      } catch (e) { status.textContent = `Failed: ${e.message}`; status.classList.add('err'); }
    };
  }

  // ---- create / join a group ----
  function renderCreateJoin() {
    const user = getUser();
    body.innerHTML = `
      <div class="negoIntro">Signed in as <b>${user?.name}</b> · <a href="#" id="ngSignOut">sign out</a><br/><br/>
        Plan a trip as a group: create a group and share the code, or join one with a code.
        Each person fills a quick preference survey, then the Mediator proposes a trip and
        each person's <b>Digital Twin</b> argues on their behalf.</div>
      <div class="negoSplit">
        <div class="negoCard">
          <h4>Create a group</h4>
          <input id="ngGroupName" placeholder="Group name (e.g. Summer Squad)"/>
          <input id="ngCode" placeholder="Join code (optional — auto-generated)"/>
          <button id="ngCreateBtn">Create Group</button>
        </div>
        <div class="negoCard">
          <h4>Join a group</h4>
          <input id="ngJoinCode" placeholder="Join code"/>
          <button id="ngJoinBtn">Join Group</button>
        </div>
      </div>
      <div id="ngStatus" class="negoStatus"></div>`;

    document.getElementById('ngSignOut').onclick = (e) => { e.preventDefault(); signOut(); render(); };
    document.getElementById('ngCreateBtn').onclick = async () => {
      const name = document.getElementById('ngGroupName').value.trim();
      const code = document.getElementById('ngCode').value.trim();
      if (!name) return;
      try { group = await post('/group', { name, code: code || undefined }); render(); }
      catch (e) { document.getElementById('ngStatus').textContent = `Failed: ${e.message}`; }
    };
    document.getElementById('ngJoinBtn').onclick = async () => {
      const code = document.getElementById('ngJoinCode').value.trim();
      if (!code) return;
      try { group = await post('/group/join', { code }); render(); }
      catch (e) { document.getElementById('ngStatus').textContent = `Failed: ${e.message}`; }
    };
  }

  // ---- inside a group: survey, wishlist, availability, negotiation ----
  function renderGroup() {
    body.innerHTML = `
      <div class="negoGroupHead">
        <div><b>${group.name}</b> — join code <code class="negoCode">${group.code}</code></div>
        <div class="negoMembers">${group.members.map((m) => `<span class="negoMemberChip">${m.name}</span>`).join('')}</div>
      </div>
      <div class="negoSplit">
        <div class="negoCard">
          <h4>Your Digital Twin preferences</h4>
          <label>Budget max ($)</label><input id="ngBudget" type="number" value="1500"/>
          <label>Likes (comma-separated)</label><input id="ngLikes" placeholder="museums, food, hiking"/>
          <label>Dislikes (comma-separated)</label><input id="ngDislikes" placeholder="beaches, nightlife"/>
          <button id="ngSurveyBtn">Save Preferences</button>
          <div id="ngSurveyStatus" class="negoStatus"></div>
        </div>
        <div class="negoCard">
          <h4>When are you free?</h4>
          <label>From</label><input id="ngFreeFrom" type="date"/>
          <label>To</label><input id="ngFreeTo" type="date"/>
          <button id="ngFreeBtn">Add My Availability</button>
          <button id="ngOverlapBtn" class="linkBtn">Show group overlap</button>
          <div id="ngAvailStatus" class="negoStatus"></div>
        </div>
      </div>

      <div class="negoCard">
        <h4>Shared wishlist — anyone in the group can add</h4>
        <div class="hintSmall">Add a destination from your own Bucket List to the group's shared list.</div>
        <select id="ngWishAddSelect">${destOptions()}</select>
        <button id="ngWishAddBtn">➕ Add to group wishlist</button>
        <div id="ngWishlist" class="negoItems">Loading…</div>
      </div>

      <div class="negoCard">
        <h4>Plan within a destination</h4>
        <div class="hintSmall">The Mediator builds the route itself — points of interest inside
          this ONE destination, picked from what the group likes (GraphRAG) plus what's
          trending on Reddit, never over budget. Picks from the shared wishlist above.</div>
        <select id="ngDestSelect"><option value="">— add to the wishlist above first —</option></select>
        <button id="ngPreviewBtn">👀 Preview Agent's Route</button>
        <button id="ngProposeBtn">🤝 Start Negotiation</button>
        <div id="ngProposeStatus" class="negoStatus"></div>
      </div>
      <div id="ngPreview" class="negoItems"></div>
      <div id="ngTranscript" class="negoTranscript"></div>`;

    document.getElementById('ngSurveyBtn').onclick = async () => {
      const budget_max = parseFloat(document.getElementById('ngBudget').value) || 1500;
      const likes = document.getElementById('ngLikes').value.split(',').map((s) => s.trim()).filter(Boolean);
      const dislikes = document.getElementById('ngDislikes').value.split(',').map((s) => s.trim()).filter(Boolean);
      const status = document.getElementById('ngSurveyStatus');
      try {
        await post('/survey/start', { group_id: group.id, budget_max, likes, dislikes });
        status.textContent = '✓ Saved your preferences';
      } catch (e) { status.textContent = `Failed: ${e.message}`; }
    };

    document.getElementById('ngFreeBtn').onclick = async () => {
      const start_date = document.getElementById('ngFreeFrom').value;
      const end_date = document.getElementById('ngFreeTo').value;
      const status = document.getElementById('ngAvailStatus');
      if (!start_date || !end_date) { status.textContent = 'Pick both dates.'; return; }
      try {
        await post(`/group/${group.id}/availability`, { start_date, end_date });
        status.textContent = '✓ Added your availability';
      } catch (e) { status.textContent = `Failed: ${e.message}`; }
    };
    document.getElementById('ngOverlapBtn').onclick = async () => {
      const status = document.getElementById('ngAvailStatus');
      try {
        const windows = await get(`/group/${group.id}/availability/overlap`);
        status.textContent = windows.length
          ? `Everyone's free: ${windows.map((w) => `${w.start_date} → ${w.end_date}`).join(', ')}`
          : 'No overlapping window yet (or not everyone has submitted dates).';
      } catch (e) { status.textContent = `Failed: ${e.message}`; }
    };

    document.getElementById('ngWishAddBtn').onclick = async () => {
      const sel = document.getElementById('ngWishAddSelect');
      const destId = sel.value;
      if (!destId) return;
      const dest = getBucketDestinations().find((d) => d.destId === destId);
      try {
        await post(`/group/${group.id}/wishlist`, { destination_id: destId, name: dest?.name || destId, country: dest?.country || '' });
        loadWishlist();
      } catch (e) { document.getElementById('ngWishlist').insertAdjacentHTML('afterbegin', `<div class="hintSmall err">${e.message}</div>`); }
    };

    document.getElementById('ngPreviewBtn').onclick = () => previewProposal();
    document.getElementById('ngProposeBtn').onclick = () => runNegotiation();

    loadWishlist();
  }

  async function loadWishlist() {
    const el = document.getElementById('ngWishlist');
    const destSelect = document.getElementById('ngDestSelect');
    try {
      const items = await get(`/group/${group.id}/wishlist`);
      el.innerHTML = items.length
        ? items.map((it) => `
            <div class="negoWishItem">
              <span><b>${it.name}</b> <span class="negoVia">added by ${it.added_by}</span></span>
              <button data-id="${it.id}" class="rsRemove">✕</button>
            </div>`).join('')
        : '<div class="hintSmall">Nothing yet — add a destination above.</div>';
      el.querySelectorAll('.rsRemove').forEach((b) => {
        b.onclick = async () => { await del(`/group/${group.id}/wishlist/${b.dataset.id}`); loadWishlist(); };
      });
      // The negotiation planner picks from what's actually on the shared wishlist,
      // not just your own personal Bucket List — that's the point of sharing it.
      destSelect.innerHTML = items.length
        ? items.map((it) => `<option value="${it.destination_id}">${it.name}</option>`).join('')
        : '<option value="">— add to the wishlist above first —</option>';
    } catch (e) {
      el.innerHTML = `<div class="hintSmall err">Failed to load: ${e.message}</div>`;
    }
  }

  function destOptions() {
    const dests = getBucketDestinations();
    if (!dests.length) return '<option value="">— add a destination to your bucket list first —</option>';
    return dests.map((d) => `<option value="${d.destId}">${d.name}</option>`).join('');
  }

  function selectedDestId() {
    return document.getElementById('ngDestSelect')?.value || '';
  }

  async function previewProposal() {
    const destId = selectedDestId();
    const status = document.getElementById('ngProposeStatus');
    const preview = document.getElementById('ngPreview');
    if (!destId) { status.textContent = 'Pick a destination first.'; return; }
    status.textContent = 'Asking the mediator to propose a route…';
    try {
      const p = await get(`/negotiate/preview/${encodeURIComponent(destId)}?group_id=${group.id}`);
      preview.innerHTML = `<b>Agent's proposed route:</b> ${p.items.map((i) => `${i.name} (${i.category})`).join(' → ') || '(no POIs known for this destination yet)'}`;
      status.textContent = '';
    } catch (e) {
      status.textContent = `Failed: ${e.message}`;
    }
  }

  async function runNegotiation() {
    const destId = selectedDestId();
    const status = document.getElementById('ngProposeStatus');
    const transcript = document.getElementById('ngTranscript');
    if (!destId) { status.textContent = 'Pick a destination first.'; return; }

    status.textContent = 'Negotiating…';
    transcript.innerHTML = '';
    try {
      const result = await post('/negotiate/run', { group_id: group.id, destination_id: destId, max_rounds: 5 });
      status.textContent = `${result.accepted ? '✅ Accepted' : '⏱️ Hit round limit'} — final score ${result.final_score} ` +
        `(engine: ${result.engine}, LLM calls: ${result.llm_calls_made}, cache hits: ${result.cache_hits})`;
      transcript.innerHTML = result.rounds.map((r) => `
        <div class="negoRound">
          <div class="negoRoundHead">Round ${r.round} — score ${r.final_score}${r.penalty_applied ? ' (penalty: 2+ rejections)' : ''}</div>
          <div class="negoItems">${r.proposal.items.map((i) => i.name).join(' → ')}</div>
          ${r.verdicts.map((v) => `
            <div class="negoVerdict ${v.verdict.toLowerCase()}">
              <b>${v.member_name}</b> <span class="negoVia">[${v.via}]</span>: ${v.verdict} (${v.personal_score})
              <div class="negoReason">${v.reasoning}</div>
            </div>`).join('')}
        </div>`).join('') +
        (result.narrative ? `<details class="negoNarrative"><summary>📝 Documentation Agent's full record</summary><pre>${result.narrative.replace(/</g, '&lt;')}</pre></details>` : '');
    } catch (e) {
      status.textContent = `Failed: ${e.message}`;
    }
  }

  return { open: () => { modal.classList.add('open'); render(); } };
}
