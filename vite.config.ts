import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  root: "./",
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "404.html"),
      },
    },
  },
  publicDir: "/public/assets",
})
