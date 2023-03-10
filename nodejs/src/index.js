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


import ApiClient from './ApiClient';
import GetApikey200Response from './model/GetApikey200Response';
import GetApikeys200Response from './model/GetApikeys200Response';
import GetApikeys200ResponseApiKeys from './model/GetApikeys200ResponseApiKeys';
import GetHunting200Response from './model/GetHunting200Response';
import GetHunting200ResponseKeywords from './model/GetHunting200ResponseKeywords';
import GetNotifySlack200Response from './model/GetNotifySlack200Response';
import GetNotifySlack200ResponseHunting from './model/GetNotifySlack200ResponseHunting';
import GetObservations200Response from './model/GetObservations200Response';
import GetScanner200Response from './model/GetScanner200Response';
import GetScanner500Response from './model/GetScanner500Response';
import GetUsersInfo200Response from './model/GetUsersInfo200Response';
import GetUsersInfo200ResponseQuota from './model/GetUsersInfo200ResponseQuota';
import PostApikeyCreate200Response from './model/PostApikeyCreate200Response';
import PostApikeyCreateRequest from './model/PostApikeyCreateRequest';
import PostApikeyDelete200Response from './model/PostApikeyDelete200Response';
import PostNotifySlackRequest from './model/PostNotifySlackRequest';
import PostObservationAddRequest from './model/PostObservationAddRequest';
import PostObservationAddRequestApiConfig from './model/PostObservationAddRequestApiConfig';
import PostObservationAddRequestApiConfigUrlscan from './model/PostObservationAddRequestApiConfigUrlscan';
import PostObservationRemoveRequest from './model/PostObservationRemoveRequest';
import PostScannerAdd200Response from './model/PostScannerAdd200Response';
import PostScannerAddRequest from './model/PostScannerAddRequest';
import HuntingApi from './ph/HuntingApi';
import ObservationApi from './ph/ObservationApi';
import ScannerApi from './ph/ScannerApi';
import SettingsApi from './ph/SettingsApi';
import UserApi from './ph/UserApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PhishingHunterApi = require('index'); // See note below*.
* var xxxSvc = new PhishingHunterApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PhishingHunterApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PhishingHunterApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PhishingHunterApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The GetApikey200Response model constructor.
     * @property {module:model/GetApikey200Response}
     */
    GetApikey200Response,

    /**
     * The GetApikeys200Response model constructor.
     * @property {module:model/GetApikeys200Response}
     */
    GetApikeys200Response,

    /**
     * The GetApikeys200ResponseApiKeys model constructor.
     * @property {module:model/GetApikeys200ResponseApiKeys}
     */
    GetApikeys200ResponseApiKeys,

    /**
     * The GetHunting200Response model constructor.
     * @property {module:model/GetHunting200Response}
     */
    GetHunting200Response,

    /**
     * The GetHunting200ResponseKeywords model constructor.
     * @property {module:model/GetHunting200ResponseKeywords}
     */
    GetHunting200ResponseKeywords,

    /**
     * The GetNotifySlack200Response model constructor.
     * @property {module:model/GetNotifySlack200Response}
     */
    GetNotifySlack200Response,

    /**
     * The GetNotifySlack200ResponseHunting model constructor.
     * @property {module:model/GetNotifySlack200ResponseHunting}
     */
    GetNotifySlack200ResponseHunting,

    /**
     * The GetObservations200Response model constructor.
     * @property {module:model/GetObservations200Response}
     */
    GetObservations200Response,

    /**
     * The GetScanner200Response model constructor.
     * @property {module:model/GetScanner200Response}
     */
    GetScanner200Response,

    /**
     * The GetScanner500Response model constructor.
     * @property {module:model/GetScanner500Response}
     */
    GetScanner500Response,

    /**
     * The GetUsersInfo200Response model constructor.
     * @property {module:model/GetUsersInfo200Response}
     */
    GetUsersInfo200Response,

    /**
     * The GetUsersInfo200ResponseQuota model constructor.
     * @property {module:model/GetUsersInfo200ResponseQuota}
     */
    GetUsersInfo200ResponseQuota,

    /**
     * The PostApikeyCreate200Response model constructor.
     * @property {module:model/PostApikeyCreate200Response}
     */
    PostApikeyCreate200Response,

    /**
     * The PostApikeyCreateRequest model constructor.
     * @property {module:model/PostApikeyCreateRequest}
     */
    PostApikeyCreateRequest,

    /**
     * The PostApikeyDelete200Response model constructor.
     * @property {module:model/PostApikeyDelete200Response}
     */
    PostApikeyDelete200Response,

    /**
     * The PostNotifySlackRequest model constructor.
     * @property {module:model/PostNotifySlackRequest}
     */
    PostNotifySlackRequest,

    /**
     * The PostObservationAddRequest model constructor.
     * @property {module:model/PostObservationAddRequest}
     */
    PostObservationAddRequest,

    /**
     * The PostObservationAddRequestApiConfig model constructor.
     * @property {module:model/PostObservationAddRequestApiConfig}
     */
    PostObservationAddRequestApiConfig,

    /**
     * The PostObservationAddRequestApiConfigUrlscan model constructor.
     * @property {module:model/PostObservationAddRequestApiConfigUrlscan}
     */
    PostObservationAddRequestApiConfigUrlscan,

    /**
     * The PostObservationRemoveRequest model constructor.
     * @property {module:model/PostObservationRemoveRequest}
     */
    PostObservationRemoveRequest,

    /**
     * The PostScannerAdd200Response model constructor.
     * @property {module:model/PostScannerAdd200Response}
     */
    PostScannerAdd200Response,

    /**
     * The PostScannerAddRequest model constructor.
     * @property {module:model/PostScannerAddRequest}
     */
    PostScannerAddRequest,

    /**
    * The HuntingApi service constructor.
    * @property {module:ph/HuntingApi}
    */
    HuntingApi,

    /**
    * The ObservationApi service constructor.
    * @property {module:ph/ObservationApi}
    */
    ObservationApi,

    /**
    * The ScannerApi service constructor.
    * @property {module:ph/ScannerApi}
    */
    ScannerApi,

    /**
    * The SettingsApi service constructor.
    * @property {module:ph/SettingsApi}
    */
    SettingsApi,

    /**
    * The UserApi service constructor.
    * @property {module:ph/UserApi}
    */
    UserApi
};
