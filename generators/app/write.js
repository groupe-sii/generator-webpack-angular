'use strict';

/**
 * This class manages App Generator writings.
 */
module.exports = {

  /**
   * Write README.
   */
  readme () {
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    );
  },

  /**
   * Write COMMITS-CONVENTION.
   */
  commitsConvention () {
    this.fs.copyTpl(
      this.templatePath('COMMITS-CONVENTION.md'),
      this.destinationPath('COMMITS-CONVENTION.md'),
      this.props
    );
  },

  /**
   * Write CHANGELOG.
   */
  changelog () {
    this.fs.copyTpl(
      this.templatePath('CHANGELOG.md'),
      this.destinationPath('CHANGELOG.md'),
      this.props
    );
  },

  /**
   * Write webpack.config.js.
   */
  webpack () {
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('postcss.config.js'),
      this.destinationPath('postcss.config.js')
    );
  },

  /**
   * Write src directory.
   */
  src () {
    this.fs.copyTpl(
      this.templatePath('src/app'),
      this.destinationPath('src/app'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('src/config/**!(i18n)'),
      this.destinationPath('src/config'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('src/public'),
      this.destinationPath('src/public'),
      this.props
    );
  },

  /**
   * Write tools directory
   */
  tools () {
    this.fs.copyTpl(
      this.templatePath('tools/git'),
      this.destinationPath('tools/git'),
      this.props
    );
  },

  /**
   * Write styles.
   */
  styles () {
    switch (this.props.cssPreprocessor) {
      case 'sass':
        this.fs.copyTpl(
          this.templatePath('src/styles-sass'),
          this.destinationPath('src/styles'),
          this.props
        );
        break;

      case 'less':
        this.fs.copyTpl(
          this.templatePath('src/styles-less'),
          this.destinationPath('src/styles'),
          this.props
        );
        break;

      default:
        this.fs.copyTpl(
          this.templatePath('src/styles'),
          this.destinationPath('src/styles'),
          this.props
        );
    }
  },

  /**
   * Write angular-translate locales
   */
  angularTranslate () {
    if (this.props.angularTranslate) {
      this.fs.copyTpl(
        this.templatePath('src/config/i18n'),
        this.destinationPath('src/config/i18n'),
        this.props
      );
    }
  },

  /**
   * Write configuration for sonar-web-frontend-reporters
   */
  sonarWebFrontendReporters () {
    if (this.props.sonarWebFrontendReporters) {
      this.fs.copyTpl(
        this.templatePath('_.sreporterrc'),
        this.destinationPath('.sreporterrc'),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('_sonar-project.properties'),
        this.destinationPath('sonar-project.properties'),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('filepath-loader.js'),
        this.destinationPath('filepath-loader.js'),
        this.props
      );
    }
  },

  /**
   * Write json-server examples
   */
  jsonServer () {
    if (this.props.jsonServer) {
      this.fs.copyTpl(
        this.templatePath('json-server'),
        this.destinationPath('json-server'),
        this.props
      );
    }
  },

  /**
   * Write docs config
   */
  docs () {
    this.fs.copyTpl(
      this.templatePath('docs/**/!(_index.ngdoc)'),
      this.destinationPath('docs'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('docs/_index.ngdoc'),
      this.destinationPath('docs/index.ngdoc'),
      this.props
    );
  },

  /**
   * Write test files
   */
  tests () {
    this.fs.copyTpl(
      this.templatePath('test'),
      this.destinationPath('test'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('karma.conf.js'),
      this.destinationPath('karma.conf.js'),
      this.props
    );
  }

};
