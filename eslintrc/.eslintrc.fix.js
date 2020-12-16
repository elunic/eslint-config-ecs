module.exports = {
  extends: ["@elunic/eslint-config-ecs/eslintrc/.eslintrc.js", "prettier"],
  plugins: ["prettier", "simple-import-sort"],
  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-undef-init": "error",
    "prettier/prettier": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-imports": "off",
    "spaced-comment": ["error", "always"],
  },
};
