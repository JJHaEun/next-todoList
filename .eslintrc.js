module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ["plugin:react/recommended", "xo"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "jsx-quotes": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "arrow-body-style": "off",
    "capitalized-comments": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/naming-convention": "off",
  },
};
