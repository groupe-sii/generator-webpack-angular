'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

module.exports = () => {

  describe('when using AngularJS Material', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          uiFramework: 'ngMaterial'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add angular-material to the package.json', () => {
      assert.fileContent('package.json', 'angular-material');
    });

    it('should import angular-material in the angular modules', () => {
      assert.fileContent('src/app/app.js', 'import ngMaterial from \'angular-material\'');
      assert.fileContent('src/app/app.js', 'import \'angular-material/angular-material.css\'');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngMaterial/);
    });

    it('should activate angular-animate no matter the user selection (angular-material peer dependency)', () => {
      assert.fileContent('package.json', 'angular-animate');
      assert.fileContent('src/app/app.js', 'import ngAnimate from \'angular-animate\'');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngAnimate/);
    });

    it('should add material-design-icons', () => {
      assert.fileContent('package.json', 'material-design-icons');
    });

    it('shouldn\'t add angular-touch', () => {
      assert.noFileContent('package.json', 'angular-touch');
      assert.noFileContent('src/app/app.js', 'import ngTouch from \'angular-touch\'');
      assert.noFileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngTouch/);
    });

    describe('when using Sass', () => {

      before(done => {
        this.generator = helpers
          .run(path.join(__dirname, '../../generators/app'))
          .withPrompts({
            cssPreprocessor: 'sass',
            uiFramework: 'ngMaterial'
          })
          .toPromise()
          .then(() => done());
      });

    });

    describe('when using Less', () => {

      before(done => {
        this.generator = helpers
          .run(path.join(__dirname, '../../generators/app'))
          .withPrompts({
            cssPreprocessor: 'less',
            uiFramework: 'ngMaterial'
          })
          .toPromise()
          .then(() => done());
      });

    });

  });

  describe('when using Bootstrap', () => {

    before(done => {
      this.generator = helpers
        .run(path.join(__dirname, '../../generators/app'))
        .withPrompts({
          uiFramework: 'bootstrap'
        })
        .toPromise()
        .then(() => done());
    });

    it('should add bootstrap & angular-ui-bootstrap to the package.json', () => {
      assert.fileContent('package.json', 'bootstrap');
      assert.fileContent('package.json', 'angular-ui-bootstrap');
    });

    it('should activate angular-animate no matter the user selection (ui-bootstrap peer dependency)', () => {
      assert.fileContent('package.json', 'angular-animate');
      assert.fileContent('src/app/app.js', 'import ngAnimate from \'angular-animate\'');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngAnimate/);
    });

    it('should activate angular-touch no matter the user selection (ui-bootstrap peer dependency)', () => {
      assert.fileContent('package.json', 'angular-touch');
      assert.fileContent('src/app/app.js', 'import ngTouch from \'angular-touch\'');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngTouch/);
    });

    it('should import bootstrap & angular-ui-bootstrap in the angular modules', () => {
      assert.fileContent('src/app/app.js', 'import ngBootstrap from \'angular-ui-bootstrap\'');
      assert.fileContent('src/app/app.js', 'import \'bootstrap/dist/css/bootstrap.min.css\'');
      assert.fileContent('src/app/app.js', /angular\.module\([\s\S]*, [\s\S]*?ngBootstrap/);
    });

  });

};
