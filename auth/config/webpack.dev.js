const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const devConfig = {
  mode: "development",
  output: { publicPath: "http://localhost:8082/" },
  devServer: {
    port: 8082,

    historyApiFallback: {
      index: "/index.html", // Serve index.html for all routes to support client-side routing
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap",
      },
      shared: dependencies, // Share all dependencies from package.json with singleton option to ensure only one instance is loaded
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
