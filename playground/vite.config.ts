import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // 将 peach-ui 指向源码路径，避免每次都构建
      'peach-ui': path.resolve(__dirname, '../packages/components')
    }
  },
  server: {
    port: 5173,
    open: true
  }
})