/**
 * Config API
 * Collection of Configuration Endpoints
 *
 * The version of the OpenAPI document: 1.0.3
 * Contact: mstevens@atlan-tics.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface VariantAndConfigs { 
    /**
     * The name of the variant that will be created. Must be unique 
     */
    variantName: string;
    /**
     * Unix timestamp for when you want this variant to activate
     */
    valid_from?: number;
    configIds: Array<number>;
}
