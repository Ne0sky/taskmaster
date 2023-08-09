import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    
    proxy: {
        '/api': {
            target: 'https://taskmaster-api-bk5t.onrender.com/',
            changeOrigin: true,
            secure: false
        }
    }
    
},
  
  plugins: [react()],
})
