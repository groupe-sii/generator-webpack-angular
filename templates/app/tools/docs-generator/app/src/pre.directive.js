'use strict';

angular.module('docApp').directive('pre', function () {
  return {
    restrict: 'E',
    link: function ($scope, $elem, $attrs) {
        angular.forEach($elem.find('code'), function(item) {
            hljs.highlightBlock(item);
        });
    }
  };
});
