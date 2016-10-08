import angular from 'angular';
import ngAria from 'angular-aria';

<% if (cssPreprocessor === 'sass') { -%>
import '../styles/main.scss';
<% } else if (cssPreprocessor === 'less') { -%>
import '../styles/main.less';
<% } else { -%>
import '../styles/main.css';
<% } -%>

import appComponent from './app.component';

angular.module('app', [
  ngAria
])
.component('app', appComponent)
.name;
