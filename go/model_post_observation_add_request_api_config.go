/*
Phishing Hunter API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package phishing_hunter

import (
	"encoding/json"
)

// checks if the PostObservationAddRequestApiConfig type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostObservationAddRequestApiConfig{}

// PostObservationAddRequestApiConfig struct for PostObservationAddRequestApiConfig
type PostObservationAddRequestApiConfig struct {
	Urlscan *PostObservationAddRequestApiConfigUrlscan `json:"urlscan,omitempty"`
}

// NewPostObservationAddRequestApiConfig instantiates a new PostObservationAddRequestApiConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostObservationAddRequestApiConfig() *PostObservationAddRequestApiConfig {
	this := PostObservationAddRequestApiConfig{}
	return &this
}

// NewPostObservationAddRequestApiConfigWithDefaults instantiates a new PostObservationAddRequestApiConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostObservationAddRequestApiConfigWithDefaults() *PostObservationAddRequestApiConfig {
	this := PostObservationAddRequestApiConfig{}
	return &this
}

// GetUrlscan returns the Urlscan field value if set, zero value otherwise.
func (o *PostObservationAddRequestApiConfig) GetUrlscan() PostObservationAddRequestApiConfigUrlscan {
	if o == nil || isNil(o.Urlscan) {
		var ret PostObservationAddRequestApiConfigUrlscan
		return ret
	}
	return *o.Urlscan
}

// GetUrlscanOk returns a tuple with the Urlscan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostObservationAddRequestApiConfig) GetUrlscanOk() (*PostObservationAddRequestApiConfigUrlscan, bool) {
	if o == nil || isNil(o.Urlscan) {
		return nil, false
	}
	return o.Urlscan, true
}

// HasUrlscan returns a boolean if a field has been set.
func (o *PostObservationAddRequestApiConfig) HasUrlscan() bool {
	if o != nil && !isNil(o.Urlscan) {
		return true
	}

	return false
}

// SetUrlscan gets a reference to the given PostObservationAddRequestApiConfigUrlscan and assigns it to the Urlscan field.
func (o *PostObservationAddRequestApiConfig) SetUrlscan(v PostObservationAddRequestApiConfigUrlscan) {
	o.Urlscan = &v
}

func (o PostObservationAddRequestApiConfig) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostObservationAddRequestApiConfig) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Urlscan) {
		toSerialize["urlscan"] = o.Urlscan
	}
	return toSerialize, nil
}

type NullablePostObservationAddRequestApiConfig struct {
	value *PostObservationAddRequestApiConfig
	isSet bool
}

func (v NullablePostObservationAddRequestApiConfig) Get() *PostObservationAddRequestApiConfig {
	return v.value
}

func (v *NullablePostObservationAddRequestApiConfig) Set(val *PostObservationAddRequestApiConfig) {
	v.value = val
	v.isSet = true
}

func (v NullablePostObservationAddRequestApiConfig) IsSet() bool {
	return v.isSet
}

func (v *NullablePostObservationAddRequestApiConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostObservationAddRequestApiConfig(val *PostObservationAddRequestApiConfig) *NullablePostObservationAddRequestApiConfig {
	return &NullablePostObservationAddRequestApiConfig{value: val, isSet: true}
}

func (v NullablePostObservationAddRequestApiConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostObservationAddRequestApiConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


