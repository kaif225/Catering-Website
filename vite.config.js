import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-static-files',
      writeBundle() {
        // Ensure static files are copied to dist
        fs.copyFileSync(
          path.resolve(__dirname, 'public/robots.txt'),
          path.resolve(__dirname, 'dist/robots.txt')
        )
        fs.copyFileSync(
          path.resolve(__dirname, 'public/sitemap.xml'),
          path.resolve(__dirname, 'dist/sitemap.xml')
        )
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  base: '/',
  publicDir: 'public',
  server: {
    fs: {
      strict: false
    }
  }
})
