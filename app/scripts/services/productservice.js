'use strict';

angular.module('testingApp')
  .service('Productservice', function Productservice($q) {
    var service = this;

    service.all = function(){
      return $q
        .when([
          {name: 'product 1', cost: 1},
          {name: 'product 2', cost: 2},
          {name: 'product 3', cost: 3}
        ]);
    }
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
