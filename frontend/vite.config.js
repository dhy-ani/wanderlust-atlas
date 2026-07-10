import { defineConfig } from 'vite';

// Dev server proxies /api to the FastAPI backend so the frontend can call
// relative URLs and avoid CORS entirely during development.
export default defineConfig({
  // On GitHub Pages the app is served from /<repo>/, so assets need that prefix.
  // The Pages workflow sets VITE_BASE="/<repo>/"; locally it defaults to "/".
  base: process.env.VITE_BASE || '/',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
