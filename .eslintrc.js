module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential", "@vue/prettier"],
  parserOptions: {
    parser: "@babel/eslint-parser", // Cambiado a '@babel/eslint-parser'
    ecmaVersion: 12,
    sourceType: "module",
    requireConfigFile: false, // Esta opción es importante si no usas un archivo de configuración Babel
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/no-reserved-component-names": "off", // Desactiva la regla para nombres reservados
    "vue/multi-word-component-names": "off", // Desactiva la regla de nombres multi-palabra
  },
};
