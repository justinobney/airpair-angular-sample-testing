'use strict';

describe('Directive: hoverEffect', function () {

  // load the directive's module
  beforeEach(module('testingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should change the text on hover', inject(function ($compile) {
    element = angular.element('<div hover-effect></div>');
    element = $compile(element)(scope);
    element.triggerHandler('mouseenter');
    expect(element.text()).toBe('this is the hoverEffect directive');
  }));

  it('should set the text back on mouse out', inject(function ($compile) {
    element = angular.element('<div hover-effect></div>');
    element = $compile(element)(scope);

    var original = element.text();
    element.triggerHandler('mouseenter');
    expect(element.text()).toBe('this is the hoverEffect directive');

    element.triggerHandler('mouseleave');
    expect(element.text()).toBe(original);
  }));
});
