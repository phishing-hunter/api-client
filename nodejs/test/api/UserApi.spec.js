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
    instance = new PhishingHunterApi.UserApi();
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

  describe('UserApi', function() {
    describe('getApikey', function() {
      it('should call getApikey successfully', function(done) {
        //uncomment below and update the code to test getApikey
        //instance.getApikey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsersInfo', function() {
      it('should call getUsersInfo successfully', function(done) {
        //uncomment below and update the code to test getUsersInfo
        //instance.getUsersInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postApikeyCreate', function() {
      it('should call postApikeyCreate successfully', function(done) {
        //uncomment below and update the code to test postApikeyCreate
        //instance.postApikeyCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postApikeyDelete', function() {
      it('should call postApikeyDelete successfully', function(done) {
        //uncomment below and update the code to test postApikeyDelete
        //instance.postApikeyDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
