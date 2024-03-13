const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "C:\\Users\\lena_\\Desktop\\WebDev\\Webpack_Homework\\index.html"),
    }),
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
],
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(css|sass|scss)$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          },
          {
            test: /\.woff2?$/i,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[name][ext]'
            }
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/[name][ext]'
            }
          },
        ],
      },
  };