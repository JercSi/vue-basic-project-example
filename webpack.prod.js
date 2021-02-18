const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Prerendering
const PrerenderSPAPlugin = require('@dreysolano/prerender-spa-plugin');
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = merge(common, {
  mode: 'production',  
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    chunkFilename: "[name].[contenthash:8].js"
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name].[contenthash:8].css"
    }),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      outputDir: path.join(__dirname, 'dist'),
      routes: [ '/static-content.html' ],
      renderer: new PuppeteerRenderer({
        headless: true,
        renderAfterDocumentEvent: 'my-document-event'
      }),
      postProcess(context) {
        // Remove /index.html from the output path if the dir name ends with a .html file extension.
        // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
        if (context.route.endsWith('.html')) {
          context.outputPath = path.join(__dirname, 'dist', context.route)
        }
                
        return context
      }
    })
  ]
});