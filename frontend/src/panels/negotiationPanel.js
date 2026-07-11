// Minimal negotiation UI: create/join a group, fill the start survey, propose a
// trip, and watch the agent chat log (rule-based reasoning shown as "via: rule",
// LLM-backed turns shown as "via: llm") round-by-round until the group converges
// or the round cap is hit. Talks directly to the /api/group, /api/survey, and
// /api/negotiate endpoints added by the agent-integration branch.
import { API_BASE } from '../config.js';

async function post(path, body) {
  const res = await fetch(`${API_BASE}/api${path}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}
async function get(path) {
  const res = await fetch(`${API_BASE}/api${path}`);
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

export function initNegotiationPanel({ getBucketDestinations }) {
  const modal = document.getElementById('negotiationModal');
  const body = document.getElementById('negotiationBody');
  document.getElementById('negotiationToggle').onclick = () => { modal.classList.add('open'); render(); };
  document.getElementById('closeNegotiation').onclick = () => modal.classList.remove('open');

  let group = null;               // { id, name, code, member_names }
  let members = [];               // local-only list of {name, submitted}

  function render() {
    if (!group) return renderCreateJoin();
    return renderGroup();
  }

  function renderCreateJoin() {
    body.innerHTML = `
      <div class="negoIntro">Plan a trip as a group. The admin creates a group and gets a code;
        everyone else joins with that code. Each person fills a quick preference survey, then the
        Mediator proposes a trip and each person's <b>Digital Twin</b> argues on their behalf.</div>
      <div class="negoSplit">
        <div class="negoCard">
          <h4>Create a group (you're the admin)</h4>
          <input id="ngGroupName" placeholder="Group name (e.g. Summer Squad)"/>
          <input id="ngAdminName" placeholder="Your name"/>
          <input id="ngCode" placeholder="Join code (optional — auto-generated)"/>
          <button id="ngCreateBtn">Create Group</button>
        </div>
        <div class="negoCard">
          <h4>Join a group</h4>
          <input id="ngJoinCode" placeholder="Join code"/>
          <input id="ngJoinName" placeholder="Your name"/>
          <button id="ngJoinBtn">Join Group</button>
        </div>
      </div>
      <div id="ngStatus" class="negoStatus"></div>`;

    document.getElementById('ngCreateBtn').onclick = async () => {
      const name = document.getElementById('ngGroupName').value.trim();
      const admin = document.getElementById('ngAdminName').value.trim();
      const code = document.getElementById('ngCode').value.trim();
      if (!name || !admin) return;
      try {
        group = await post('/group', { name, admin_name: admin, code: code || undefined });
        members = [{ name: admin, submitted: false }];
        render();
      } catch (e) { document.getElementById('ngStatus').textContent = `Failed: ${e.message}`; }
    };
    document.getElementById('ngJoinBtn').onclick = async () => {
      const code = document.getElementById('ngJoinCode').value.trim();
      const name = document.getElementById('ngJoinName').value.trim();
      if (!code || !name) return;
      try {
        group = await post('/group/join', { code, member_name: name });
        members = group.member_names.map((n) => ({ name: n, submitted: false }));
        render();
      } catch (e) { document.getElementById('ngStatus').textContent = `Failed: ${e.message}`; }
    };
  }

  function renderGroup() {
    body.innerHTML = `
      <div class="negoGroupHead">
        <div><b>${group.name}</b> — join code <code class="negoCode">${group.code}</code></div>
        <div class="negoMembers">${group.member_names.map((n) => `<span class="negoMemberChip">${n}</span>`).join('')}</div>
      </div>
      <div class="negoSplit">
        <div class="negoCard">
          <h4>Start survey (Digital Twin setup)</h4>
          <select id="ngSurveyMember">${group.member_names.map((n) => `<option>${n}</option>`).join('')}</select>
          <label>Budget max ($)</label><input id="ngBudget" type="number" value="1500"/>
          <label>Likes (comma-separated)</label><input id="ngLikes" placeholder="museums, food, hiking"/>
          <label>Dislikes (comma-separated)</label><input id="ngDislikes" placeholder="beaches, nightlife"/>
          <button id="ngSurveyBtn">Save Preferences</button>
          <div id="ngSurveyStatus" class="negoStatus"></div>
        </div>
        <div class="negoCard">
          <h4>Plan within a destination</h4>
          <div class="hintSmall">The Mediator builds the route itself — points of
            interest inside this ONE destination, picked from what the group likes
            (GraphRAG) plus what's trending on Reddit. Add destinations to your
            <b>Bucket List</b> first if none show up here.</div>
          <select id="ngDestSelect">${destOptions()}</select>
          <button id="ngPreviewBtn">👀 Preview Agent's Route</button>
          <button id="ngProposeBtn">🤝 Start Negotiation</button>
          <div id="ngProposeStatus" class="negoStatus"></div>
        </div>
      </div>
      <div id="ngPreview" class="negoItems"></div>
      <div id="ngTranscript" class="negoTranscript"></div>`;

    document.getElementById('ngSurveyBtn').onclick = async () => {
      const member_name = document.getElementById('ngSurveyMember').value;
      const budget_max = parseFloat(document.getElementById('ngBudget').value) || 1500;
      const likes = document.getElementById('ngLikes').value.split(',').map((s) => s.trim()).filter(Boolean);
      const dislikes = document.getElementById('ngDislikes').value.split(',').map((s) => s.trim()).filter(Boolean);
      const status = document.getElementById('ngSurveyStatus');
      try {
        await post('/survey/start', { group_id: group.id, member_name, budget_max, likes, dislikes });
        status.textContent = `✓ Saved preferences for ${member_name}`;
      } catch (e) { status.textContent = `Failed: ${e.message}`; }
    };

    document.getElementById('ngPreviewBtn').onclick = () => previewProposal();
    document.getElementById('ngProposeBtn').onclick = () => runNegotiation();
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
      const p = await get(`/negotiate/preview/${encodeURIComponent(destId)}?group_id=${encodeURIComponent(group.id)}`);
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
        </div>`).join('');
    } catch (e) {
      status.textContent = `Failed: ${e.message}`;
    }
  }

  return { open: () => { modal.classList.add('open'); render(); } };
}
