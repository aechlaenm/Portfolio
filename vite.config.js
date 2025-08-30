import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: GitHub Pages base set to /Portfolio/
// If your repo name changes, update this to match.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})
