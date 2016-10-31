'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('environments settings', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .toPromise()
        .then(() => done());
    });

    it('should generate a README', () => {
      assert.file('src/config/README.md');
    });

    it('should generate default config files', () => {
      assert.file('src/config/config.dev.json');
      assert.file('src/config/config.prod.json');
    });

  });

};
