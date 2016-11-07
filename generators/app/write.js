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
   * Write webpack.config.js.
   */
  webpack () {
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      this.props
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
   * Write styles.
   */
  styles () {
    switch (this.props.cssPreprocessor) {
      case 'sass':
        this.fs.copyTpl(
          this.templatePath('src/styles-sass'),
          this.destinationPath('src/styles')
        );
        break;
      case 'less':
        this.fs.copyTpl(
          this.templatePath('src/styles-less'),
          this.destinationPath('src/styles')
        );
        break;
      default:
        this.fs.copyTpl(
          this.templatePath('src/styles'),
          this.destinationPath('src/styles')
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
  }

};
