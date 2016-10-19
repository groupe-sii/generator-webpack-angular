'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('when using less', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          cssPreprocessor: 'less'
        })
        .toPromise()
        .then(() => done());
    });

    it('should generate a main LESS file', () => {
      assert.file('src/styles/main.less');
      assert.fileContent('src/styles/main.less', '');
    });
  });

  describe('when using css', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          cssPreprocessor: 'css'
        })
        .toPromise()
        .then(() => done());
    });

    it('should generate a main CSS file', () => {
      assert.file('src/styles/main.css');
      assert.fileContent('src/styles/main.css', '');
    });
  });
};
