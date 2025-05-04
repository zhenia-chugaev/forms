import { defineConfig } from 'vitest/config';
import path from 'node:path/posix';

const config = defineConfig({
  test: {
    globals: true,
    coverage: {
      include: ['src/**'],
      reporter: ['text', 'lcov'],
    },
  },
  resolve: {
    alias: {
      '@/types': path.join(__dirname, './types/'),
      '@/utils': path.join(__dirname, './utils/'),
      '@/': path.join(__dirname, './src/'),
    },
  },
});

export default config;
