import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-static-html',
      closeBundle() {
        const routes = [
          '',
          'event-planning-services',
          'about-rukn-al-dyafa',
          'luxury-hospitality-services',
          'hospitality-services-memories',
          'checkout'
        ];

        const outputDir = path.resolve(__dirname, 'dist');
        const indexContent = fs.readFileSync(path.join(outputDir, 'index.html'), 'utf-8');

        routes.forEach(route => {
          if (route === '') return;
          const routeDir = path.join(outputDir, route);
          fs.mkdirSync(routeDir, { recursive: true });
          fs.writeFileSync(path.join(routeDir, 'index.html'), indexContent);
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
  }
})
