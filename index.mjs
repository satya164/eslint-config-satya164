import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import reactPlugin from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import vitestPlugin from '@vitest/eslint-plugin';
import * as tsResolver from 'eslint-import-resolver-typescript';
import importX from 'eslint-plugin-import-x';
import jestPlugin from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import hooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const recommended = tseslint.config(tseslint.configs.recommended, [
  js.configs.recommended,
  comments.recommended,
  importX.flatConfigs.recommended,
  promise.configs['flat/recommended'],
  prettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      'import-x/ignore': ['node_modules'],
    },

    rules: {
      'eqeqeq': ['error', 'smart'],
      'array-callback-return': 'error',
      'default-case': [
        'error',
        {
          commentPattern: '^no default$',
        },
      ],
      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-cond-assign': ['error', 'except-parens'],
      'no-constant-binary-expression': 'error',
      'no-constructor-return': 'error',
      'no-delete-var': 'error',
      'no-empty': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-label': 'error',
      'no-extra-semi': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implied-eval': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': [
        'error',
        {
          allowLoop: true,
          allowSwitch: false,
        },
      ],
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-str': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-octal': 'error',
      'no-promise-executor-return': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-self-compare': 'error',
      'no-shadow-restricted-names': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-unused-labels': 'error',
      'no-unused-private-class-members': 'error',
      'no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: false,
        },
      ],
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-rename': 'error',
      'no-with': 'error',
      'require-atomic-updates': 'error',
      'require-yield': 'error',
      'unicode-bom': 'error',

      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        {
          allowWholeFile: true,
        },
      ],
      '@eslint-community/eslint-comments/no-unused-disable': 'error',

      'import-x/export': 'error',
      'import-x/extensions': ['error', { js: 'never', json: 'always' }],
      'import-x/imports-first': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-commonjs': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-empty-named-blocks': 'error',
      'import-x/no-extraneous-dependencies': 'error',
      'import-x/no-unresolved': 'off',
      'import-x/no-self-import': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-relative-packages': 'error',

      '@typescript-eslint/no-require-import': 'off',

      'prettier/prettier': [
        'error',
        {
          quoteProps: 'consistent',
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
          useTabs: false,
        },
      ],
    },
  },
  {
    files: ['**/*.{js,jsx,cjs,mjs'],

    rules: {
      'import-x/no-cycle': 'error',
      'import-x/default': 'error',
      'import-x/named': 'error',
      'import-x/namespace': 'error',
      'import-x/no-named-as-default': 'error',
      'import-x/no-named-as-default-member': 'error',
      'import-x/no-deprecated': 'error',
    },
  },
  {
    files: ['**/*.{mjs,mts}'],

    rules: {
      'import-x/extensions': ['error', 'ignorePackages'],
    },
  },
  {
    ...importX.flatConfigs.typescript,

    files: ['**/*.{ts,tsx}'],

    settings: {
      'import-x/resolver': {
        name: 'typescript-resolver',
        resolver: tsResolver,
      },
    },

    rules: {
      ...importX.flatConfigs.typescript.rules,

      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
        },
      ],
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: true,
        },
      ],
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'none',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false,
        },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/unified-signatures': 'error',

      'default-case': 'off',
      'no-dupe-class-members': 'off',
      'no-redeclare': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
    },
  },
  {
    files: ['**/*.config.{ts,mts,js,cjs,mjs}', '**/.*rc.{ts,mts,js,cjs,mjs}'],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'import-x/no-default-export': 'off',

      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
    },
  },
  {
    files: ['**/*.config.{js,cjs}', '**/.*rc.{js,cjs}'],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'import-x/no-commonjs': 'off',
    },
  },
]);

export const react = tseslint.config(
  hooks.configs['recommended-latest'],
  reactPlugin.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      '@eslint-react/ensure-forward-ref-using-ref': 'error',
      '@eslint-react/jsx-key-before-spread': 'error',
      '@eslint-react/naming-convention/component-name': 'error',
      '@eslint-react/naming-convention/context-name': 'off',
      '@eslint-react/naming-convention/filename-extension': [
        'error',
        {
          allow: 'always',
        },
      ],
      '@eslint-react/no-array-index-key': 'error',
      '@eslint-react/no-children-count': 'off',
      '@eslint-react/no-children-for-each': 'off',
      '@eslint-react/no-children-map': 'off',
      '@eslint-react/no-children-only': 'off',
      '@eslint-react/no-children-to-array': 'off',
      '@eslint-react/no-clone-element': 'off',
      '@eslint-react/no-comment-textnodes': 'error',
      '@eslint-react/no-context-provider': 'off',
      '@eslint-react/no-create-ref': 'off',
      '@eslint-react/no-default-props': 'off',
      '@eslint-react/no-forward-ref': 'off',
      '@eslint-react/no-implicit-key': 'error',
      '@eslint-react/no-missing-component-display-name': 'error',
      '@eslint-react/no-nested-components': 'error',
      '@eslint-react/no-set-state-in-component-did-mount': 'error',
      '@eslint-react/no-set-state-in-component-did-update': 'error',
      '@eslint-react/no-set-state-in-component-will-update': 'error',
      '@eslint-react/no-unsafe-component-will-mount': 'error',
      '@eslint-react/no-unsafe-component-will-receive-props': 'error',
      '@eslint-react/no-unsafe-component-will-update': 'error',
      '@eslint-react/no-unused-class-component-members': 'error',
      '@eslint-react/no-unused-state': 'error',
      '@eslint-react/no-use-context': 'off',
      '@eslint-react/no-useless-fragment': 'off',

      '@eslint-react/dom/no-children-in-void-dom-elements': 'error',
      '@eslint-react/dom/no-dangerously-set-innerhtml': 'error',
      '@eslint-react/dom/no-dangerously-set-innerhtml-with-children': 'error',
      '@eslint-react/dom/no-find-dom-node': 'error',
      '@eslint-react/dom/no-missing-button-type': 'error',
      '@eslint-react/dom/no-namespace': 'error',
      '@eslint-react/dom/no-render-return-value': 'error',
      '@eslint-react/dom/no-script-url': 'error',
      '@eslint-react/dom/no-unsafe-iframe-sandbox': 'error',

      '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks':
        'error',
      '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'error',
      '@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect':
        'error',
      '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization': 'error',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  }
);

export const typechecked = tseslint.config(
  tseslint.configs.strictTypeCheckedOnly,
  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      parserOptions: {
        project: true,
      },
    },

    rules: {
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',
      '@typescript-eslint/no-unsafe-type-assertion': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: 'only-allowed-literals',
        },
      ],
    },
  }
);

export const vitest = tseslint.config(vitestPlugin.configs.recommended, {
  files: ['**/*.{spec,test}.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],

  rules: {
    'vitest/consistent-test-it': ['error', { fn: 'test' }],
    'vitest/expect-expect': 'error',
    'vitest/no-disabled-tests': 'error',
    'vitest/no-duplicate-hooks': 'error',
    'vitest/no-test-prefixes': 'error',
    'vitest/no-test-return-statement': 'error',
    'vitest/prefer-to-be': 'error',
    'vitest/prefer-todo': 'error',
    'vitest/require-to-throw-message': 'error',
  },
});

export const jest = tseslint.config(jestPlugin.configs['flat/recommended'], {
  files: ['**/*.{spec,test}.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],

  languageOptions: {
    globals: {
      ...globals.jest,
      ...jestPlugin.environments.globals.globals,
    },
  },

  rules: {
    ...jestPlugin.configs['flat/recommended'].rules,

    'import-x/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],

    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-to-be': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-to-throw-message': 'error',
  },
});
