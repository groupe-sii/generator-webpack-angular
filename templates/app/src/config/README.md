# Configuration

## Environments

To add an environment configuration file, just create a new `config.ENV.json` file.

Use the new environment:

```sh
$ npm run-script start --env ENV
$ npm run-script build --env ENV
```

By default, the application is launched in `dev` environment.

<% if (angularTranslate) { -%>
## [Angular Translate](https://angular-translate.github.io/)

### Configuration

Locale translation files are located under `/src/config/i18n` folder.

angular-translate is configured via the `$translateProvider` under `src/app/app.config.js` file.

### Asynchronous 

All translations from different languages are loaded asynchronously via a static asynchronous loader.

https://angular-translate.github.io/docs/#/guide/12_asynchronous-loading#asynchronous-loading_using-staticfilesloader
<% } -%>
