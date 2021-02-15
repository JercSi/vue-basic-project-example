const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
    target: "web",
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
});