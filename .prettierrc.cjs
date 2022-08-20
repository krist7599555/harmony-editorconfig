const path = require('node:path');

module.exports = {
  arrowParens: 'avoid',
  jsonRecursiveSort: true,
  overrides: [
    { files: '*.svelte', options: { parser: 'svelte' } },
    {
      files: '*.ts',
      options: {
        parser: 'babel-ts',
      },
    },
  ],
  plugins: [
    path.resolve('./node_modules/prettier-plugin-packagejson'),
    path.resolve('./node_modules/prettier-plugin-svelte'),
    path.resolve('./node_modules/prettier-plugin-tailwindcss'),
  ],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: false,
  svelteSortOrder: 'options-scripts-markup-styles',
  svelteStrictMode: false,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
