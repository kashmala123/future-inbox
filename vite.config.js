import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  plugins: [ basicSsl() ],
  server: {
    open: '/index.html' // <-- ADD THIS SERVER SECTION
  }
})