const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    style: "./src/style.scss",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // process.env.NODE_ENV !== "production"
          //   ? "style-loader"
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    // new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      // chunkFilename: "[id].css",
    }),
  ],
};