import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path for GitHub Pages deployment
  // If GITHUB_PAGES_BASE is not set, we use the repo name for production
  base: mode === 'production' 
    ? (process.env.GITHUB_PAGES_BASE || "/nuzl_al_shrgiah/") 
    : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
