# README

## Table of contents

1. [Prerequisites](#prerequisites)
1. [Installation](#installation)
1. [Scripts](#scripts)
1. [Contribute - Git](#contribute-git)
<% if (cssPreprocessor === 'sass' || cssPreprocessor === 'less') { -%>
1. [Styling](#styling)
<% } -%>
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

## Scripts

- `<%=packageManager -%> start` to launch `npm run server` and `json-server` (if checked) in parallel
- `<%=packageManager -%> run serve` to launch a webpack-dev-server server on your source files
- `<%=packageManager -%> run serve:prod` to launch a webpack-dev-server server on your source files in a **production** environment
- `<%=packageManager -%> run build` to build an optimized version of your application in /dist
- `<%=packageManager -%> run build:prod` to build an optimized version of your application in /dist in a **production** environment
- `<%=packageManager -%> run test` to launch your unit tests with Karma
- `<%=packageManager -%> run lint` to launch linting process
<% if (sonarWebFrontendReporters) { -%>
- `<%=packageManager -%> run sonar:reporters` to create the linters reporters for SonarQube plugin
<% } -%>
<% if (jsonServer) { -%>
- `<%=packageManager -%> run json-server` to start a json-server
<% } -%>

## Contribute - Git

See [commits convention](COMMITS-CONVENTION.md).

## Configuration

See [configuration documentation](src/config/README.md).

<% if (cssPreprocessor === 'sass' || cssPreprocessor === 'less') { -%>
## Styling

See styling [guidelines](src/styles/README.md).
<% } -%>
