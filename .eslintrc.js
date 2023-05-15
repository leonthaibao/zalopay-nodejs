const path = require('path');

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    },
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ],
    "@typescript-eslint/no-namespace": "off"
  },
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "no-dupe-class-members": "off"
      }
    }
  ]
}