import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": path.resolve(__dirname, "/packages/components"),
    },
  },
  build: {
    lib: {
      entry: "packages/components/index.ts",
      name: "PeachUI",
      fileName: (format) => `peach-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
