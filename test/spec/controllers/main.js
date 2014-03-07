'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('testingApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should initialize with products', function () {
    scope.$digest();
    expect(scope.products.length).toBe(3);
  });

  it('should set the selected product', function () {
    scope.$digest();
    var expectedProduct = scope.products[0];
    scope.selectProduct(expectedProduct);
    expect(scope.selectedProduct.name).toBe(expectedProduct.name);
  });
});
