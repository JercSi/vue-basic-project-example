const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const webpack = require('webpack')

module.exports = (env) => {
  console.log(env);

  return {
    mode: 'development',
    target: env.NODE_ENV === "development" ? "web" : "browserslist",
    entry: {
      main: "./src/main.js"
    },
    output: {
      filename: "[name].[contenthash:8].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      chunkFilename: "[name].[contenthash:8].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.scss$/i,
          use: [
            "vue-style-loader",
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [["autoprefixer"]]
                }
              }
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              }
            }
          ]
        },
        {
          test: /\.sass$/i,
          use: [
            "vue-style-loader",
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [["autoprefixer"]]
                }
              }
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                sassOptions: {
                  indentedSyntax: true // optional
                }
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
          loader: "file-loader"
        },
        {
          test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
          loader: "file-loader",
          options: {
            name: "[name][contenthash:8].[ext]",
            outputPath: "assets/img",
            esModule: false
          }
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash:8].css",
        chunkFilename: "[name].[contenthash:8].css"
      }),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico"
      }),
      new VuetifyLoaderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.runtime.esm.js",
        "@": path.resolve(__dirname, "src")
      },
      extensions: ["*", ".js", ".vue", ".json"]
    },
    optimization: {
      moduleIds: "deterministic", //"hashed",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: -10,
            chunks: "all"
          }
        }
      }
    },
    devServer: {
      contentBase: ['./src', './public'], // both src and output dirs
      historyApiFallback: true,
      port: 8080,
      // enable HMR
      hot: true,
      inline: true,
      watchOptions: {
        poll: true,
      },
    }
  }
};
