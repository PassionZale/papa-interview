// vite.config.js
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// eslint-disable-next-line import/namespace
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    watch: {
      include: 'src/**',
      clearScreen: true
    },
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'PapaUI',
      fileName: 'papa-ui',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

  plugins: [vue()],
});
