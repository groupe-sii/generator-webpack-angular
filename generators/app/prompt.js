'use strict';

/**
 * This class manages App Generator prompts.
 */
module.exports = class Prompt {

  /**
   * Ask the user to answer some questions.
   */
  static questions (generator) {
    return generator.prompt([{
      type: 'checkbox',
      name: 'ngModules',
      message: 'What Angular modules do you want?',
      store: true,
      choices: [
        {
          name: 'ngAnimate',
          value: 'ngAnimate'
        },
        {
          name: 'ngCookies',
          value: 'ngCookies'
        },
        {
          name: 'ngTouch',
          value: 'ngTouch'
        },
        {
          name: 'ngSanitize',
          value: 'ngSanitize'
        },
        {
          name: 'ngMessages',
          value: 'ngMessages'
        }
      ]
    }, {
      type: 'list',
      name: 'cssPreprocessor',
      message: 'Which CSS preprocessor do you want?',
      default: 'sass',
      store: true,
      choices: [
        {
          name: 'Sass (with Node-sass)',
          value: 'sass'
        },
        {
          name: 'Less',
          value: 'less'
        },
        {
          name: 'Plain CSS',
          value: 'css'
        }
      ]
    }]).then(answers => {
      // Angular modules
      generator.props.ngAnimate = answers.ngModules && answers.ngModules.includes('ngAnimate');
      generator.props.ngCookies = answers.ngModules && answers.ngModules.includes('ngCookies');
      generator.props.ngTouch = answers.ngModules && answers.ngModules.includes('ngTouch');
      generator.props.ngSanitize = answers.ngModules && answers.ngModules.includes('ngSanitize');
      generator.props.ngMessages = answers.ngModules && answers.ngModules.includes('ngMessages');

      // CSS preprocessor
      generator.props.cssPreprocessor = answers.cssPreprocessor;
    });
  }
};
