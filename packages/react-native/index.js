module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    '@bengsfort/react', // Make sure this is last!
  ],

  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  plugins: ['react', 'jsx-expressions'],

  // Map from global var to bool specifying if it can be redefined
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    AbortController: false,
    Blob: true,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    ErrorUtils: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    File: true,
    FileReader: false,
    FormData: false,
    global: false,
    Headers: false,
    Intl: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    queueMicrotask: true,
    URL: false,
    URLSearchParams: false,
    WebSocket: true,
    window: false,
    XMLHttpRequest: false,
  },

  rules: {
    // React
    // These are rules specific to react and JSX.
    
    'react/display-name': 'off',
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': [
      'error',
      {
        allow: 'as-needed',
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'jsx-expressions/strict-logical-expressions': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandLast: true,
      },
    ],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/no-unknown-property': ['error', { ignore: ['inert', 'fetchPriority'] }],
    "react/react-in-jsx-scope": "off",

    // Best Practices
    // These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.

    'block-scoped-var': 0, // treat var statements as if they were block scoped (off by default)
    complexity: 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    'consistent-return': 0, // require return statements to either always or never specify values
    curly: 1, // specify curly brace conventions for all control statements
    'default-case': 0, // require default case in switch statements (off by default)
    'dot-notation': 1, // encourages use of dot notation whenever possible
    eqeqeq: [1, 'allow-null'], // require the use of === and !==
    'guard-for-in': 0, // make sure for-in loops have an if statement (off by default)
    'no-alert': 1, // disallow the use of alert, confirm, and prompt
    'no-caller': 1, // disallow use of arguments.caller or arguments.callee
    'no-div-regex': 1, // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-else-return': 0, // disallow else after a return in an if (off by default)
    'no-eq-null': 0, // disallow comparisons to null without a type-checking operator (off by default)
    'no-eval': 2, // disallow use of eval()
    'no-extend-native': 1, // disallow adding to native types
    'no-extra-bind': 1, // disallow unnecessary function binding
    'no-fallthrough': 1, // disallow fallthrough of case statements
    'no-floating-decimal': 1, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    'no-implied-eval': 1, // disallow use of eval()-like methods
    'no-labels': 1, // disallow use of labeled statements
    'no-iterator': 1, // disallow usage of __iterator__ property
    'no-lone-blocks': 1, // disallow unnecessary nested blocks
    'no-loop-func': 0, // disallow creation of functions within loops
    'no-multi-str': 0, // disallow use of multiline strings
    'no-native-reassign': 0, // disallow reassignments of native objects
    'no-new': 1, // disallow use of new operator when not part of the assignment or comparison
    'no-new-func': 2, // disallow use of new operator for Function object
    'no-new-wrappers': 1, // disallows creating new instances of String,Number, and Boolean
    'no-octal': 1, // disallow use of octal literals
    'no-octal-escape': 1, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-proto': 1, // disallow usage of __proto__ property
    'no-redeclare': 0, // disallow declaring the same variable more then once
    'no-return-assign': 1, // disallow use of assignment in return statement
    'no-script-url': 1, // disallow use of javascript: urls.
    'no-self-compare': 1, // disallow comparisons where both sides are exactly the same (off by default)
    'no-sequences': 1, // disallow use of comma operator
    'no-unused-expressions': 0, // disallow usage of expressions in statement position
    'no-useless-escape': 1, // disallow escapes that don't have any effect in literals
    'no-void': 1, // disallow use of void operator (off by default)
    'no-warning-comments': 0, // disallow usage of configurable warning terms in comments": 1,                        // e.g. TODO or FIXME (off by default)
    'no-with': 1, // disallow use of the with statement
    radix: 1, // require use of the second argument for parseInt() (off by default)
    'semi-spacing': 1, // require a space after a semi-colon
    'vars-on-top': 0, // requires to declare all vars on top of their containing scope (off by default)
    'wrap-iife': 0, // require immediate function invocation to be wrapped in parentheses (off by default)
    yoda: 1, // require or disallow Yoda conditions
  },
};
