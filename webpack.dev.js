const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  target: "web",
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    chunkFilename: "[name].[contenthash:8].js"
  },
  devServer: {
    contentBase: ["./src", "./public"], // both src and output dirs
    historyApiFallback: true,
    port: 8080,
    // enable HMR
    hot: true,
    inline: true,
    watchOptions: {
      poll: true
    }
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name].[contenthash:8].css"
    })
  ]
});