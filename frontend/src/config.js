// Frontend runtime config, read from Vite env vars (VITE_*).
export const GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
export const API_BASE = import.meta.env.VITE_API_BASE || ''; // '' -> vite proxy /api

// A real satellite/day Earth texture for the 3D globe (equirectangular).
// Served by the three.js CDN; if it fails to load we fall back to a flat color.
export const EARTH_TEXTURE_URL =
  'https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg';
export const EARTH_BUMP_URL =
  'https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png';

export const NYC = { name: 'New York (JFK/EWR)', lat: 40.7128, lng: -74.006 };
