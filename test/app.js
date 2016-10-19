'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

let testStyles = require('./app/styles.spec');
let testResource = require('./app/resource.spec');

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

    it('should generate a README', () => {
      assert.file('README.md');
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
});
