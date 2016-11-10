'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

let testEnvironments = require('./app/environments.spec');
let testStyles = require('./app/styles.spec');
let testResource = require('./app/resource.spec');
let testAngularTranslate = require('./app/angular-translate.spec');
let testUIFrameworks = require('./app/ui-frameworks.spec');
let testLinters = require('./app/linters.spec');
let testCSSPreprocessors = require('./app/css-preprocessors.spec');

/**
 * Test app generator.
 */
describe('app', () => {

  describe('default settings', () => {
    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../generators/app'))
        .toPromise()
        .then(() => done());
    });

    it('should generate a README file', () => {
      assert.file('README.md');
    });

    it('should generate a CHANGELOG.md file', () => {
      assert.file('CHANGELOG.md');
    });

    it('should generate a commits convention', () => {
      assert.file('COMMITS-CONVENTION.md');
      assert.file('tools/git/commit-msg.js');
    });

    it('should generate a main SASS file', () => {
      assert.file('src/styles/main.scss');
      assert.fileContent('src/styles/main.scss', '');
    });

    it('should add ui-router to the package.json', () => {
      assert.fileContent('package.json', /"dependencies": {[^}]*"angular-ui-router": "\^[\w\.\-]+"/);
    });

    it('should import ui-router in the app modules', () => {
      assert.fileContent('src/app/app.js', 'import uiRouter from \'angular-ui-router\';');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?uiRouter/);
    });
  });

  testStyles();
  testResource();
  testEnvironments();
  testAngularTranslate();
  testUIFrameworks();
  testLinters();
  testCSSPreprocessors();
});
