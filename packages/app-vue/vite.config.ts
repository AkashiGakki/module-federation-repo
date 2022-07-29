import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: '@app-vue',
      filename: 'bundle.js',
      exposes: {
        './Button': './src/components/Button.vue',
        './Footer': './src/components/Footer.vue',
      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
