import globals from 'globals';
import { globalIgnores } from 'eslint/config';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default tseslint.config([
  globalIgnores(['dist/', 'coverage/']),
  {
    files: ['**/*.{ts,mts,cts,js,mjs,cjs}'],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.config.{ts,mts,cjs,js,mjs,cjs}'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['__tests__/**/*.{ts,mts,cts,js,mjs,cjs}'],
    languageOptions: {
      globals: globals.vitest,
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
]);
