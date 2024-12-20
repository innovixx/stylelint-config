module.exports = {
  plugins: [
    'node',
  ],
  env: {
    node: true,
  },
  extends: [
    './rules/stylelint',
  ].map(require.resolve),
  rules: {},
};
