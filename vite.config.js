import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        'event-planning-services': path.resolve(__dirname, 'index.html'),
        'about-rukn-al-dyafa': path.resolve(__dirname, 'index.html'),
        'luxury-hospitality-services': path.resolve(__dirname, 'index.html'),
        'hospitality-services-memories': path.resolve(__dirname, 'index.html'),
        'checkout': path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        dir: 'dist',
        entryFileNames: '[name]/index.js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
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
