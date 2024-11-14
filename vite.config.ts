import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Additional configuration for css
  },

  // For Vitest
  test: {
    environment: 'jsdom',

    // Route to setup and cleanup for component testing, run before each test
    setupFiles: './src/tests/setup.ts',

    //Ensure that vitest is included globally
    global: true
  }
})
