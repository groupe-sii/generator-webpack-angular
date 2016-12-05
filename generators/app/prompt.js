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
      name: 'resource',
      message: 'Would you like to use a REST resource library?',
      default: 'restangular',
      store: true,
      choices: [
        {
          name: 'Restangular, an alternative service to handles RESTful requests',
          value: 'restangular'
        },
        {
          name: 'ngResource, the official support for RESTful services',
          value: 'ngResource'
        },
        {
          name: 'None, $http is enough!',
          value: '$http'
        }
      ]
    }, {
      type: 'list',
      name: 'uiFramework',
      message: 'Which UI framework do you want?',
      default: 'ngMaterial',
      store: true,
      choices: [
        {
          name: 'Angular Material, the reference implementation of the Google\'s Material Design specification',
          value: 'ngMaterial'
        },
        {
          name: 'Bootstrap, the most popular HTML, CSS, and JS framework',
          value: 'bootstrap'
        },
        {
          name: 'None',
          value: 'none'
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
    }, {
      type: 'checkbox',
      name: 'otherModules',
      message: 'Here are some modules you might be interested in',
      store: true,
      choices: [
        {
          name: 'angular-translate (18n for your Angular app, made easy!)',
          value: 'angular-translate'
        },
        {
          name: 'sonar-web-frontend-reporters, generate linters reporters for the SonarQube plugin',
          value: 'sonar-web-frontend-reporters'
        }
      ]
    }, {
      type: 'list',
      name: 'packageManager',
      message: 'What package manager should i use to install your dependencies ?',
      default: 'npm',
      store: true,
      choices: [
        {
          name: 'npm, a package manager for javascript',
          value: 'npm'
        },
        {
          name: 'Yarn, Fast, reliable, and secure dependency management',
          value: 'yarn'
        }
      ]
    }]).then(answers => {

      // Angular modules
      generator.props.ngAnimate = answers.ngModules && answers.ngModules.includes('ngAnimate');
      generator.props.ngCookies = answers.ngModules && answers.ngModules.includes('ngCookies');
      generator.props.ngTouch = answers.ngModules && answers.ngModules.includes('ngTouch');
      generator.props.ngSanitize = answers.ngModules && answers.ngModules.includes('ngSanitize');
      generator.props.ngMessages = answers.ngModules && answers.ngModules.includes('ngMessages');

      // Resource
      generator.props.resource = answers.resource;

      // UI Framework
      generator.props.uiFramework = answers.uiFramework;

      // CSS preprocessor
      generator.props.cssPreprocessor = answers.cssPreprocessor;

      // Other modules
      generator.props.angularTranslate = answers.otherModules && answers.otherModules.includes('angular-translate');
      generator.props.sonarWebFrontendReporters = answers.otherModules && answers.otherModules.includes('sonar-web-frontend-reporters');

      // Package manager
      generator.props.packageManager = answers.packageManager;

    });
  }
};
