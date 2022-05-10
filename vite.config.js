import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: 'http://localhost:3000/',
    proxy: {
      "/request": {
        ws: true,
        changeOrigin: true,
        target: "https://www.david-martin-webdev.com",
        secure: false,
        rewrite: (path) => path.replace(/^\/request/, ""),
      }
    }
  }
})
