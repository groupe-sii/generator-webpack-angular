'use strict';

const _ = require('underscore.string');
const path = require('path');
const Base = require('yeoman-generator').Base;
const yosay = require('yosay');
const chalk = require('chalk');

const prompt = require('./prompt');
const write = require('./write');
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
    return prompt.questions(this);
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

        this.fs.copyTpl(
          this.templatePath('_.gitignore'),
          this.destinationPath('.gitignore')
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
      },

      /**
       * Write linter files
       */
      linters () {
        this.fs.copyTpl(
          this.templatePath('src/_.htmlhintrc'),
          this.destinationPath('src/.htmlhintrc')
        );

        this.fs.copyTpl(
          this.templatePath('src/_.eslintrc'),
          this.destinationPath('src/.eslintrc')
        );

        switch (this.props.cssPreprocessor) {
          case 'css':
            this.fs.copyTpl(
              this.templatePath('src/_.csslintrc'),
              this.destinationPath('src/.csslintrc')
            );
            break;

          default:
          case 'sass':
            this.fs.copyTpl(
              this.templatePath('src/_.scsslintrc'),
              this.destinationPath('src/.scsslintrc')
            );
            break;
        }
      }
    };
  }

  /**
   * Write project files.
   */
  get writing () {
    return write;
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
    this.log(`- ${chalk.yellow.bold('npm run build')} to build an optimized version of your application in folder /dist`);
    this.log(`- ${chalk.yellow.bold('npm run build:prod')} to build an optimized version of your application in folder /dist in a ${chalk.yellow.bold('production')} environment`);
    this.log(`- ${chalk.yellow.bold('npm run serve')} to launch a webpack-dev-server server on your source files`);
    this.log(`- ${chalk.yellow.bold('npm run serve:prod')} to launch a webpack-dev-server server on your source files in a ${chalk.yellow.bold('production')} environment`);
    this.log(`- ${chalk.yellow.bold('npm run test')} to launch your unit tests with Karma`);
    this.log(`- ${chalk.yellow.bold('npm run lint')} to launch linting process`);
  }
};
