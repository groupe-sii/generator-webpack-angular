/**
 * Application configuration.
 */
export default function ($locationProvider<% if (angularTranslate) { -%>, $translateProvider<% } -%>) {
  'ngInject';

  // Reference: https://docs.angularjs.org/api/ng/provider/$locationProvider#html5Mode
  $locationProvider.html5Mode(true);

<% if (angularTranslate) { -%>
  // Reference: https://angular-translate.github.io/docs/#/guide/12_asynchronous-loading#asynchronous-loading_using-staticfilesloader
  $translateProvider
    .useStaticFilesLoader({
      prefix: '',
      suffix: '.json'
    })
    .useSanitizeValueStrategy('sanitize')
    .preferredLanguage(navigator.browserLanguage || navigator.language);
<% } -%>

}
