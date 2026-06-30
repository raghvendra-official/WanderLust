const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,

  // Node.js files
  {
    files: ["**/*.js"],
    ignores: [
      "node_modules/**",
      "public/js/**"
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },

  // Browser JS
  {
    files: ["public/js/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        mapboxgl: "readonly",
        mapToken: "readonly",
        listing: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
];