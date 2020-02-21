module.exports = {
  extends: ["./.eslintrc.js", "prettier"],
  plugins: ["prettier"],
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always"
      }
    ],
    "no-undef-init": "error",
    "prettier/prettier": "error",
    "spaced-comment": ["error", "always"]
  }
};
