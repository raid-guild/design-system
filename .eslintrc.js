module.exports = {
  root: true,
  plugins: ['import', 'prettier', '@typescript-eslint'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    jsx: true,
  },
  ignorePatterns: ['bin', 'dist', 'src/components/icons/*.tsx'],
  rules: {
    // GENERAL
    'no-use-before-define': 'off',
    'no-param-reassign': [2, { props: false }],
    // REACT
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function'],
      },
    ],
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    // IMPORT
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    // USE .PRETTIERRC FOR SETTINGS
    'prettier/prettier': ['error'],
    // TYPESCRIPT
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        path: ['src'],
        alwaysTryTypes: true,
      },
    },
  },
};
