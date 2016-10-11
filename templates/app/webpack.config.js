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
    }]
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
  module.exports = merge.smart(common, {
    module: {
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
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }<% } else if (cssPreprocessor === 'less') { %>,
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }<% } else { %>,
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }<% } %>]
    }
  });
}

// Production
if (TARGET === 'build') {
  module.exports = merge.smart(common, {
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js'
    },

    module: {
      loaders: [<% if (cssPreprocessor === 'sass') { %>
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        }<% } else if (cssPreprocessor === 'less') { %>
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
        }<% } else { %>
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }<% } %>
      ]
    },

    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin([{
        from: __dirname + '/src/public'
      }]),
      new ExtractTextPlugin('[name].[hash].css')
    ],
  });
}

// Test
if (TARGET === 'test') {
  module.exports = merge.smart(common, {

  });
}
