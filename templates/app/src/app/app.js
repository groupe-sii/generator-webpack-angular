import angular from 'angular';
<% if (ngAnimate) { -%>
import ngAnimate from 'angular-animate';
<% } -%>
import ngAria from 'angular-aria';
<% if (ngCookies) { -%>
import ngCookies from 'angular-cookies';
<% } -%>
<% if (ngMessages) { -%>
import ngMessages from 'angular-messages';
<% } -%>
<% if (ngSanitize) { -%>
import ngSanitize from 'angular-sanitize';
<% } -%>
<% if (ngTouch && uiFramework !== 'ngMaterial') { -%>
import ngTouch from 'angular-touch';
<% } -%>
<% if (uiFramework === 'ngMaterial') { -%>
import ngMaterial from 'angular-material';
<% } -%>
<% if (angularTranslate) { -%>
import ngTranslate from 'angular-translate';
import ngTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';
<% } -%>
import uiRouter from 'angular-ui-router';
<% if (resource === 'ngResource') { -%>
import ngResource from 'angular-resource';
<% } -%>
<% if (resource === 'restangular') { -%>
import 'lodash';
import 'restangular';
<% } -%>

<% if (cssPreprocessor === 'sass') { -%>
import '../styles/main.scss';
<% } else if (cssPreprocessor === 'less') { -%>
import '../styles/main.less';
<% } else { -%>
import '../styles/main.css';
<% } -%>
<% if (uiFramework === 'ngMaterial') { -%>
import 'angular-material/angular-material.css';
<% } -%>

import config from 'app.config';

import appConfig from './app.config';
import appRoute from './app.route';
import appComponent from './app.component';

angular.module('app', [
<% if (ngAnimate) { -%>
  ngAnimate,
<% } -%>
  ngAria,
<% if (ngCookies) { -%>
  ngCookies,
<% } -%>
<% if (ngMessages) { -%>
  ngMessages,
<% } -%>
<% if (ngSanitize) { -%>
  ngSanitize,
<% } -%>
<% if (ngTouch && uiFramework !== 'ngMaterial') { -%>
  ngTouch,
<% } -%>
<% if (uiFramework === 'ngMaterial') { -%>
  ngMaterial,
<% } -%>
<% if (angularTranslate) { -%>
  ngTranslate,
  ngTranslateLoaderStaticFiles,
<% } -%>
<% if (resource === 'ngResource') { -%>
  ngResource,
<% } -%>
<% if (resource === 'restangular') { -%>
  'restangular',
<% } -%>
  uiRouter
])
.config(appConfig)
.config(appRoute)
.constant('CONFIG', config)
.component('app', appComponent);
