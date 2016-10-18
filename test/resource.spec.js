'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('resource', () => {

  describe('when using restangular', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          resource: 'restangular'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add restangular to the package.json', () => {
      assert.fileContent('package.json', 'restangular');
    });

    it('should import restangular in the angular modules', () => {
      assert.fileContent('src/app/app.js', 'import restangular from \'restangular\'');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?restangular/);
    });

  });

  describe('when using ngResource', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          resource: 'ngResource'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add angular-resource to the package.json', () => {
      assert.fileContent('package.json', 'angular-resource');
    });

    it('should import angular-resource in the angular modules', () => {
      assert.fileContent('src/app/app.js', 'import ngResource from \'angular-resource\'');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngResource/);
    });

  });

});
