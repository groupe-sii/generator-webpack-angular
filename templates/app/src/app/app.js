/* global process */
import angular from 'angular';
<% if (ngAnimate || uiFramework === 'ngMaterial' || uiFramework === 'bootstrap') { -%>
import ngAnimate from 'angular-animate';
<% } -%>
import ngAria from 'angular-aria';
<% if (ngCookies) { -%>
import ngCookies from 'angular-cookies';
<% } -%>
<% if (ngMessages) { -%>
import ngMessages from 'angular-messages';
<% } -%>
<% if (ngSanitize || angularTranslate) { -%>
import ngSanitize from 'angular-sanitize';
<% } -%>
<% if ((ngTouch || uiFramework === 'bootstrap') && uiFramework !== 'ngMaterial') { -%>
import ngTouch from 'angular-touch';
<% } -%>
<% if (uiFramework === 'ngMaterial') { -%>
import ngMaterial from 'angular-material';
<% } -%>
<% if (uiFramework === 'bootstrap') { -%>
import ngBootstrap from 'angular-ui-bootstrap';
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
<% if (uiFramework === 'bootstrap') { -%>
import 'bootstrap/dist/css/bootstrap.min.css';
<% } -%>

import config from 'app.config';

import appConfig from './app.config';
import appRoute from './app.route';
import appComponent from './app.component';

export default angular.module('<%= _.slugify(appName) %>', [
<% if (ngAnimate || uiFramework === 'ngMaterial' || uiFramework === 'bootstrap') { -%>
  ngAnimate,
<% } -%>
  ngAria,
<% if (ngCookies) { -%>
  ngCookies,
<% } -%>
<% if (ngMessages) { -%>
  ngMessages,
<% } -%>
<% if (ngSanitize || angularTranslate) { -%>
  ngSanitize,
<% } -%>
<% if ((ngTouch || uiFramework === 'bootstrap') && uiFramework !== 'ngMaterial') { -%>
  ngTouch,
<% } -%>
<% if (uiFramework === 'ngMaterial') { -%>
  ngMaterial,
<% } -%>
<% if (uiFramework === 'bootstrap') { -%>
  ngBootstrap,
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
.constant('ENVIRONNEMENT', process.env.ENV_NAME)
.component('app', appComponent)
.name;
