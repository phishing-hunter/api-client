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
 * The PostScannerAdd200Response model module.
 * @module model/PostScannerAdd200Response
 * @version 1.0
 */
class PostScannerAdd200Response {
    /**
     * Constructs a new <code>PostScannerAdd200Response</code>.
     * @alias module:model/PostScannerAdd200Response
     */
    constructor() { 
        
        PostScannerAdd200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostScannerAdd200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostScannerAdd200Response} obj Optional instance to populate.
     * @return {module:model/PostScannerAdd200Response} The populated <code>PostScannerAdd200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostScannerAdd200Response();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostScannerAdd200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostScannerAdd200Response</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} result
 */
PostScannerAdd200Response.prototype['result'] = undefined;






export default PostScannerAdd200Response;

