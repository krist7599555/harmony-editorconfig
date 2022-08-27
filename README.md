# @krist7599555/harmony-editorconfig

is inspire from [harmony](https://github.com/haydenbleasel/harmony) to centralize config for `eslint`, `prettier`, `taliwindcss`, `svelte`

```jsonc
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSaveMode": "file",
  "prettier.documentSelectors": ["**/*.svelte"],
  "editor.codeActionsOnSave": {
    "source.fixAll.esbenp.prettier-vscode": true,
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

```javascript
// .eslintrc.cjs
module.exports = {
  ...require('./node_modules/@krist7599555/harmony-editorconfig/.eslintrc.cjs'),
};
```

```javascript
// .prettierrc.cjs
module.exports = {
  ...require('./node_modules/@krist7599555/harmony-editorconfig/.prettierrc.cjs'),
};
```
```javascript
// postcss.config.cjs
module.exports = {
  ...require('./node_modules/@krist7599555/harmony-editorconfig/postcss.config.cjs'),
};
```
