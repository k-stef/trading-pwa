import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte"; // Import the named export
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/trading-pwa/",
  plugins: [
    svelte({
      compilerOptions: {
        compatibility: {
          componentApi: 4
        }
      }
    }), // Ensure this is the correct import
    VitePWA({
      registerType: "autoUpdate",
      filename: "service-worker.js",
      manifest: {
        name: "Trading App",
        short_name: "Trading",
        start_url: ".",
        display: "standalone",
        background_color: "#222",
        theme_color: "#222",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
