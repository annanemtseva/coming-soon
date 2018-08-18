var path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
const ENV = process.env.NODE_ENV || 'development';
const isProd = ENV === 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: './src/assets/css/styles.css'}),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ]
};