import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/JAWAA/',
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT || '5175'),
    strictPort: true,
  },
})
