import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-static-files',
      writeBundle() {
        const routes = [
          '/',
          '/event-planning-services/',
          '/about-rukn-al-dyafa/',
          '/luxury-hospitality-services/',
          '/hospitality-services-memories/',
          '/checkout/'
        ];

        // Copy static files
        ['robots.txt', 'sitemap.xml'].forEach(file => {
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
