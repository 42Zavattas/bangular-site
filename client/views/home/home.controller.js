'use strict';

angular.module('bangular')
  .controller('HomeCtrl', function ($sce) {

    var vm = this;

    angular.extend(vm, {
      config: {
        sources: [
          { src: $sce.trustAsResourceUrl('http://media.bangular.io/basic.mp4'), type: "video/mp4" }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css"
      }
    });

  });
