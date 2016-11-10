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
* [`scss-lint`](https://github.com/brigade/scss-lint): Code analysis for Sass. A ruby command-line, must be installed with gem.
<% } -%>
* [`karma-cli`](https://www.npmjs.com/package/karma-cli): The Karma command line interface.

## Installation

```sh
$ npm install               # Development
$ npm install --production  # Production (only `dependencies`)
```

## Linting

