module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js', '/build'],
  rules: {
    "indent": "off",
    "quote-props": "off",
    "max-len": [
      "error",
      {
        "ignoreTemplateLiterals": true,
        "ignoreStrings": true
      }
    ],
    "no-unused-vars": "off",
    "spaced-comment": "off",
    "comma-dangle": ["error", "never"],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "@typescript-eslint/explicit-function-return-type": ["error", {
      "allowExpressions": true
    }],
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase", "PascalCase"]
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "memberLike",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "prefix": ["_"]
      },
      {
        "selector": "memberLike",
        "modifiers": ["protected"],
        "format": ["camelCase"],
        "prefix": ["_"]
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      }
    ]
  },
};
