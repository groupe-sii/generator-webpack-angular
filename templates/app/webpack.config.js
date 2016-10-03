'use strict';

const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let TARGET = process.env.npm_lifecycle_event;

console.log(TARGET);

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
    }
  });
}

// Test
if (TARGET === 'test') {
  module.exports = merge(common, {
    
  });
}
