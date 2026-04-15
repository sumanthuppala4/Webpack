const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/ /* run this for all mjs and js files */,
        exclude: /node_modules/ /* exclude node modules folder*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],  
};
