const path    = require('path');
const helpers = require('yeoman-test');
const assert  = require('yeoman-assert');

/**
 * Test app generator.
 */
describe('app', () => {
  before((done) => {
    // Mock the options, set up an output folder and run the generator
    helpers.run(path.join(__dirname, '../generators/app'))
      .toPromise()
      .then(() => {
        done();
      });
  });

  it('should generate a README', () => {
    assert.file('README.md');
  });
});
