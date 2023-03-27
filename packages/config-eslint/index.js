/** @type {import("eslint").Linter.Config} */

module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'testing-library', '@tanstack/query', 'jest-dom', 'jest', 'import'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    // 'plugin:no-array-reduce/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:storybook/recommended',
  ],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    '@typescript-eslint/no-unsafe-return': 'off',
    'prefer-template': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'spaced-comment': 'error',
    'id-length': ['error', { min: 2, properties: 'never' }],
    'typescript-eslint/prefer-ts-expect-error': 'off',

    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'import/no-default-export': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/await-thenable': 'off',
    'testing-library/no-node-access': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-throw-literal': 'off',

    'jsx-a11y/anchor-is-valid': ['off'],

    'jest/valid-title': [
      'error',
      {
        mustMatch: {
          it: [/should.*when/u.source, "Test title must include 'should' and 'when'"],
        },
      },
    ],

    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },

  // overrides: [
  //   {
  //     files: ['ProcessEnv.d.ts'],
  //     rules: {
  //       '@typescript-eslint/consistent-type-definitions': 'off',
  //     },
  //   },
  //   {
  //     files: ['src/**/*.stories.*', 'src/pages/**/*'],
  //     rules: {
  //       'import/no-default-export': 'off',
  //     },
  //   },
  // ],

  // ESlint default behaviour ignores file/folders starting with "." - https://github.com/eslint/eslint/issues/10341
  ignorePatterns: [
    '!.*',
    'node_modules',
    '.next',
    '.turbo',
    'dist',
    'compiled',
    'build-next-static',
    'build-storybook-static',
    // Files bellow are not git ignored. Eslint fix in the making https://github.com/eslint/eslint/issues/15010
    'VersionInfo.ts',
    'next-env.d.ts',
    '.umi',
    '.umi-test',
    '.umi-production',
    'voldemort-web-static',
    '/lambda/',
    '/scripts',
    '/config',
    '.history',
    'public',
    'mock',
    '.umi-test',
    'coverage',
    'global.tsx',
  ],

  settings: {
    typescript: {},
    'import/resolver': {
      typescript: {
        project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
