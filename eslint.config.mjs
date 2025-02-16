import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {rules:{"semi": "error", 
    "no-console": "warn", 
    "no-unused-vars": "off" }, languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];