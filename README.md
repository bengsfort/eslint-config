# @bengsfort/eslint-config

Simple and straight forward eslint config that I use in my personal projects.

## Installation

1. Add as a dev dependency.
```sh
# Add config.
$ yarn add -D @bengsfort/eslint-config
# Add peer deps if you don't have them yet.
$ yarn add -D eslint @typescript-eslint/parser
```

2. Extend the config from your eslint config, and add the ts parser.
```js
module.exports = {
    // . . .

    "extends": [
        "@bengsfort",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": ["./tsconfig.json"], // Path to your tsconfig.
        "ecmaVersion": 21,
        "sourceType": "module",
    },

    // . . .
};
```

## Prettier

Prettier config is also available, just add the following line to your `package.json`.

```json
{
    "prettier": "@bengsfort/eslint-config/prettier.config.js",
}
```
