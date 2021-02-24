const path = require('path');
const webpack = require('webpack');

const DIST_PATH = path.resolve(__dirname, './dist');
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: DIST_PATH,
    filename: 'index.js',
    publicPath: ASSET_PATH
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ]
};