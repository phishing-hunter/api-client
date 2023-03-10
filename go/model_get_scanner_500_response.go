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

// checks if the GetScanner500Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetScanner500Response{}

// GetScanner500Response struct for GetScanner500Response
type GetScanner500Response struct {
	Message *string `json:"message,omitempty"`
}

// NewGetScanner500Response instantiates a new GetScanner500Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetScanner500Response() *GetScanner500Response {
	this := GetScanner500Response{}
	return &this
}

// NewGetScanner500ResponseWithDefaults instantiates a new GetScanner500Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetScanner500ResponseWithDefaults() *GetScanner500Response {
	this := GetScanner500Response{}
	return &this
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *GetScanner500Response) GetMessage() string {
	if o == nil || isNil(o.Message) {
		var ret string
		return ret
	}
	return *o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetScanner500Response) GetMessageOk() (*string, bool) {
	if o == nil || isNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *GetScanner500Response) HasMessage() bool {
	if o != nil && !isNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given string and assigns it to the Message field.
func (o *GetScanner500Response) SetMessage(v string) {
	o.Message = &v
}

func (o GetScanner500Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetScanner500Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Message) {
		toSerialize["message"] = o.Message
	}
	return toSerialize, nil
}

type NullableGetScanner500Response struct {
	value *GetScanner500Response
	isSet bool
}

func (v NullableGetScanner500Response) Get() *GetScanner500Response {
	return v.value
}

func (v *NullableGetScanner500Response) Set(val *GetScanner500Response) {
	v.value = val
	v.isSet = true
}

func (v NullableGetScanner500Response) IsSet() bool {
	return v.isSet
}

func (v *NullableGetScanner500Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetScanner500Response(val *GetScanner500Response) *NullableGetScanner500Response {
	return &NullableGetScanner500Response{value: val, isSet: true}
}

func (v NullableGetScanner500Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetScanner500Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


