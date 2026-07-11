// Pure text helpers — kept dependency-free so they're easy to unit test
// (see frontend/test/text.test.js) and mutation-test with Stryker.

// Mirrors the backend's app/services/places_client.py::_english_only — a safety
// net for geocoding results that still append a local-script name after the
// English one (e.g. "Marrakech ⵎⵕⵕⴰⴽⵯⵛ مراكش") even after requesting
// accept-language=en. Keeps only the leading Latin-script run.
const LATIN_PREFIX = /^[A-Za-z0-9À-ÖØ-öø-ÿ0-9 '’\-,.()&/]+/;

export function englishOnly(name) {
  if (!name) return name;
  const match = name.match(LATIN_PREFIX);
  const cleaned = (match ? match[0].trim() : name).replace(/[\s,-]+$/, '');
  return cleaned || name; // never return an empty string
}
