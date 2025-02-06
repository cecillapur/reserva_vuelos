const path = require("path");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/reserva_vuelos/" // Reemplaza 'nombre-del-repositorio' con el nombre de tu repositorio
      : "/",
  transpileDependencies: [],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
};
