import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   assetsInclude: ['**/*.wasm'], // treat .wasm as asset
  server: {
    fs: {
      allow: ['.'] // allow project root
    }
  },
    resolve: {
    alias: {
      '@': '/src',
    },
  },
 
  plugins: [react()],
  
})
