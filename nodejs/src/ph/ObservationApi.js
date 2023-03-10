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


import ApiClient from "../ApiClient";
import GetObservations200Response from '../model/GetObservations200Response';
import GetScanner500Response from '../model/GetScanner500Response';
import PostObservationAddRequest from '../model/PostObservationAddRequest';
import PostObservationRemoveRequest from '../model/PostObservationRemoveRequest';

/**
* Observation service.
* @module ph/ObservationApi
* @version 1.0
*/
export default class ObservationApi {

    /**
    * Constructs a new ObservationApi. 
    * @alias module:ph/ObservationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getObservations operation.
     * @callback module:ph/ObservationApi~getObservationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetObservations200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 監視対象ドメイン一覧の取得
     * @param {module:ph/ObservationApi~getObservationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetObservations200Response}
     */
    getObservations(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['custom_authorizer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetObservations200Response;
      return this.apiClient.callApi(
        '/observation', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postObservationAdd operation.
     * @callback module:ph/ObservationApi~postObservationAddCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetScanner500Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 監視対象ドメインの追加
     * @param {Object} opts Optional parameters
     * @param {module:model/PostObservationAddRequest} opts.postObservationAddRequest 
     * @param {module:ph/ObservationApi~postObservationAddCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetScanner500Response}
     */
    postObservationAdd(opts, callback) {
      opts = opts || {};
      let postBody = opts['postObservationAddRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['custom_authorizer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetScanner500Response;
      return this.apiClient.callApi(
        '/observation/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postObservationRemove operation.
     * @callback module:ph/ObservationApi~postObservationRemoveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetScanner500Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 監視対象ドメインの削除
     * 
     * @param {Object} opts Optional parameters
     * @param {module:model/PostObservationRemoveRequest} opts.postObservationRemoveRequest 
     * @param {module:ph/ObservationApi~postObservationRemoveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetScanner500Response}
     */
    postObservationRemove(opts, callback) {
      opts = opts || {};
      let postBody = opts['postObservationRemoveRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['custom_authorizer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetScanner500Response;
      return this.apiClient.callApi(
        '/observation/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
