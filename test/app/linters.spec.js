'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('linters', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .toPromise()
        .then(() => done());
    });

    it('should add HTMLHint rules', () => {
      assert.file('.htmlhintrc');
    });

    it('should add ESLint rules', () => {
      assert.file('.eslintrc');
      assert.file('.eslintignore');
    });

    it('should use CSSLint rules', () => {

      before(done => {
        this.generator = helpers
          .run(path.join(__dirname, '../../generators/app'))
          .withPrompts({
            cssPreprocessor: 'css'
          })
          .toPromise()
          .then(() => done());
      });

      assert.file('.csslintrc');
      assert.fileContent('package.json', 'csslint src/styles/');
      assert.fileContent('package.json', '"csslint"');
    });

    it('should use SCSSLint rules', () => {

      before(done => {
        this.generator = helpers
          .run(path.join(__dirname, '../../generators/app'))
          .withPrompts({
            cssPreprocessor: 'sass'
          })
          .toPromise()
          .then(() => done());
      });

      assert.file('.scsslintrc');
      assert.fileContent('package.json', 'scss-lint src/styles/');
    });

  });

};
