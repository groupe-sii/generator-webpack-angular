'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('when using AngularJS Material', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          uiFramework: 'ngMaterial'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add angular-material to the package.json', () => {
      assert.fileContent('package.json', 'angular-material');
    });

    it('should import angular-material in the angular modules', () => {
      assert.fileContent('src/app/app.js', 'import ngMaterial from \'angular-material\'');
      assert.fileContent('src/app/app.js', 'import \'angular-material/angular-material.css\'');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngMaterial/);
    });

    it('shouldn\'t add angular-touch', () => {
      assert.noFileContent('package.json', 'angular-touch');
      assert.noFileContent('src/app/app.js', 'import ngTouch from \'angular-touch\'');
      assert.noFileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngTouch/);
    });

  });

  describe('when using Bootstrap', () => {

  });

  describe('when using Foundation', () => {

  });

};
