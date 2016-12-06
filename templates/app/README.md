# README

## Table of contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Linting](#linting)

## Prerequisites

These modules must be globally installed:

* [`eslint`](https://www.npmjs.com/package/eslint): Code analysis for JavaScript & AngularJS.
* [`htmlhint`](https://www.npmjs.com/package/htmlhint): Code analysis for HTML.
<% if (cssPreprocessor === 'css') { -%>
* [`csslint`](https://www.npmjs.com/package/csslint): Code analysis for CSS.
<% } else if (cssPreprocessor === 'sass') { -%>
* [`sass-lint`](https://github.com/sasstools/sass-lint): Code analysis for Sass.
<% } -%>
* [`karma-cli`](https://www.npmjs.com/package/karma-cli): The Karma command line interface.

## Installation

```sh
$ npm install               # Development
$ npm install --production  # Production (only `dependencies`)
```

## Scripts

- `<%=packageManager -%> start` to launch `npm run server` and `json-server` (if checked) in parallel
- `<%=packageManager -%> run serve` to launch a webpack-dev-server server on your source files
- `<%=packageManager -%> run serve:prod` to launch a webpack-dev-server server on your source files in a **production** environment
- `<%=packageManager -%> run build` to build an optimized version of your application in /dist
- `<%=packageManager -%> run build:prod` to build an optimized version of your application in /dist in a **production** environment
- `<%=packageManager -%> run test` to launch your unit tests with Karma
- `<%=packageManager -%> run lint` to launch linting process
<% if (sonarWebFrontendReporters) { -%>
- `<%=packageManager -%> run lint` to create the linters reporters for SonarQube plugin
<% } -%>
<% if (jsonServer) { -%>
- `<%=packageManager -%> run lint` to start a json-server
<% } -%>
