const js = require('@eslint/js');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...require('globals').browser,
        ...require('globals').es2021,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
