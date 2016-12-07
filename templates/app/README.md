# README

## Table of contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Linting](#linting)
4. [Tests](#tests)

## Prerequisites

These modules must be globally installed:

* [`eslint`](https://www.npmjs.com/package/eslint): Code analysis for JavaScript & AngularJS.
* [`htmlhint`](https://www.npmjs.com/package/htmlhint): Code analysis for HTML.
<% if (cssPreprocessor === 'css') { -%>
* [`csslint`](https://www.npmjs.com/package/csslint): Code analysis for CSS.
<% } else if (cssPreprocessor === 'sass') { -%>
* [`sass-lint`](https://github.com/sasstools/sass-lint): Code analysis for Sass.
<% } -%>

## Installation

```sh
$ npm install               # Development
$ npm install --production  # Production (only `dependencies`)
```

## Linting

```sh
$ npm run lint
```

## Tests

```sh
$ npm test           # Run linting and unit tests
$ npm run test-watch # Run unit tests (watch mode)
```
