import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactNodeKey from "react-node-key/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), reactNodeKey()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
    },
  },
});
