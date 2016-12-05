'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('when using json-server', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          otherModules: 'json-server'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add json-server to the package.json', () => {
      assert.fileContent('package.json', /"json-server"/);
    });

    it('should generate default server files', () => {
      assert.file('json-server/db.json');
      assert.file('json-server/routes.json');
    });

  });

};
