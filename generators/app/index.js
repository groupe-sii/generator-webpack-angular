'use strict';

const _ = require('underscore.string');
const path = require('path');
const Base = require('yeoman-generator').Base;
const yosay = require('yosay');
const chalk = require('chalk');

const Prompt = require('./prompt');
const pkg = require('../../package.json');

module.exports = class AppGenerator extends Base {

  /**
   * Constructor.
   */
  constructor (...args) {
    super(...args);

    this.argument('appname', {
      type: String,
      required: false
    });

    this.props = {_};
  }

  /**
   * Initialize this generator.
   */
  get initializing () {
    return {

      /**
       * Get version.
       */
      version () {
        this.version = pkg.version;
      },

      /**
       * Set app name.
       */
      appName () {
        this.props.appname = this.appname || path.basename(process.cwd());
        this.props.appname = _.slugify(_.humanize(this.props.appname));
      },

      /**
       * Define template context.
       */
      paths () {
        this.sourceRoot(path.join(__dirname, '../../templates/app'));
      },

      /**
       * Display a welcome message.
       */
      welcome () {
        this.log(yosay(
          `Welcome to the ${chalk.red('Webpack Angular')} generator!`
        ));
      }
    };
  }

  /**
   * Prompt the user for options.
   */
  prompting () {
    return Prompt.questions(this);
  }

  /**
   * Write configuration files.
   */
  get configuring () {
    return {

      /**
       * Write configuration files.
       */
      configFiles () {
        this.fs.copyTpl(
          this.templatePath('_.babelrc'),
          this.destinationPath('.babelrc')
        );

        this.fs.copyTpl(
          this.templatePath('_.editorconfig'),
          this.destinationPath('.editorconfig')
        );
      },

      /**
       * Write package.json.
       */
      packageJSON () {
        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'),
          this.props
        );
      }
    };
  }

  /**
   * Write project files.
   */
  get writing () {
    return {

      /**
       * Write README.
       */
      readme () {
        this.fs.copyTpl(
          this.templatePath('README.md'),
          this.destinationPath('README.md'),
          this.props
        );
      },

      /**
       * Write webpack.config.js.
       */
      webpack () {
        this.fs.copyTpl(
          this.templatePath('webpack.config.js'),
          this.destinationPath('webpack.config.js'),
          this.props
        );
      },

      /**
       * Write src directory.
       */
      src () {
        this.fs.copyTpl(
          this.templatePath('src/app'),
          this.destinationPath('src/app'),
          this.props
        );

        this.fs.copyTpl(
          this.templatePath('src/public'),
          this.destinationPath('src/public'),
          this.props
        );
      },

      /**
       * Write styles.
       */
      styles () {
        switch (this.props.cssPreprocessor) {
          case 'sass':
            this.fs.copyTpl(
              this.templatePath('src/styles-sass'),
              this.destinationPath('src/styles')
            );
            break;
          case 'less':
            this.fs.copyTpl(
              this.templatePath('src/styles-less'),
              this.destinationPath('src/styles')
            );
            break;
          default:
            this.fs.copyTpl(
              this.templatePath('src/styles'),
              this.destinationPath('src/styles')
            );
        }
      }
    };
  }

  /**
   * Install dependencies.
   */
  install () {
    this.npmInstall();
  }

  /**
   * Say goodbye.
   */
  end () {
    this.log('It\'s time to use npm scripts:');
    this.log(`- ${chalk.yellow.bold('npm start')} to start dev server on your source files with live reload`);
    this.log(`- ${chalk.yellow.bold('npm run build')} to build an optimized version of your application in folder /dist`);
  }
};
