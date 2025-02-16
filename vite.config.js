import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Определяем флаги функций
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        },
      },
    }),
  ],
});