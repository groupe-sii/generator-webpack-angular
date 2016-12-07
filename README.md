# Generator Webpack Angular
[![Build Status](https://travis-ci.org/groupe-sii/generator-webpack-angular.svg?branch=develop)](https://travis-ci.org/groupe-sii/generator-webpack-angular)

> Yeoman generator for building Single Page Apps with AngularJS, ES6, Webpack.

## Generator

What's included in details over [here](docs/STACK.md)

### Stack

[![AngularJS](assets/angularjs.png "AngularJS")](https://angularjs.org/)
[![Webpack](assets/webpack.png "Webpack")](https://webpack.github.io/)
[![Karma](assets/karma.png "Karma")](https://karma-runner.github.io)
[![ESLint](assets/eslint.png "ESLint")](http://eslint.org/)

### CSS preprocessors

![CSS](assets/css3.png "CSS 3")
[![Sass](assets/sass.png "Sass")](http://sass-lang.com/)
[![Less](assets/less.png "Less")](http://lesscss.org/)

### UI Frameworks

[![AngularJS Material](assets/angularjs-material.png "AngularJS Material")](https://material.angularjs.org/latest/)
[![Bootstrap](assets/bootstrap.png "Bootstrap")](http://getbootstrap.com/)

### Modules

[![angular-translate](assets/angular-translate.png "Angular Translate")](https://angular-translate.github.io/)
[![json-server](assets/json-server.png "JSON Server")](https://github.com/typicode/json-server)
[![SonarQube](assets/sonar-qube.png "sonar-web-frontend-reporters")](https://github.com/groupe-sii/sonar-web-frontend-reporters)

### Package Managers

[![npm](assets/npm.png "npm")](https://www.npmjs.com/)
[![Yarn](assets/yarn.png "Yarn")](https://yarnpkg.com/)

## Usage

### Install

#### Install required tools `yo`:

```sh
$ npm install -g yo
```

#### Install `generator-webpack-angular`:

```sh
$ npm install @groupe-sii/generator-webpack-angular
```

### Run

#### Create a new directory, and go into:

```sh
$ mkdir my-new-project && cd my-new-project
```

#### Run `yo @groupe-sii/webpack-angular`, and select desired technologies:

```sh
$ yo @groupe-sii/webpack-angular
```

#### Use NPM scripts

- `npm start` to launch `npm run server` and `json-server` (if checked) in parallel
- `npm run serve` to launch a webpack-dev-server server on your source files
- `npm run serve:prod` to launch a webpack-dev-server server on your source files in a **production** environment
- `npm run build` to build an optimized version of your application in /dist
- `npm run build:prod` to build an optimized version of your application in /dist in a **production** environment
- `npm run test` to launch your unit tests with Karma
- `npm run docs` to launch Dgeni docs generator
- `npm run lint` to launch linting process
- `npm run sonar:reporters` to create the linters reporters for SonarQube plugin (Only if it was chosen)
- `npm run json-server` to start a json-server (Only if it was chosen)

## [Changelog](https://github.com/groupe-sii/generator-webpack-angular/blob/master/CHANGELOG.md)

## Roadmap

- [x] How to call REST APIs ? ($resource, Restangular)
- [x] Handle environments
- [x] angular-translate support
- [x] UI Router as default router
- [x] CSS preprocessors (CSS, Sass, Less)
- [x] Angular modules choice (angular-animate, angular-touch, ...)
- [x] UI Frameworks choice (angular-material, bootstrap)
- [x] Linters (ESLint, HTMLHint, SASSLint, CSSLint)
- [x] PostCSS integration
- [x] Mock server REST API with json-server
- [x] Sonar reporters
- [x] Ask user for application name
- [x] Unit tests with Karma and Mocha
- [x] Code coverage
- [ ] Landing page post generation
- [x] Dgeni to generate documentation

## License

MIT License

Copyright (c) 2016 Groupe SII
