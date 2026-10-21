import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import reactPlugin from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import vitestPlugin from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';
import * as tsResolver from 'eslint-import-resolver-typescript';
import importX from 'eslint-plugin-import-x';
import jestPlugin from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const recommended = defineConfig(
  js.configs.recommended,
  comments.recommended,
  importX.flatConfigs.recommended,
  promise.configs['flat/recommended'],
  prettier,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },

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
      eqeqeq: ['error', 'smart'],
      radix: 'error',
      'accessor-pairs': 'error',
      'array-callback-return': 'error',
      'default-case': [
        'error',
        {
          commentPattern: '^no default$',
        },
      ],
      'default-case-last': 'error',
      'grouped-accessor-pairs': 'error',
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
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-octal': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-unassigned-vars': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
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
      'no-useless-assignment': 'error',
      'no-useless-escape': 'error',
      'no-useless-rename': 'error',
      'no-with': 'error',
      'prefer-promise-reject-errors': 'error',
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
      'import-x/namespace': ['error', { allowComputed: true }],
      'import-x/no-absolute-path': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-commonjs': 'error',
      'import-x/no-cycle': 'error',
      'import-x/no-deprecated': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-empty-named-blocks': 'error',
      'import-x/no-extraneous-dependencies': 'error',
      'import-x/no-import-module-exports': 'error',
      'import-x/no-named-as-default-member': 'error',
      'import-x/no-named-as-default': 'error',
      'import-x/no-relative-packages': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-unresolved': 'off',
      'import-x/no-useless-path-segments': 'error',

      'promise/no-callback-in-promise': 'error',
      'promise/no-multiple-resolved': 'error',
      'promise/no-nesting': 'error',
      'promise/no-promise-in-callback': 'error',
      'promise/no-return-in-finally': 'error',
      'promise/spec-only': 'error',
      'promise/valid-params': 'error',

      '@typescript-eslint/no-require-import': 'off',

      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.{js,jsx,cjs,mjs}'],

    rules: {
      'no-unused-expressions': 'error',

      'import-x/default': 'error',
      'import-x/named': 'error',
    },
  },
  {
    files: ['**/*.{mjs,mts}'],

    rules: {
      'import-x/extensions': ['error', 'ignorePackages'],
    },
  },
  {
    files: ['**/*.{ts,mts,tsx}'],

    extends: [tseslint.configs.recommended, importX.flatConfigs.typescript],

    settings: {
      'import-x/resolver': {
        name: 'typescript-resolver',
        resolver: tsResolver,
      },
    },

    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
        },
      ],
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: true,
        },
      ],
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'none',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
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
  }
);

export const react = defineConfig(reactPlugin.configs.recommended, {
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    '@eslint-react/exhaustive-deps': 'error',
    '@eslint-react/jsx-no-children-prop': 'error',
    '@eslint-react/jsx-no-comment-textnodes': 'error',
    '@eslint-react/jsx-no-key-after-spread': 'error',
    '@eslint-react/jsx-no-leaked-dollar': 'error',
    '@eslint-react/jsx-no-leaked-semicolon': 'error',
    '@eslint-react/jsx-no-namespace': 'error',
    '@eslint-react/naming-convention-context-name': 'off',
    '@eslint-react/naming-convention-id-name': 'off',
    '@eslint-react/naming-convention-ref-name': 'off',
    '@eslint-react/no-array-index-key': 'error',
    '@eslint-react/no-children-count': 'off',
    '@eslint-react/no-children-for-each': 'off',
    '@eslint-react/no-children-map': 'off',
    '@eslint-react/no-children-only': 'off',
    '@eslint-react/no-children-to-array': 'off',
    '@eslint-react/no-clone-element': 'off',
    '@eslint-react/no-context-provider': 'off',
    '@eslint-react/no-create-ref': 'off',
    '@eslint-react/no-duplicate-key': 'error',
    '@eslint-react/no-forward-ref': 'off',
    '@eslint-react/no-missing-component-display-name': 'error',
    '@eslint-react/no-nested-component-definitions': 'error',
    '@eslint-react/no-set-state-in-component-did-mount': 'error',
    '@eslint-react/no-set-state-in-component-did-update': 'error',
    '@eslint-react/no-set-state-in-component-will-update': 'error',
    '@eslint-react/no-unnecessary-use-prefix': 'error',
    '@eslint-react/no-unsafe-component-will-mount': 'error',
    '@eslint-react/no-unsafe-component-will-receive-props': 'error',
    '@eslint-react/no-unsafe-component-will-update': 'error',
    '@eslint-react/no-unused-class-component-members': 'error',
    '@eslint-react/no-unused-state': 'error',
    '@eslint-react/no-use-context': 'off',
    '@eslint-react/purity': 'error',
    '@eslint-react/rules-of-hooks': 'error',
    '@eslint-react/set-state-in-effect': 'error',
    '@eslint-react/use-state': ['error', { enforceSetterName: false }],

    '@eslint-react/dom-no-dangerously-set-innerhtml': 'error',
    '@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',
    '@eslint-react/dom-no-find-dom-node': 'error',
    '@eslint-react/dom-no-missing-button-type': 'error',
    '@eslint-react/dom-no-render-return-value': 'error',
    '@eslint-react/dom-no-script-url': 'error',
    '@eslint-react/dom-no-string-style-prop': 'error',
    '@eslint-react/dom-no-unknown-property': 'error',
    '@eslint-react/dom-no-unsafe-iframe-sandbox': 'error',
    '@eslint-react/dom-no-void-elements-with-children': 'error',

    '@eslint-react/web-api-no-leaked-event-listener': 'error',
    '@eslint-react/web-api-no-leaked-fetch': 'error',
    '@eslint-react/web-api-no-leaked-intersection-observer': 'error',
    '@eslint-react/web-api-no-leaked-interval': 'error',
    '@eslint-react/web-api-no-leaked-resize-observer': 'error',
    '@eslint-react/web-api-no-leaked-timeout': 'error',
  },
});

export const typechecked = defineConfig({
  files: ['**/*.{ts,mts,tsx}'],

  extends: [tseslint.configs.strictTypeCheckedOnly],

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
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreBooleanCoercion: true,
        ignoreIfStatements: true,
        ignoreTernaryTests: true,
      },
    ],
  },
});

export const vitest = defineConfig({
  files: [
    '**/*.{spec,test}.{js,ts,mts,tsx}',
    '**/__tests__/**/*.{js,ts,mts,tsx}',
  ],

  extends: [vitestPlugin.configs.recommended],

  rules: {
    'vitest/consistent-test-it': ['error', { fn: 'test' }],
    'vitest/expect-expect': 'error',
    'vitest/no-disabled-tests': 'error',
    'vitest/no-duplicate-hooks': 'error',
    'vitest/no-test-prefixes': 'error',
    'vitest/no-test-return-statement': 'error',
    'vitest/prefer-to-be': 'error',
    'vitest/prefer-todo': 'error',
    'vitest/require-awaited-expect-poll': 'error',
    'vitest/require-to-throw-message': 'error',
  },
});

export const jest = defineConfig({
  files: [
    '**/*.{spec,test}.{js,ts,mts,tsx}',
    '**/__tests__/**/*.{js,ts,mts,tsx}',
  ],

  extends: [jestPlugin.configs['flat/recommended']],

  languageOptions: {
    globals: {
      ...globals.jest,
      ...jestPlugin.environments.globals.globals,
    },
  },

  rules: {
    'import-x/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],

    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'jest/expect-expect': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-confusing-set-timeout': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-to-be': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-to-throw-message': 'error',
    'jest/valid-mock-module-path': 'error',
  },
});
