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
        if (!fs.existsSync('dist')) {
          fs.mkdirSync('dist');
        }

        // Generate HTML files for each route
        routes.forEach(route => {
          const routePath = route === '/' ? '/index' : route;
          const filePath = `dist${routePath}.html`;
          const dirPath = path.dirname(filePath);
          
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
          }
          // Copy index.html content for each route
          const indexContent = fs.readFileSync('dist/index.html', 'utf-8');
          fs.writeFileSync(filePath, indexContent);
        });
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    },
    base: '/',
    publicDir: 'public',
    minify: true,
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: false
    }
  }
})
