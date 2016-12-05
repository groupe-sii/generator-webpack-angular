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

    it('should the angular package name be app name', () => {
      assert.fileContent('src/app/app.js', /angular\.module\('webpack-generator'/);
    });

    it('should the npm package name be app name', () => {
      assert.fileContent('package.json', /"name": "webpack-generator"/);
    });

    it('should the index.html title be app name', () => {
      assert.fileContent('src/public/index.html', /<title>Webpack Generator<\/title>/);
    });

  });

};
