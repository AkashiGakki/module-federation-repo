import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "@base",
      filename: "bundle.js",
      remotes: {
        "@app-vue": {
          external: "http://localhost:5175/assets/bundle.js",
          format: 'esm',
          from: 'vite'
        },
      },
      shared: ["vue", "vue-router", "element-plus", "vuex"]
    }),
  ]
})
