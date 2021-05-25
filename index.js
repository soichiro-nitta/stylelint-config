// var OFF = 'off'
var WARN = 'warn'
// var ERROR = 'error'

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['/node_modules', '/.next', '*.*', '!*.css'],
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
    'no-descending-specificity': WARN,
  },
}
