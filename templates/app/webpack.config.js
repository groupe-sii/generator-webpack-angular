'use strict';

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let TARGET = process.env.npm_lifecycle_event;

// Determinate application environment
let configPath = `${__dirname}/src/config`;
let envPos = process.argv.indexOf('--env');
let env = (envPos !== -1 && fs.existsSync(`${configPath}/config.${process.argv[++envPos]}.json`)) ? process.argv[envPos] : 'dev';

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
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body'
    }),

    new CopyWebpackPlugin([
<% if (angularTranslate) { -%>
      { from: 'src/config/i18n' }
<% } -%>
    ])
  ],

  devServer: {
    contentBase: './src/public',
    stats: 'minimal'
  },

  resolve: {
    alias: {
      'app.config': `${configPath}/config.${env}.json`
    }
  }
};

// Development
if (TARGET === 'serve') {
  module.exports = merge.smart(common, {
    module: {
      loaders: [<% if (cssPreprocessor === 'sass') { %>
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
    },
    devtool: 'cheap-module-eval-source-map'
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
