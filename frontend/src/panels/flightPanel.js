// Pure render helpers for the "Live flights + ML price intelligence" section of
// the detail panel. They return HTML strings; the detail panel injects them.
// A tiny inline-SVG sparkline avoids any charting dependency.

function sparkline(values, w = 260, h = 60, color = 'var(--brass)') {
  if (!values.length) return '';
  const min = Math.min(...values), max = Math.max(...values);
  const span = max - min || 1;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / span) * (h - 8) - 4;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const minIdx = values.indexOf(min);
  const cx = (minIdx / (values.length - 1)) * w;
  const cy = h - ((min - min) / span) * (h - 8) - 4;
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none">
    <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2"/>
    <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="3.5" fill="var(--pine)"/>
  </svg>`;
}

export function renderFlights(data) {
  const src = data.source === 'amadeus' ? 'live · Amadeus' : 'demo data';
  const rows = data.offers.slice(0, 4).map((o) => `
    <div class="flightRow">
      <span class="fAir">${o.airline}</span>
      <span class="fMeta">${o.stops === 0 ? 'nonstop' : o.stops + ' stop'} · ${o.duration}</span>
      <span class="fPrice">$${Math.round(o.price_usd)}</span>
    </div>`).join('');
  return `<div class="sectionTitle">Flights from ${data.origin} <span class="srcTag">${src}</span></div>${rows}`;
}

export function renderPrediction(p) {
  const badgeClass = p.recommendation.startsWith('BOOK') ? 'now' : p.recommendation.startsWith('WAIT') ? 'wait' : 'soon';
  const modelTag = p.model === 'gradient-boosting' ? 'ML · GradientBoosting' : 'heuristic';
  const curve = p.curve.map((c) => c.predicted_price_usd);
  return `
    <div class="sectionTitle">Price Intelligence <span class="srcTag">${modelTag}</span></div>
    <div class="predictBadge ${badgeClass}">${p.recommendation}</div>
    <div class="predictStats">
      <div><b>$${Math.round(p.predicted_price_now)}</b><span>now (${p.current_days_out}d out)</span></div>
      <div><b>$${Math.round(p.cheapest_price)}</b><span>low @ ${p.cheapest_days_out}d out</span></div>
      <div><b>${p.expected_drop_pct}%</b><span>expected drop</span></div>
    </div>
    <div class="chartLabel">Price vs. days before departure</div>
    ${sparkline(curve)}
  `;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function renderBestTime(bt) {
  const best = bt.best_month;
  const bars = bt.months.map((m) => {
    const hgt = Math.max(4, m.overall_score);
    const isBest = m.month === best.month;
    return `<div class="btBar ${isBest ? 'best' : ''}" style="height:${hgt}%" title="${m.month_name}: score ${m.overall_score}, $${Math.round(m.price)}, comfort ${m.comfort_score}"></div>`;
  }).join('');
  return `
    <div class="sectionTitle">Best Time to Travel <span class="srcTag">price + weather</span></div>
    <div class="bestPick">🌤️ <b>${MONTHS[best.month - 1]}</b> — cheap tickets ($${Math.round(best.price)}) &amp; great weather (comfort ${best.comfort_score})</div>
    <div class="btChart">${bars}</div>
    <div class="btAxis">${MONTHS.map((m) => `<span>${m[0]}</span>`).join('')}</div>
  `;
}
