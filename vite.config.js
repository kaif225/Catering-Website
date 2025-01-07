import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-static-files',
      closeBundle() {
        const routes = [
          '/',
          '/event-planning-services/',
          '/about-rukn-al-dyafa/',
          '/luxury-hospitality-services/',
          '/hospitality-services-memories/',
          '/checkout/'
        ];

        // Get the output directory
        const outputDir = path.resolve(__dirname, 'dist');

        // Create directories for each route
        routes.forEach(route => {
          if (route === '/') return; // Skip root path
          const routePath = path.join(outputDir, route);
          if (!fs.existsSync(routePath)) {
            fs.mkdirSync(routePath, { recursive: true });
          }
          // Copy index.html to each route directory
          fs.copyFileSync(
            path.join(outputDir, 'index.html'),
            path.join(routePath, 'index.html')
          );
        });
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    },
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    }
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: false
    }
  }
})
