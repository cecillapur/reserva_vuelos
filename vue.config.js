// vue.config.js
const path = require("path");

module.exports = {
  transpileDependencies: [], // Cambia `true` por un array vacío o una lista de dependencias
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
};
