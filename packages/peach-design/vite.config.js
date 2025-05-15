import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: [
        path.resolve(__dirname, "../components"),
        path.resolve(__dirname, "../theme"),
        path.resolve(__dirname, "./index.ts"),
      ],
      outputDir: path.resolve(__dirname, "dist/types"), // 放入 dist/types 而不是 dist 根目录
      insertTypesEntry: true,
      cleanVueFileName: true,
      rollupTypes: true, // ✅ 启用声明文件聚合（会生成 types/index.d.ts）
    }),
  ],
  resolve: {
    alias: {
      "peach-ui-components": path.resolve(
        __dirname,
        "../../packages/components"
      ),
      "peach-ui-theme": path.resolve(__dirname, "../../packages/theme"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./index.ts"),
      name: "PeachUI",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
