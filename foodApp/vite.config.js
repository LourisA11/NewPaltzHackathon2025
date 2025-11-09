import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'



// https://vite.dev/config/
export default defineConfig({
  server: {
    hmr: {
      overlay: false
    }
    ,
    proxy: {
      // Proxy /posts to backend running on port 5000
      '/posts': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/posts/, '/posts')
      },
      // Proxy other API prefixes if needed
      '/users': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
