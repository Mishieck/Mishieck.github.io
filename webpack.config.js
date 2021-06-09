const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const DIST_PATH = path.resolve(__dirname, "./dist");
const ASSET_PATH = process.env.ASSET_PATH || "/";
const mode = process.env.NODE_ENV;
const sourceMap = mode === "development" ? "eval-source-map" : "source-map";

module.exports = {
  mode,
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".xml", ".scss"]
  },
  output: {
    path: DIST_PATH,
    filename: "index.js",
    publicPath: ASSET_PATH
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH)
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  devtool: sourceMap
};
