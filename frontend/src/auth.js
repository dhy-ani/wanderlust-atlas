// Real account auth: signup/login against the backend, JWT stored in
// localStorage, attached to every authenticated request. Replaces the old
// "type any name" identity.js flow for anything group-related (groups,
// wishlist, surveys, negotiation) — those endpoints are all sign-in-gated now.
import { API_BASE } from './config.js';

const TOKEN_KEY = 'wa_auth_token';
const USER_KEY = 'wa_auth_user';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch { return null; }
}

export function isSignedIn() {
  return !!getToken();
}

export function signOut() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

function _store(data) {
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(USER_KEY, JSON.stringify(data.user));
  return data.user;
}

export async function signup(email, password, name) {
  const res = await fetch(`${API_BASE}/api/auth/signup`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || `signup failed (${res.status})`);
  return _store(data);
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || `login failed (${res.status})`);
  return _store(data);
}

// Auth headers for hand-rolled fetch calls (group/wishlist/survey/negotiate).
export function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}
