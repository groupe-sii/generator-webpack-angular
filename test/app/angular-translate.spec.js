'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('when using angular-translate', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          otherModules: 'angular-translate'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add angular-translate to the package.json', () => {
      assert.fileContent('package.json', /"angular-translate"/);
      assert.fileContent('package.json', /"angular-translate-loader-static-files"/);
    });

    it('should import angular-translate module', () => {
      assert.fileContent('src/app/app.js', 'import ngTranslate from \'angular-translate\'');
      assert.fileContent('src/app/app.js', 'import ngTranslateLoaderStaticFiles from \'angular-translate-loader-static-files\'');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngTranslate/);
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngTranslateLoaderStaticFiles/);
    });

    it('should copy locale files to build the build folder', () => {
      assert.fileContent('webpack.config.js', '{ from: \'src/config/i18n\' }');
    });

    it('should generate default locale files', () => {
      assert.file('src/config/i18n/fr.json');
      assert.file('src/config/i18n/en.json');
    });

    it('should create an angular-translate section in config README', () => {
      assert.fileContent('src/config/README.md', 'Angular Translate');
    });

  });

};
