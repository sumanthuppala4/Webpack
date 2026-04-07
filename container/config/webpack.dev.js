const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
        dashboard: "dashboard@http://localhost:8082/remoteEntry.js",
        productsApp: "products@http://localhost:8083/remoteEntry.js",
      },
      shared: dependencies, // Share all dependencies from package.json with singleton option to ensure only one instance is loaded
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
