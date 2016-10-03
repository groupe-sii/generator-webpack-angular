import angular from 'angular';
import ngAria from 'angular-aria';

import appComponent from './app.component';

angular.module('app', [
  ngAria
])
.component('app', appComponent)
.name;
