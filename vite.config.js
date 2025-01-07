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

        // Ensure the output directory exists
        const outputDir = path.resolve(__dirname, 'dist');
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        // Copy index.html for each route
        const indexContent = fs.readFileSync(path.join(outputDir, 'index.html'), 'utf-8');
        routes.forEach(route => {
          const routePath = path.join(outputDir, route === '/' ? '' : route);
          if (!fs.existsSync(routePath)) {
            fs.mkdirSync(routePath, { recursive: true });
          }
          fs.writeFileSync(path.join(routePath, 'index.html'), indexContent);
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
    // Enable source maps for better debugging
    sourcemap: true,
    // Minify output
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
