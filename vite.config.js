import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'handle-static-files',
      writeBundle() {
        // Ensure static files are copied to dist
        const files = ['robots.txt', 'sitemap.xml'];
        files.forEach(file => {
          const srcPath = path.resolve(__dirname, `public/${file}`);
          const destPath = path.resolve(__dirname, `dist/${file}`);
          if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
          }
        });
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
  base: '/',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: false
    }
  }
})
