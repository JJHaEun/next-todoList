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
    ecmaVersion: "latest",
    sourceType: "module",
    project: "**/tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "jsx-quotes": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "arrow-body-style": "off",
    "capitalized-comments": "off",
  },
};
