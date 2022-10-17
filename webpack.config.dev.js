const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/images/')
    }
  },
  module: {
    rules: [
        {
          test: /\.m?js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        // {
        //   test: /\.css$/i,
        //   use: [MiniCssExtractPlugin.loader, 
        //       'css-loader'
        //   ],
        // },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: './assets/images/[hash][ext][query]',
          }
        },
        {
          test: /\.(woff|woff2)$/i,
          type: 'asset/resource',
          generator: {
            filename: './assets/fonts/[hash][ext][query]'
          },
        },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
        filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, "src", "assets/images"), 
          to: "assets/images"
        },
      ]
    }),
    new NodePolyfillPlugin()
  ]
};

module.exports = config;