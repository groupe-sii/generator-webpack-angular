/**
 * Application configuration.
 */
export default function (ENVIRONNEMENT, $locationProvider<% if (angularTranslate) { -%>, $translateProvider<% } -%>) {
  'ngInject';

  // Reference: https://docs.angularjs.org/api/ng/provider/$locationProvider#html5Mode
  $locationProvider.html5Mode(true);

  // Reference : http://blog.thoughtram.io/angularjs/2014/12/22/exploring-angular-1.3-disabling-debug-info.html
  $compileProvider.debugInfoEnabled(ENVIRONNEMENT !== 'prod');

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
