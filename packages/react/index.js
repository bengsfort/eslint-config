module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    '@bengsfort', // Make sure this is last!
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-expressions'],
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': [
      'error',
      {
        allow: 'as-needed',
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'jsx-expressions/strict-logical-expressions': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandLast: true,
      },
    ],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/no-unknown-property': ['error', { ignore: ['inert', 'fetchPriority'] }],
    "react/react-in-jsx-scope": "off",
  },
};
