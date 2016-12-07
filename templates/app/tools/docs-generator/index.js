const Dgeni = require('dgeni');
const copy = require('copy');
const destPath = 'dist-docs/';
const dgeni = new Dgeni([require('./config')(destPath)]);

dgeni.generate();
copy('./tools/docs-generator/app/**/*.{js,html,css}', destPath, (err) => {
  if (err) throw err;
});

