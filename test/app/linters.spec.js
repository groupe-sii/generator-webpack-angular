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
      assert.file('src/.htmlhintrc');
    });

    it('should add ESLint rules', () => {
      assert.file('src/.eslintrc');
    });

  });

};
