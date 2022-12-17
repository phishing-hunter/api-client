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

// checks if the GetNotifySlack200ResponseHunting type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetNotifySlack200ResponseHunting{}

// GetNotifySlack200ResponseHunting struct for GetNotifySlack200ResponseHunting
type GetNotifySlack200ResponseHunting struct {
	Type *string `json:"type,omitempty"`
	WebhookUrl *string `json:"webhook_url,omitempty"`
}

// NewGetNotifySlack200ResponseHunting instantiates a new GetNotifySlack200ResponseHunting object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetNotifySlack200ResponseHunting() *GetNotifySlack200ResponseHunting {
	this := GetNotifySlack200ResponseHunting{}
	return &this
}

// NewGetNotifySlack200ResponseHuntingWithDefaults instantiates a new GetNotifySlack200ResponseHunting object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetNotifySlack200ResponseHuntingWithDefaults() *GetNotifySlack200ResponseHunting {
	this := GetNotifySlack200ResponseHunting{}
	return &this
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *GetNotifySlack200ResponseHunting) GetType() string {
	if o == nil || isNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetNotifySlack200ResponseHunting) GetTypeOk() (*string, bool) {
	if o == nil || isNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *GetNotifySlack200ResponseHunting) HasType() bool {
	if o != nil && !isNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *GetNotifySlack200ResponseHunting) SetType(v string) {
	o.Type = &v
}

// GetWebhookUrl returns the WebhookUrl field value if set, zero value otherwise.
func (o *GetNotifySlack200ResponseHunting) GetWebhookUrl() string {
	if o == nil || isNil(o.WebhookUrl) {
		var ret string
		return ret
	}
	return *o.WebhookUrl
}

// GetWebhookUrlOk returns a tuple with the WebhookUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetNotifySlack200ResponseHunting) GetWebhookUrlOk() (*string, bool) {
	if o == nil || isNil(o.WebhookUrl) {
		return nil, false
	}
	return o.WebhookUrl, true
}

// HasWebhookUrl returns a boolean if a field has been set.
func (o *GetNotifySlack200ResponseHunting) HasWebhookUrl() bool {
	if o != nil && !isNil(o.WebhookUrl) {
		return true
	}

	return false
}

// SetWebhookUrl gets a reference to the given string and assigns it to the WebhookUrl field.
func (o *GetNotifySlack200ResponseHunting) SetWebhookUrl(v string) {
	o.WebhookUrl = &v
}

func (o GetNotifySlack200ResponseHunting) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetNotifySlack200ResponseHunting) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !isNil(o.WebhookUrl) {
		toSerialize["webhook_url"] = o.WebhookUrl
	}
	return toSerialize, nil
}

type NullableGetNotifySlack200ResponseHunting struct {
	value *GetNotifySlack200ResponseHunting
	isSet bool
}

func (v NullableGetNotifySlack200ResponseHunting) Get() *GetNotifySlack200ResponseHunting {
	return v.value
}

func (v *NullableGetNotifySlack200ResponseHunting) Set(val *GetNotifySlack200ResponseHunting) {
	v.value = val
	v.isSet = true
}

func (v NullableGetNotifySlack200ResponseHunting) IsSet() bool {
	return v.isSet
}

func (v *NullableGetNotifySlack200ResponseHunting) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetNotifySlack200ResponseHunting(val *GetNotifySlack200ResponseHunting) *NullableGetNotifySlack200ResponseHunting {
	return &NullableGetNotifySlack200ResponseHunting{value: val, isSet: true}
}

func (v NullableGetNotifySlack200ResponseHunting) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetNotifySlack200ResponseHunting) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

