/**
 * Phishing Hunter API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PhishingHunterApi);
  }
}(this, function(expect, PhishingHunterApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PhishingHunterApi.GetApikeys200Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetApikeys200Response', function() {
    it('should create an instance of GetApikeys200Response', function() {
      // uncomment below and update the code to test GetApikeys200Response
      //var instance = new PhishingHunterApi.GetApikeys200Response();
      //expect(instance).to.be.a(PhishingHunterApi.GetApikeys200Response);
    });

    it('should have the property apiKeys (base name: "api_keys")', function() {
      // uncomment below and update the code to test the property apiKeys
      //var instance = new PhishingHunterApi.GetApikeys200Response();
      //expect(instance).to.be();
    });

  });

}));
