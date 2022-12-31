module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:jsdoc/recommended",
    "eslint:recommended",
    "google",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jsdoc"],
  rules: {},
};
