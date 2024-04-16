import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@shared": "/src/components/shared",
      "@movies": "/src/components/movies",
      "@tvshows": "/src/components/tvshows",
      "@user": "/src/components/user",
      "@buttons": "/src/components/buttons",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@utils": "/src/utils",
      "@data": "/src/data",
      "@css": "/src/css",
    },
  },
});
