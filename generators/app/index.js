const path  = require('path');
const Base  = require('yeoman-generator').Base;
const yosay = require('yosay');
const chalk = require('chalk');

module.exports = class AppGenerator extends Base {

  /**
   * Constructor.
   */
  constructor (...args) {
    super(...args);
  }

  /**
   * Define template context.
   */
  paths () {
    this.sourceRoot(path.join(__dirname, '../../templates/app'));
  }

  /**
   * Display a welcome message.
   */
  welcome () {
    this.log(yosay(
      `Welcome to the ${chalk.red('Webpack Angular')} generator!`
    ));
  }

  /**
   * Write project files.
   */
  writing () {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      {}
    );
  }
}
