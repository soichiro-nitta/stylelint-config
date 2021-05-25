// var OFF = 'off'
// var WARN = 'warn'
// var ERROR = 'error'

module.exports = {
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
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
  },
}
