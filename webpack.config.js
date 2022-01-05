const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const DIST_PATH = path.resolve(__dirname, "./dist");
const ASSET_PATH = process.env.ASSET_PATH || "/";
const mode = process.env.NODE_ENV;
const sourceMap = mode === "development" ? "eval-source-map" : "source-map";

module.exports = {
  mode,
  entry: path.resolve(__dirname, "./src/index.ts"),
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
      },
      {
        test: /\.xml$/,
        type: "asset/source"
      },
      {
        test: /\.(png|jpg|jpeg|svg)/,
        type: "asset/inline"
      },
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"]
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
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  devtool: sourceMap
};
