module.exports = {
  root: true,

  env: { node: true },
  'extends': [
    'plugin:vue/essential',
    'thefriendlybeasts/lib/vue-cli',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  parserOptions: { parser: 'babel-eslint' },
};
