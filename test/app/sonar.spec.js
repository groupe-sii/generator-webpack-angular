'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('when using sonar-web-frontend-reporters', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          appName: 'Webpack Generator',
          otherModules: 'sonar-web-frontend-reporters'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add sonar-web-frontend-reporters to the package.json', () => {
      assert.fileContent('package.json', /"sonar-web-frontend-reporters"/);
    });

    it('should create the reporters script', () => {
      assert.fileContent('package.json', /"sonar:reporters": "node_modules\/.bin\/sreporter"/);
    });

    it('should generate the sonar-web-frontend-reporters configuration file', () => {
      assert.file('.sreporterrc');
    });

    it('should use the app name in the sonar-web-frontend-reporters configuration file', () => {
      assert.jsonFileContent('.sreporterrc', {projectName: 'Webpack Generator'});
    });

    it('should generate the sonar-web-frontend-plugin configuration file', () => {
      assert.file('sonar-project.properties');
    });

    it('should use the app name in the sonar-web-frontend-plugin configuration file', () => {
      assert.fileContent('sonar-project.properties', /sonar.projectKey=webpack-generator/);
      assert.fileContent('sonar-project.properties', /sonar.projectName=Webpack Generator/);
    });

    describe('when using CSS', () => {

      before(done => {
        this.generator = helpers
          .run(path.join(__dirname, '../../generators/app'))
          .withPrompts({
            cssPreprocessor: 'css',
            otherModules: 'sonar-web-frontend-reporters'
          })
          .toPromise()
          .then(() => done());
      });

      it('should create CSSLint reporter', () => {
        assert.fileContent('.sreporterrc', 'csslint');
      });
    });

    describe('when using SASS', () => {

      before(done => {
        this.generator = helpers
          .run(path.join(__dirname, '../../generators/app'))
          .withPrompts({
            cssPreprocessor: 'sass',
            otherModules: 'sonar-web-frontend-reporters'
          })
          .toPromise()
          .then(() => done());
      });

      it('should create SASSLint reporter', () => {
        assert.fileContent('.sreporterrc', 'sass-to-scsslint');
      });
    });
  });
};
