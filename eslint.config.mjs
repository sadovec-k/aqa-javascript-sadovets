import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {rules:{"semi": "error", 
    "no-console": "off", 
    "no-unused-vars": "off" }, languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];