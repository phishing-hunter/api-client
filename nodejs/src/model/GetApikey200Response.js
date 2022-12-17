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

import ApiClient from '../ApiClient';

/**
 * The GetApikey200Response model module.
 * @module model/GetApikey200Response
 * @version 1.0
 */
class GetApikey200Response {
    /**
     * Constructs a new <code>GetApikey200Response</code>.
     * @alias module:model/GetApikey200Response
     */
    constructor() { 
        
        GetApikey200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetApikey200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetApikey200Response} obj Optional instance to populate.
     * @return {module:model/GetApikey200Response} The populated <code>GetApikey200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetApikey200Response();

            if (data.hasOwnProperty('api_keys')) {
                obj['api_keys'] = ApiClient.convertToType(data['api_keys'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetApikey200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetApikey200Response</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object} api_keys
 */
GetApikey200Response.prototype['api_keys'] = undefined;






export default GetApikey200Response;
