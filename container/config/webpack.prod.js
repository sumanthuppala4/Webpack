const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN || "http://localhost:8080";

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // Use contenthash for better caching in production
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@" + domain + "/marketing/remoteEntry.js",
        dashboard: "dashboard@" + domain + "/dashboard/remoteEntry.js",
        productsApp: "products@" + domain + "/products/remoteEntry.js",
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
