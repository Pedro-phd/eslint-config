module.exports = {
  extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended'],
  rules: {
    'prettier-vue/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        vueIndentScriptAndStyle: true,
        tabWidth: 2,
      },
    ],
  },
}