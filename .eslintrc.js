module.exports = {
    extends: ['eslint:recommended', 'google'],
    env: {
      es6: true,
      browser: true,
      node: true
    },
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        modules: true
      }
    },
}
