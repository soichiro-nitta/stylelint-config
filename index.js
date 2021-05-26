// var OFF = 'off'
// var WARN = 'warn'
// var ERROR = 'error'

module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  ignoreFiles: ['/node_modules', '/.next', '*.*', '!*.css'],
  plugins: ['stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'no-descending-specificity': null,
  },
}
