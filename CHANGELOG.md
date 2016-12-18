# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

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
- **debug**: Disable the [debug info](https://docs.angularjs.org/api/ng/provider/$compileProvider#debugInfoEnabled) in production environement from [@ole]
- **sonar**: Generate linters reporters for the [SonarQube](https://github.com/groupe-sii/sonar-web-frontend-plugin) plugin from [@ValentinGot]
- **json-server**: Allows you to easily create a RESTFull API for your application from [@ole]
- **application name**: Let's you choose the name of your application from [@ole]
- **documentation**: Generate documentation with dgeni from [@ole]
- **tests**: Create unit tests with Karma from [@jledentu]

[@aguele]: https://github.com/aguele
[@jledentu]: https://github.com/jledentu
[@ole]: https://github.com/liollury
[@ValentinGot]: https://github.com/ValentinGot
