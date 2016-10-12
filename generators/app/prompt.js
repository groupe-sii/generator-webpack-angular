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
      generator.props.cssPreprocessor = answers.cssPreprocessor;
    });
  }
};
