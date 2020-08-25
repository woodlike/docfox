module.exports = {
  ...require('../../.eslintrc.js'),
  extends: ['plugin:mdx/recommended'],
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'prettier/prettier': [
          2,
          {
            parser: 'markdown',
          },
        ],
      },
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides'],
    },
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'none', ignoreRestSiblings: false },
    ],
  },
};
