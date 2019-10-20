module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    amd: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-console': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-script-url': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-unused-expressions': 'off',
    'react/no-did-update-set-state': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unescaped-entities': 'off',
    'react/state-in-constructor': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'global-require': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    'no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
