import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

import htmlTransform from './plugins/htmlTransform';

export default defineConfig(({ mode }) => {
  const envs = loadEnv(mode, process.cwd());

  return {
    plugins: [vue(), htmlTransform(envs)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
