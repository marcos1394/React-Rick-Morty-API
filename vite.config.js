import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://marcos1394.github.io/React-Rick-Morty-Api",
  plugins: [react()]
})
