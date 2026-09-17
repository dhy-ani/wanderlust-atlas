// Pure render helpers for the "Live flights + best time + budget trade-off"
// section of the detail panel. Every renderer handles three states: real data
// (status "ok"), not configured (no TAVILY_API_KEY/OPENROUTER_API_KEY), and
// error (search ran but found nothing usable) — there is no synthetic filler.

function sourcesLine(sources) {
  if (!sources || !sources.length) return '';
  return `<div class="srcTag">sourced from ${sources.length} live web result${sources.length > 1 ? 's' : ''}</div>`;
}

function unavailableBlock(title, data) {
  const msg = data.status === 'not_configured'
    ? 'Live web search isn’t configured for this deployment.'
    : (data.message || 'No real data available right now.');
  return `<div class="sectionTitle">${title} <span class="srcTag">not available</span></div>
    <div class="loading err">${msg}</div>`;
}

export function renderFlights(data) {
  if (data.status !== 'ok') return unavailableBlock('Flights from ' + (data.origin || 'JFK'), data);
  const b = data.budget_option || {};
  const l = data.luxury_option || {};
  const row = (label, o) => `
    <div class="flightRow">
      <span class="fAir">${label}</span>
      <span class="fMeta">${o.airline_or_source || ''}${o.notes ? ' · ' + o.notes : ''}</span>
      <span class="fPrice">${o.price_usd != null ? '$' + Math.round(o.price_usd) : 'n/a'}</span>
    </div>`;
  return `<div class="sectionTitle">Flights from ${data.origin} <span class="srcTag">web research</span></div>
    ${row('Budget', b)}${row('Luxury', l)}
    ${data.summary ? `<div class="bestPick">${data.summary}</div>` : ''}
    ${sourcesLine(data.sources)}`;
}

export function renderBestTime(bt) {
  if (bt.status !== 'ok') return unavailableBlock('Best Time to Travel', bt);
  const months = (bt.best_months || []).join(', ') || 'not specified';
  return `
    <div class="sectionTitle">Best Time to Travel <span class="srcTag">web research</span></div>
    <div class="bestPick"><b>${months}</b></div>
    <div class="loading">${bt.narrative || ''}</div>
    ${bt.avoid_months?.length ? `<div class="loading err">Consider avoiding: ${bt.avoid_months.join(', ')}</div>` : ''}
    ${sourcesLine(bt.sources)}`;
}

export function renderTradeoff(tr, budgetUsd) {
  if (tr.status !== 'ok') return unavailableBlock('Budget vs. luxury', tr);
  const tier = (label, t) => `
    <div class="predictStats"><div>
      <b>${t.est_total_usd != null ? '$' + Math.round(t.est_total_usd) : 'n/a'}</b>
      <span>${label}</span>
    </div></div>
    <div class="loading">${t.flight_style || ''}${t.flight_style && t.stay_style ? ' · ' : ''}${t.stay_style || ''}${t.notes ? ' — ' + t.notes : ''}</div>`;
  const fitClass = tr.fits_budget === 'luxury' ? 'now' : tr.fits_budget === 'neither' ? 'wait' : 'soon';
  return `
    <div class="sectionTitle">Budget vs. Luxury <span class="srcTag">web research, $${Math.round(budgetUsd)} budget</span></div>
    <div class="predictBadge ${fitClass}">Fits: ${tr.fits_budget || 'unknown'}</div>
    ${tier('budget tier', tr.budget_tier || {})}
    ${tier('luxury tier', tr.luxury_tier || {})}
    ${tr.recommendation ? `<div class="bestPick">${tr.recommendation}</div>` : ''}
    ${sourcesLine(tr.sources)}`;
}
