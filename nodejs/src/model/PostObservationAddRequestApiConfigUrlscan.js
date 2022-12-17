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
 * The PostObservationAddRequestApiConfigUrlscan model module.
 * @module model/PostObservationAddRequestApiConfigUrlscan
 * @version 1.0
 */
class PostObservationAddRequestApiConfigUrlscan {
    /**
     * Constructs a new <code>PostObservationAddRequestApiConfigUrlscan</code>.
     * @alias module:model/PostObservationAddRequestApiConfigUrlscan
     */
    constructor() { 
        
        PostObservationAddRequestApiConfigUrlscan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostObservationAddRequestApiConfigUrlscan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostObservationAddRequestApiConfigUrlscan} obj Optional instance to populate.
     * @return {module:model/PostObservationAddRequestApiConfigUrlscan} The populated <code>PostObservationAddRequestApiConfigUrlscan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostObservationAddRequestApiConfigUrlscan();

            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostObservationAddRequestApiConfigUrlscan</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostObservationAddRequestApiConfigUrlscan</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['visibility'] && !(typeof data['visibility'] === 'string' || data['visibility'] instanceof String)) {
            throw new Error("Expected the field `visibility` to be a primitive type in the JSON string but got " + data['visibility']);
        }

        return true;
    }


}



/**
 * @member {String} visibility
 */
PostObservationAddRequestApiConfigUrlscan.prototype['visibility'] = undefined;






export default PostObservationAddRequestApiConfigUrlscan;

