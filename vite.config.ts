import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks")}`,
      helpers: path.resolve(__dirname, "./src/helpers"),
      types: `${path.resolve(__dirname, "./src/types")}`,
      assets: `${path.resolve(__dirname, "./src/assets")}`,
      api: `${path.resolve(__dirname, "./src/api")}`,
    }
  }
})
