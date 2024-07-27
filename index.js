module.exports = {
  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  plugins: [
    '@eslint-community/eslint-comments',
    '@eslint-react',
    'import-x',
    'prettier',
    'promise',
    'react-hooks',
    'react-native',
  ],

  extends: [
    'eslint:recommended',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:@eslint-react/recommended-legacy',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],

  rules: {
    eqeqeq: ['error', 'smart'],

    'array-callback-return': 'error',
    'default-case': ['error', { commentPattern: '^no default$' }],
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
    'no-labels': ['error', { allowLoop: true, allowSwitch: false }],
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
      { allowWholeFile: true },
    ],
    '@eslint-community/eslint-comments/no-unused-disable': 'error',

    'import-x/export': 'error',
    'import-x/extensions': ['error', { js: 'never', json: 'always' }],
    'import-x/imports-first': 'error',
    'import-x/no-absolute-path': 'error',
    'import-x/no-amd': 'error',
    'import-x/no-commonjs': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-dynamic-require': 'error',
    'import-x/no-empty-named-blocks': 'error',
    'import-x/no-extraneous-dependencies': 'error',
    'import-x/no-self-import': 'error',
    'import-x/no-useless-path-segments': 'error',
    "import-x/no-relative-packages": "error",

    '@eslint-react/ensure-forward-ref-using-ref': 'error',
    '@eslint-react/no-array-index-key': 'error',
    '@eslint-react/no-children-count': 'error',
    '@eslint-react/no-children-for-each': 'error',
    '@eslint-react/no-children-map': 'error',
    '@eslint-react/no-children-only': 'error',
    '@eslint-react/no-children-to-array': 'error',
    '@eslint-react/no-clone-element': 'error',
    '@eslint-react/no-comment-textnodes': 'error',
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

    '@eslint-react/dom/no-children-in-void-dom-elements': 'error',
    '@eslint-react/dom/no-dangerously-set-innerhtml': 'error',
    '@eslint-react/dom/no-dangerously-set-innerhtml-with-children': 'error',
    '@eslint-react/dom/no-find-dom-node': 'error',
    '@eslint-react/dom/no-missing-button-type': 'error',
    '@eslint-react/dom/no-namespace': 'error',
    '@eslint-react/dom/no-render-return-value': 'error',
    '@eslint-react/dom/no-script-url': 'error',
    '@eslint-react/dom/no-unsafe-iframe-sandbox': 'error',

    '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks': 'error',
    '@eslint-react/hooks-extra/ensure-use-callback-has-non-empty-deps': 'error',
    '@eslint-react/hooks-extra/ensure-use-memo-has-non-empty-deps': 'error',
    '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'error',
    '@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect':
      'error',
    '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization': 'error',

    '@eslint-react/naming-convention/component-name': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'react-native/no-unused-styles': 'error',

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

  overrides: [
    {
      files: ['*.js', "*.jsx", "*.cjs", "*.mjs"],
      extends: ['plugin:import-x/recommended'],
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
      files: ['*.mjs', "*.mts"],
      rules: {
        'import-x/extensions': ['error', 'always'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: require.resolve('@typescript-eslint/parser'),
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import-x/typescript',
      ],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as' },
        ],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-interface': [
          'error',
          { allowSingleExtends: true },
        ],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
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

        '@eslint-react/naming-convention/filename-extension': [
          'error',
          { allow: 'always' },
        ],

        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        'no-use-before-define': 'off',

        'react/prop-types': 'off',
      },
    },
    {
      files: ['*.{spec,test}.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      rules: {
        'import-x/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],

        'jest/consistent-test-it': ['error', { fn: 'it' }],
        'jest/expect-expect': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-to-be': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-to-throw-message': 'error',
      },
    },
    {
      files: ['*.config.js', '*.config.mjs', '.*rc.js', '.*rc.mjs'],
      env: {
        node: true,
      },
      rules: {
        'import-x/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      files: ['*.config.js', '*.config.cjs', '.*rc.js', '.*rc.cjs'],
      env: {
        node: true,
      },
      rules: {
        'import-x/no-commonjs': 'off',
      },
    },
  ],
};
