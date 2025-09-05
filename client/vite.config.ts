import { defineConfig } from 'vite'
import  react  from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.wasm'],
  server: {
    fs: {
      allow: ['.']
    }
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [react()],
})
