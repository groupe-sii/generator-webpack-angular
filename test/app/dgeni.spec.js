'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('when using docs', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          appName: 'Webpack Generator'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add webpack-angular-dgeni-plugin to the package.json', () => {
      assert.fileContent('package.json', /"webpack-angular-dgeni-plugin"/);
    });

    it('should have default ngdocs files', () => {
      assert.file('docs/api.ngdoc');
      assert.file('docs/guide.ngdoc');
      assert.file('docs/guide/howToUse.ngdoc');
      assert.noFile('docs/_index.ngdoc');
      assert.fileContent('docs/index.ngdoc', /Webpack Generator/);
    });

  });

};
