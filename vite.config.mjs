import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "dist/client",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
    // Local development only: forward /api-proxy/* to the staging API from the dev server,
    // so the browser never makes a cross-origin request and CORS doesn't apply.
    proxy: {
      "/api-proxy": {
        target: "https://api.staging.coolcyclehubs.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-proxy/, ""),
      },
    },
  },
  plugins: [react()],
});