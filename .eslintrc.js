module.exports = {
  parser: '@typescript-eslint/parser',
  'plugins': [
    'react-hooks'
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  'rules': {
    'no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/explicit-module-boundary-types': [
      'off', { allowArgumentsExplicitlyTypedAsAny: false, allowHigherOrderFunctions: false }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowExpressions: true }
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
