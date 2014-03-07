'use strict';

describe('Service: Productservice', function () {

  // load the service's module
  beforeEach(module('testingApp'));

  // instantiate service
  var Productservice,
    $timeout;

  beforeEach(inject(function ($injector) {
    Productservice = $injector.get('Productservice');
    $timeout = $injector.get('$timeout');
  }));

  it('should do something', function () {
    expect(!!Productservice).toBe(true);
  });

  it('should do something', function () {
    var products;
    Productservice.all().then(function(_products){
      products = _products;
    });
    $timeout.flush();
    expect(products.length).toBe(3);
  });

});
