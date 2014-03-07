'use strict';

angular.module('testingApp')
  .directive('hoverEffect', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var original;
        element.on('mouseenter', function(){
          original = element.text();
          element.text('this is the hoverEffect directive');
        });

        element.on('mouseleave', function(){
          element.text(original);
        });
      }
    };
  });
