'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('when using CSS', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          cssPreprocessor: 'css'
        })
        .toPromise()
        .then(() => done());
    });

    it('should use CSSLint rules', () => {
      assert.file('.csslintrc');
      assert.fileContent('package.json', 'csslint src/styles/');
      assert.fileContent('package.json', '"csslint"');
    });

  });

  describe('when using SASS', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          cssPreprocessor: 'sass'
        })
        .toPromise()
        .then(() => done());
    });

    it('should use SCSSLint rules', () => {
      assert.file('.scsslintrc');
      assert.fileContent('package.json', 'scss-lint src/styles/');
    });

  });

};
