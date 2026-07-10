import { configs } from '@eslint/js';
import { configs as _configs, parser as _parser } from 'typescript-eslint';
import { configs as __configs } from 'eslint-plugin-playwright';

export default [
  {
    ignores: ['node_modules', 'dist', 'reports', '.husky'],
  },
  configs.recommended,
  ..._configs.recommended,
  __configs['flat/recommended'],
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: _parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-types': 'off',
      'playwright/no-wait-for-timeout': 'warn',
    },
  },
];
