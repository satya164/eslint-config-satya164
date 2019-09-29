# eslint-config-satya164

This is my personal ESLint config. I try to avoid rules which are purely stylistic and based on personal opinions. I'm tryin to keep it non-intrusive and aimed towards catching actual errors.

## Features

The config includes these plugins by default:

- [babel](https://github.com/babel/eslint-plugin-babel)
- [eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [flowtype](https://github.com/gajus/eslint-plugin-flowtype)
- [import](https://github.com/benmosher/eslint-plugin-import/issues)
- [jest](https://github.com/jest-community/eslint-plugin-jest/issues)
- [prettier](https://github.com/prettier/eslint-plugin-prettier)
- [react](https://github.com/yannickcr/eslint-plugin-react/issues)
- [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [react-native](https://github.com/intellicode/eslint-plugin-react-native)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)

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

Now extend the config in `.eslintrc.json`:

```json
{
  "extends": "satya164"
}
```

To lint your files, you can add the following script to your `package.json`:

```json
"scripts": {
  "lint": "eslint --ext '.js,.ts,.tsx' ."
}
```

Happy linting 🎉
