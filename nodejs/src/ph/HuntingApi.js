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
import GetHunting200Response from '../model/GetHunting200Response';
import GetScanner500Response from '../model/GetScanner500Response';
import PostScannerAdd200Response from '../model/PostScannerAdd200Response';

/**
* Hunting service.
* @module ph/HuntingApi
* @version 1.0
*/
export default class HuntingApi {

    /**
    * Constructs a new HuntingApi. 
    * @alias module:ph/HuntingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getHunting operation.
     * @callback module:ph/HuntingApi~getHuntingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetHunting200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ハンティング設定の取得
     * @param {module:ph/HuntingApi~getHuntingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetHunting200Response}
     */
    getHunting(callback) {
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
      let returnType = GetHunting200Response;
      return this.apiClient.callApi(
        '/hunting', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postHunting operation.
     * @callback module:ph/HuntingApi~postHuntingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostScannerAdd200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ハンティング設定の更新
     * @param {Object} opts Optional parameters
     * @param {module:model/GetHunting200Response} opts.getHunting200Response 
     * @param {module:ph/HuntingApi~postHuntingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostScannerAdd200Response}
     */
    postHunting(opts, callback) {
      opts = opts || {};
      let postBody = opts['getHunting200Response'];

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
      let returnType = PostScannerAdd200Response;
      return this.apiClient.callApi(
        '/hunting', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
