import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-robots-txt',
      writeBundle() {
        // Ensure robots.txt is copied to dist
        fs.copyFileSync(
          path.resolve(__dirname, 'public/robots.txt'),
          path.resolve(__dirname, 'dist/robots.txt')
        )
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  base: './',
  publicDir: 'public'
})
