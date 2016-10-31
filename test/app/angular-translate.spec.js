'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('when using angular-translate', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          resource: 'restangular'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add angular-translate to the package.json', () => {
      assert.fileContent('package.json', 'angular-translate');
    });

    it('should import angular-translate module', () => {
      assert.fileContent('src/app/app.js', 'import \'angular-translate\'');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?restangular/);
    });

  });

};
