module.exports = {
  extends: [
    "next",
    "turbo",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/prettier",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
