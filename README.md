# Generator Webpack Angular
[![Build Status](https://travis-ci.org/groupe-sii/generator-webpack-angular.svg?branch=develop)](https://travis-ci.org/groupe-sii/generator-webpack-angular)

> Yeoman generator for building Single Page Apps with AngularJS, ES6, Webpack.

## Generator

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

[![Bootstrap](assets/bootstrap.png "Bootstrap")](http://getbootstrap.com/)
[![Foundation](assets/foundation.png "Foundation")](http://foundation.zurb.com/)
[![AngularJS Material](assets/angularjs-material.png "AngularJS Material")](https://material.angularjs.org/latest/)

### Modules

[![angular-translate](assets/angular-translate.png "Angular Translate")](https://angular-translate.github.io/)
[![SonarQube](assets/sonar-qube.png "sonar-web-frontend-reporters")](https://github.com/groupe-sii/sonar-web-frontend-reporters)

## Usage

### Install

##### Install required tools `yo`:

```sh
$ npm install -g yo
```

##### Install `generator-webpack-angular`:

```sh
$ npm install generator-webpack-angular
```

### Run

##### Create a new directory, and go into:

```sh
$ mkdir my-new-project && cd my-new-project
```

##### Run `yo @groupe-sii/webpack-angular`, and select desired technologies:

```sh
$ yo @groupe-sii/webpack-angular
```

#### Use NPM scripts

- `npm run build` to build an optimized version of your application in /dist
- `npm run build` to build an optimized version of your application in /dist in a **production** environment
- `npm run serve` to launch a webpack-dev-server server on your source files
- `npm run serve:prod` to launch a webpack-dev-server server on your source files in a **production** environment
- `npm run test` to launch your unit tests with Karma

## [Changelog](https://github.com/groupe-sii/generator-webpack-angular/blob/master/CHANGELOG.md)

## License

MIT License

Copyright (c) 2016 Groupe SII
