import { defineConfig } from 'vite';

// Dev server proxies /api to the FastAPI backend so the frontend can call
// relative URLs and avoid CORS entirely during development.
export default defineConfig({
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
