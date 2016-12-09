'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('Unit tests', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .toPromise()
        .then(() => done());
    });

    it('should write karma.conf.js', () => {
      assert.file('karma.conf.js');
    });

    it('should add karma/mocha packages to the package.json', () => {
      assert.fileContent('package.json', /"devDependencies": {[^}]*"babel-plugin-istanbul": "\^[\w\.\-]+"/);
      assert.fileContent('package.json', /"devDependencies": {[^}]*"karma": "\^[\w\.\-]+"/);
      assert.fileContent('package.json', /"devDependencies": {[^}]*"mocha": "\^[\w\.\-]+"/);
      assert.fileContent('package.json', /"devDependencies": {[^}]*"chai": "\^[\w\.\-]+"/);
      assert.fileContent('package.json', /"devDependencies": {[^}]*"karma-webpack": "\^[\w\.\-]+"/);
      assert.fileContent('package.json', /"devDependencies": {[^}]*"karma-mocha": "\^[\w\.\-]+"/);
      assert.fileContent('package.json', /"devDependencies": {[^}]*"karma-chai": "\^[\w\.\-]+"/);
      assert.fileContent('package.json', /"devDependencies": {[^}]*"karma-phantomjs-launcher": "\^[\w\.\-]+"/);
      assert.fileContent('package.json', /"devDependencies": {[^}]*"karma-sourcemap-loader": "\^[\w\.\-]+"/);
      assert.fileContent('package.json', /"devDependencies": {[^}]*"karma-spec-reporter": "[\w\.\-]+"/);
    });

    it('should write test files', () => {
      assert.file('test/unit.spec.js');
      assert.file('test/unit/app.spec.js');
    });

  });

};
