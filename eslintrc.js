module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    // add custom rules here
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _components: './src/components',
          // add other aliases here
        },
      },
    },
  },
};
