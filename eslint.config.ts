import globals from "globals";
import { globalIgnores } from 'eslint/config'
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config([
  globalIgnores(["dist/"]),
  {files: ["**/*.{ts,mts,cts,js,mjs,cjs}"]},
  {languageOptions: {
    globals: globals.node,
    parserOptions: {
      projectService: { allowDefaultProject: ["eslint.config.ts"] },
      tsconfigRootDir: import.meta.dirname },
    }
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
]);