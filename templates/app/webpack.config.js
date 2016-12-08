'use strict';

const path = require('path'),
  fs = require('fs'),
  webpack = require('webpack'),
  merge = require('webpack-merge'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  DocsGeneratorPlugin = require('webpack-angular-dgeni-plugin');

let TARGET = process.env.npm_lifecycle_event;

// If a reference to 'karma' is found on the process arguments, then we should launch webpack in `test` mode
let hasKarmaRef = process.argv.map((arg) => arg.includes('karma')).some((arg) => arg);
if (TARGET === undefined && hasKarmaRef) {
  TARGET = 'test';
}

// Determinate application environment
let configPath = `${__dirname}/src/config`;
let envPos = process.argv.indexOf('--env');
let docEnable = process.argv.indexOf('--docs') !== -1;
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
      test: /\.css$/,
      loaders: [ 'style-loader', 'css-loader?importLoaders=1', 'postcss-loader' ]
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

    new webpack.DefinePlugin({
      'process.env':{
        'ENV_NAME': JSON.stringify(env)
      }
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
if (TARGET !== undefined && TARGET.startsWith('serve')) {
  module.exports = merge.smart(common, {
    module: {
      loaders: [<% if (cssPreprocessor === 'sass') { %>
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap&importLoaders=1', 'postcss-loader', 'sass-loader?sourceMap']
      }<% } else if (cssPreprocessor === 'less') { %>
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader?sourceMap&importLoaders=1', 'postcss-loader', 'less-loader?sourceMap']
      }<% } else { %>
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader?importLoaders=1', 'postcss-loader' ]
      }<% } %>]
    },
    devtool: 'cheap-module-eval-source-map'
  });
}

// Production
if (TARGET !== undefined && TARGET.startsWith('build')) {
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
          loader: ExtractTextPlugin.extract('style-loader', ['css-loader?importLoaders=1', 'postcss-loader', 'sass-loader'])
        }<% } else if (cssPreprocessor === 'less') { %>
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader', ['css-loader?importLoaders=1', 'postcss-loader', 'less-loader'])
        }<% } else { %>
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', ['css-loader?importLoaders=1', 'postcss-loader'])
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
      new ExtractTextPlugin('[name].[hash].css'),

      new DocsGeneratorPlugin({
        enable       : docEnable,
        staticContent: './docs',
        sources      : {
          include : 'src/app/**/**/*.js',
          basePath: 'src/app'
        },
        output       : 'dist-docs'
      })
    ],
  });
}

// Test
if (TARGET !== undefined && (TARGET === 'test' || TARGET === 'test-watch')) {
  module.exports = merge.smart(common, {
    entry: {},

    devtool: 'inline-source-map',

    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel?' + JSON.stringify({
          presets: ['es2015'],
          plugins: ['istanbul']
        })],
        exclude: /node_modules/
      },<% if (cssPreprocessor === 'sass') { %>
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }<% } else if (cssPreprocessor === 'less') { %>
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }<% } else { %>
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }<% } %>
    ]}
  });
}

