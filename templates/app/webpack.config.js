'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let TARGET = process.env.npm_lifecycle_event;

let common = {

  entry: path.join(__dirname, 'src/app/app.js'),

  module: {
    preLoaders: [],
    loaders: [{
      test: /\.js$/,
      loaders: ['ng-annotate', 'babel'],
      exclude: /node_modules/
    },
    {
      test: /\.html$/,
      loader: 'raw'
    }<% if (cssPreprocessor === 'sass') { %>,
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }<% } else if (cssPreprocessor === 'less') { %>,
    {
      test: /\.less$/,
      loaders: ['style', 'css', 'less']
    }<% } else { %>,
    {
      test: /\.css$/,
      loaders: ['style', 'css']
    }<% } %>]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body'
    })
  ],

  devServer: {
    contentBase: './src/public',
    stats: 'minimal'
  }
};

// Development
if (TARGET === 'start') {
  module.exports = merge(common, {

  });
}

// Production
if (TARGET === 'build') {
  module.exports = merge(common, {
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js'
    },

    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin([{
        from: __dirname + '/src/public'
      }])
    ],
  });
}

// Test
if (TARGET === 'test') {
  module.exports = merge(common, {

  });
}
