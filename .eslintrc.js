module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    // Relaxed TypeScript rules since it's only used for data fetching
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  ignorePatterns: [
    'node_modules/**',
    'dist/**',
    '.storybook/**',
    '*.config.js',
    '*.config.ts',
  ],
  overrides: [
    {
      // Apply stricter rules only to TypeScript files
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'warn',
      },
    },
    {
      // Normal rules for JavaScript files
      files: ['*.js', '*.vue'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
