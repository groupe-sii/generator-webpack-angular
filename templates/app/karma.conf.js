'use strict';

let webpackConfig = require('./webpack.config');

module.exports = function (config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'test/**/*.spec.js'}
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/unit/**/*.spec.js': ['webpack', 'sourcemap'<% if (sonarWebFrontendReporters) { -%>, 'junit'<% } -%>]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'spec'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', <% if (sonarWebFrontendReporters) { -%>'junit', <% } -%>'coverage'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    specReporter: {
      maxLogLines: 5, // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false, // do not print information about failed tests
      suppressPassed: false, // do not print information about passed tests
      suppressSkipped: true, // do not print information about skipped tests
      showSpecTiming: false  // print the time elapsed for each spec
    },

<% if (sonarWebFrontendReporters) { -%>
    // Reference: https://github.com/groupe-sii/karma-junit7-sonarqube-reporter
    junitReporter: {
      outputFile: 'reports/sonar/js-ut.xml',
        suite: ''
    },
<% } -%>

    coverageReporter: {
      dir: '<%= (sonarWebFrontendReporters) ? "reports/sonar/" : "coverage/" -%>',
      reporters: [
        {
          type: 'lcovonly',
          subdir: '.',
          file: 'js-ut.lcov'
        }<% if (!sonarWebFrontendReporters) { -%>,
        {
          type: 'html',
          subdir: 'html'
        }
<% } -%>

      ]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      quiet: false,
      stats: {
        hash: false,
        version: false,
        assets: false,
        chunks: false,
        timings: false
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });

};
