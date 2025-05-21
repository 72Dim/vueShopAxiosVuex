import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
   vue({
      template: {
         compilerOptions: {  // Параметры компилятора
            // isCustomElement: (tag) => tag.startsWith('router-')
            /* Эта опция конфигурации учитывается только
               при использовании полной сборки
               без трансформации <router-link> в тег <a>
               isCustomElement = tag => ['swiper-slide', 'another-tag', 'my-custom'].includes(tag)
            */
         }
      }
   }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
})
