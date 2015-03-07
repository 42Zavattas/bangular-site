'use strict';

angular.module('bangular')
  .directive('navBar', function () {
    return {
      restrict: 'EA',
      templateUrl: 'directives/nav-bar/nav-bar.html'
    };
  });
