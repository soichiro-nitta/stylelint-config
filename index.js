// var OFF = 'off'
// var WARN = 'warn'
// var ERROR = 'error'

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
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
  },
}
