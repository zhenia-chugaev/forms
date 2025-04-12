import { defineConfig } from 'vitest/config';
import path from 'node:path';

const config = defineConfig({
  test: {
    globals: true,
    coverage: {
      include: ['src/**'],
    },
  },
  resolve: {
    alias: {
      '@/types': path.join(__dirname, './types/'),
      '@/': path.join(__dirname, './src/'),
    },
  },
});

export default config;
