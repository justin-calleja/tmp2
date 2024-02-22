import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "client",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        // changeOrigin: true,
        // configure: (proxy, options) => {
        //   // proxy will be an instance of 'http-proxy'
        // },
      },
    },
  },
});
