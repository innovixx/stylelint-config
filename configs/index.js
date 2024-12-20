module.exports = {
  extends: [
    './base',
  ].map(require.resolve),
  rules: {},
  plugins: [
    "stylelint-scss",
    "stylelint-order"
  ],
};
