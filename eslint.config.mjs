import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,

  eslintConfigPrettier,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: false,
        },
      ],
    },
  },
];
