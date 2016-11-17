module.exports = {
  plugins: [
    // Reference: https://github.com/sebastian-software/postcss-smart-import
    // require('postcss-smart-import')(),

    // Reference: https://github.com/jonathantneal/precss
    // require('precss')(),

    // Reference: https://github.com/postcss/autoprefixer
    require('autoprefixer')()
  ]
};
