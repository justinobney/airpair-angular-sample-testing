'use strict';

angular.module('testingApp')
  .controller('MainCtrl', function ($scope, Productservice) {
    
    $scope.selectProduct = function(product){
      $scope.selectedProduct = product;
    };

    init();
    function init(){
      Productservice.all().then(function(_products){
        $scope.products = _products;
      });
    }
  });
