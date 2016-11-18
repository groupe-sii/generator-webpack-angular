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

    it('should add a main.css file', () => {
      assert.file('src/styles/main.css');
    });

    it('should use CSSLint rules', () => {
      assert.file('src/.csslintrc');
      assert.fileContent('package.json', 'csslint src/styles/');
      assert.fileContent('package.json', '"csslint"');
    });

  });

  describe('when using Sass', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          cssPreprocessor: 'sass'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add a main.scss file', () => {
      assert.file('src/styles/main.scss');
    });

    it('should create a 7-1 pattern', () => {
      assert.file('src/styles/README.md');
      assert.file('src/styles/abstracts/README.md');
      assert.file('src/styles/base/README.md');
      assert.file('src/styles/components/README.md');
      assert.file('src/styles/layout/README.md');
      assert.file('src/styles/pages/README.md');
      assert.file('src/styles/themes/README.md');
      assert.file('src/styles/vendors/README.md');
    });

    it('should use SCSSLint rules', () => {
      assert.file('src/.scsslintrc');
      assert.fileContent('package.json', 'scss-lint src/styles/');
    });

  });

  describe('when using Less', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          cssPreprocessor: 'less'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add a main.less file', () => {
      assert.file('src/styles/main.less');
    });

    it('should create a 7-1 pattern', () => {
      assert.file('src/styles/README.md');
      assert.file('src/styles/abstracts/README.md');
      assert.file('src/styles/base/README.md');
      assert.file('src/styles/components/README.md');
      assert.file('src/styles/layout/README.md');
      assert.file('src/styles/pages/README.md');
      assert.file('src/styles/themes/README.md');
      assert.file('src/styles/vendors/README.md');
    });

  });

};
