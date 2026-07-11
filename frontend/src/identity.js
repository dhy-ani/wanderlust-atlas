// Lightweight "who's using this browser" identity — no login system, just a name
// the user picks once, persisted in localStorage, and attached to anything they add
// (custom destinations, bucket-list entries) so multi-person households/trip-planning
// sessions can see who added what. Distinct from the group-planning Digital Twins
// (agents/*), which have their own `member_name` concept for negotiation.
const LS_KEY = 'wa_user_name';

export function getCurrentUser() {
  return localStorage.getItem(LS_KEY) || null;
}

export function setCurrentUser(name) {
  const trimmed = (name || '').trim();
  if (!trimmed) return getCurrentUser();
  localStorage.setItem(LS_KEY, trimmed);
  return trimmed;
}

// Ensures a name exists, prompting once if not. Returns the resolved name
// ("Guest" if the user dismisses the prompt) — every caller gets a usable value.
export function ensureCurrentUser() {
  let name = getCurrentUser();
  if (!name) {
    name = setCurrentUser(prompt('What should we call you? (shown on things you add)', '') || 'Guest');
  }
  return name;
}
