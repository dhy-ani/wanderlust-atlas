// Pure, dependency-free budget/bucket-list math — kept separate from the DOM-heavy
// panel modules so it's straightforward to unit-test (see frontend/test/budget.test.js).

/** Rescale a trip budget to a new day count at the same $/day rate, so a 3-day
 * trip stretched to 5 days keeps its per-day cost instead of silently
 * over/under-budgeting. Days are clamped to [1, 60]. */
export function rescaleBudget(budget, oldDays, newDays) {
  const clampedDays = Math.max(1, Math.min(60, Math.round(newDays) || oldDays));
  const perDay = oldDays > 0 ? budget / oldDays : 0;
  return { days: clampedDays, budget: Math.round(perDay * clampedDays) };
}

/** Total cost across bucket items, scaled by traveler count. */
export function grandTotal(items, people) {
  const travelers = Math.max(1, people || 1);
  return items.reduce((sum, item) => sum + item.budget, 0) * travelers;
}

/** Total travel days across bucket items (not scaled by traveler count — days
 * don't multiply the way cost does). */
export function totalDays(items) {
  return items.reduce((sum, item) => sum + item.days, 0);
}

/** Groups bucket items by year, sorted ascending, each with its own subtotal. */
export function groupByYear(items, people) {
  const travelers = Math.max(1, people || 1);
  const byYear = {};
  items.forEach((item, idx) => {
    const year = item.year;
    (byYear[year] ||= { year, items: [], subtotal: 0 }).items.push({ ...item, _idx: idx });
    byYear[year].subtotal += item.budget * travelers;
  });
  return Object.values(byYear).sort((a, b) => a.year - b.year);
}
