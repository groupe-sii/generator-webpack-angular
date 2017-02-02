# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

### Added

- **package.json**: new script (**server:https**) to launch the development server in HTTPs mode from [@liollury]

### Changed

- **package.json**: upgrade AngularJS packages version to 1.6.1 from [@ValentinGot]
- **package.json**: upgrade Babel packages version (babel-core, babel-loader, babel-plugin-istanbul, babel-preset-es2015) from [@ValentinGot]
- **package.json**: upgrade Karma packages version (karma, karma-webpack) from [@ValentinGot]
- **package.json**: upgrade angular-material version to 1.1.2 from [@liollury]
- **package.json**: upgrade some miscellaneous packages (angular-ui-router, eslint, eslint-plugin-angular, html-webpack-plugin, node-sass, postcss-loader, sass-loader, sonar-web-frontend-reporters, webpack-dev-server) from [@ValentinGot]
- **webpack**: use URL loader for png, jpg, gif, woff, woff2, ttf and svg file types from [@ValentinGot]

### Fixed

- **eslint**: update some rules ESLint rules. indent/SwitchCase (wrong indents), radix, key-spacing from [@liollury]
- **resource**: upgrade Restangular version and remove lodash import (Closes [#4](https://github.com/groupe-sii/generator-webpack-angular/issues/4)) from [@ValentinGot]
- **ui-frameworks**: import CSS frameworks before project styles to avoid style overrides from [@ValentinGot]
- **material-design-icons**: import CSS directly from NPM package (Closes [#5](https://github.com/groupe-sii/generator-webpack-angular/issues/5)) from [@ValentinGot]
- **webpack**: use `cheap-module-source-map` devtool value for source maps form [@ValentinGot]

## 0.0.4 - 2016-12-18

### Fixed

- **sonar**: path to rules files from `.sreporterrc` were not good from [@ValentinGot]
- **sonar**: path to tests folder were not good from [@ValentinGot]
- **npm**: include `templates` folder in generated npm package (Closes [#2](https://github.com/groupe-sii/generator-webpack-angular/issues/2)) from [@ValentinGot]
- **npm**: ._* files where globally ignored by npm (Closes [#2](https://github.com/groupe-sii/generator-webpack-angular/issues/2)) from [@ValentinGot]

## 0.0.3 - 2016-12-09

### Fixed

- missing package version
- **README**: add npm package version

## 0.0.2 - 2016-12-09

### Fixed

- remove npm organization from [@ValentinGot]

## 0.0.1 - 2016-12-09

### Added

- **css-preprocessors**: which CSS preprocessor do you want? from [@aguele] & [@jledentu]
- **resource**: would you like to use a REST resource library? from [@ValentinGot]
- **environments**: management application environments from [@ValentinGot]
- **angular-translate**: angular-translate (18n for your Angular app, made easy!) from [@ValentinGot]
- **ui-router**: use [AngularUI Router](https://github.com/angular-ui/ui-router) by default from [@jledentu]
- **ui-frameworks**: Which UI framework do you want? from [@ValentinGot]
- **linting**: Add ESLint, HTMLHint, SCSSLint & CSSLint support from [@ValentinGot]
- **package-manager**: Let's you choose between **npm** or **Yarn** package manager from [@ValentinGot]
- **postcss**: Add PostCSS treatments from [@ValentinGot]
- **debug**: Disable the [debug info](https://docs.angularjs.org/api/ng/provider/$compileProvider#debugInfoEnabled) in production environement from [@liollury]
- **sonar**: Generate linters reporters for the [SonarQube](https://github.com/groupe-sii/sonar-web-frontend-plugin) plugin from [@ValentinGot]
- **json-server**: Allows you to easily create a RESTFull API for your application from [@liollury]
- **application name**: Let's you choose the name of your application from [@liollury]
- **documentation**: Generate documentation with dgeni from [@liollury]
- **tests**: Create unit tests with Karma from [@jledentu]

[@aguele]: https://github.com/aguele
[@jledentu]: https://github.com/jledentu
[@liollury]: https://github.com/liollury
[@ValentinGot]: https://github.com/ValentinGot
