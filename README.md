# eslint-config-satya164

This is my personal ESLint config. I try to avoid rules which are purely stylistic and based on personal opinions. I'm tryin to keep it non-intrusive and aimed towards catching actual errors.

## Features

The config includes these plugins by default:

- [eslint-comments](https://eslint-community.github.io/eslint-plugin-eslint-comments/)
- [import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [jest](https://github.com/jest-community/eslint-plugin-jest)
- [prettier](https://github.com/prettier/eslint-plugin-prettier)
- [promise](https://github.com/eslint-community/eslint-plugin-promise)
- [react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [react-hooks](https://reactjs.org/docs/hooks-rules.html)
- [react](https://github.com/Rel1cx/eslint-react)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

The config uses the `overrides` feature of ESLint to automatically adjust the config based on the filename. For example, typescript support is enabled for `.ts` and `.tsx` files, the `jest` environment is set for test files and more.

Prettier is used for formatting.

## Usage

First, install the required packages:

```sh
yarn add --dev prettier eslint eslint-config-satya164
```

If you're using TypeScript, also install the TypeScript compiler:

```sh
yarn add --dev typescript
```

Now use the config in your config file:

```js
// eslint.config.mjs
import satya164 from 'eslint-config-satya164';

export default [
  ...satya164,

  // Rest of your config
];
```

Using the config requires ESLint 9's [flat config format](https://eslint.org/docs/latest/use/configure/configuration-file).

To lint your files, you can add the following script to your `package.json`:

```json
"scripts": {
  "lint": "eslint \"**/*.{js,ts,tsx}\""
}
```

To show lint errors in your editor, you'll need to configure your editor. To configure [VSCode](https://code.visualstudio.com), add the following in `settings.json`:

```json
"eslint.validate": [
  {
    "language": "javascript",
    "autoFix": true
  },
  {
    "language": "javascriptreact",
    "autoFix": true
  },
  {
    "language": "typescript",
    "autoFix": true
  },
  {
    "language": "typescriptreact",
    "autoFix": true
  }
],
```

On Mac OS, you can open `settings.json` file from `Code` > `Preferences` > `Settings` or via the keyboard shortcut <kbd>⌘,</kbd>.

This config sets `autoFix` to `true` to automatically fix lint errors on save. You can set it to `false` if you don't want this behaviour.

Happy linting 🎉
