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
   * Display a welcome message.
   */
  welcome () {
    this.log(yosay(
      `Welcome to the ${chalk.red('Webpack Angular')} generator!`
    ));
  }
}
