'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('when changing app name', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          appName: 'Webpack Generator'
        })
        .toPromise()
        .then(() => done());
    });

    it('should use the slugified app name as the angular package', () => {
      assert.fileContent('src/app/app.js', /angular\.module\('webpack-generator'/);
    });

    it('should use the app name in the package.json', () => {
      assert.jsonFileContent('package.json', {name: 'webpack-generator'});
    });

    it('should use the app name for the HTML title', () => {
      assert.fileContent('src/public/index.html', /<title>Webpack Generator<\/title>/);
    });

    it('should use the slugified app name for the ng-app directive', () => {
      assert.fileContent('src/public/index.html', /ng-app="webpack-generator"/);
    });

  });

};
