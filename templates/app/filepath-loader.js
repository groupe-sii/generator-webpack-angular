/**
 * This Webpack loader adds file path in unit test files.
 */
module.exports = function (content) {
  let path = this.resourcePath.replace(/\\/g, '\\\\');
  return content.replace(/^(describe\(([^{])+{)/m, '$1beforeEach(function() {window.__setCurrentFile(\'' + path + '\')});\n');
};
