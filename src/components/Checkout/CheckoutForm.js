import React, { Component } from 'react';
import CheckoutSummary from './CheckoutSummary';
import { Field, reduxForm } from 'redux-form';
import * as api from '../../moltin';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { SUBMIT_PAYMENT, PAYMENT_COMPLETE } from '../../ducks/payments';

function mapStateToProps(state) {
  return { push: state.push };
}

var CheckoutTemplate = {
  customer: {
    name: 'John Doe',
    email: 'john@doe.co'
  },
  shipping_address: {
    first_name: 'John',
    last_name: 'Doe',
    line_1: '2nd Floor British India House',
    line_2: '15 Carliol Square',
    city: 'Newcastle Upon Tyne',
    postcode: 'NE1 6UF',
    county: 'Tyne & Wear',
    country: 'United Kingdom'
  },
  billing_address: {
    first_name: 'John',
    last_name: 'Doe',
    line_1: '2nd Floor British India House',
    line_2: '15 Carliol Square',
    city: 'Newcastle Upon Tyne',
    postcode: 'NE1 6UF',
    county: 'Tyne & Wear',
    country: 'United Kingdom'
  }
};
var PaymentTemplate = {
  gateway: 'stripe',
  method: 'purchase',
  first_name: 'John',
  last_name: 'Doe',
  number: '4242424242424242',
  month: '08',
  year: '2020',
  verification_value: '123'
};

class CheckoutForm extends Component {
  handleKeyDown = function(e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
    }
  };

  mySubmit = values => {
    CheckoutTemplate.customer.name = values.name;
    CheckoutTemplate.customer.email = values.email;

    CheckoutTemplate.billing_address.first_name = values.billing_firstname;
    CheckoutTemplate.billing_address.last_name = values.billing_lastname;
    CheckoutTemplate.billing_address.line_1 = values.billing_address_1;
    CheckoutTemplate.billing_address.line_2 = values.billing_address_2;
    CheckoutTemplate.billing_address.city = values.billing_state;
    CheckoutTemplate.billing_address.county = values.billing_postcode;
    CheckoutTemplate.billing_address.country = values.billing_country;

    CheckoutTemplate.shipping_address.first_name = values.shipping_firstname;
    CheckoutTemplate.shipping_address.last_name = values.shipping_lastname;
    CheckoutTemplate.shipping_address.line_1 = values.shipping_address_1;
    CheckoutTemplate.shipping_address.line_2 = values.shipping_address_2;
    CheckoutTemplate.shipping_address.city = values.shipping_state;
    CheckoutTemplate.shipping_address.county = values.shipping_postcode;
    CheckoutTemplate.shipping_address.country = values.shipping_country;

    this.props.dispatch(dispatch => {
      dispatch({ type: SUBMIT_PAYMENT });
    });

    api
      .Checkout(CheckoutTemplate)

      .then(order => {
        api.OrderPay(order.data.id, PaymentTemplate);
        api.DeleteCart();
      })

      .then(() => {
        this.props.dispatch(dispatch => {
          dispatch({ type: PAYMENT_COMPLETE });
          dispatch(push('/order-confirmation'));
        });
      })

      .catch(e => {
        console.log(e);
      })

      .catch(e => {
        console.log(e);
      })

      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <main role="main" id="container" className="main-container push">
        <section className="checkout">
          <div className="content">
            <CheckoutSummary />
            <form
              className="checkout-form"
              noValidate
              onSubmit={this.props.handleSubmit(this.mySubmit)}
              onKeyDown={e => {
                this.handleKeyDown(e);
              }}>
              <fieldset className="details">
                <div className="form-header">
                  <h2>Your details</h2>
                </div>
                <div className="form-content">
                  <div className="form-fields">
                    <label className="input-wrap name required">
                      <span className="hide-content">Name</span>
                      <Field
                        component="input"
                        className="name"
                        required="required"
                        placeholder="Name"
                        name="name"
                        type="text"
                        aria-label="Name"
                      />
                    </label>
                    <label className="input-wrap email required">
                      <span className="hide-content">Email address</span>
                      <Field
                        component="input"
                        className="email"
                        required="required"
                        placeholder="Email address"
                        name="email"
                        type="email"
                        aria-label="Email"
                      />
                    </label>
                  </div>
                  <button type="button" className="continue">
                    Continue
                  </button>
                </div>
              </fieldset>
              <fieldset className="billing collapsed">
                <div className="form-header inactive">
                  <h2>Billing address</h2>
                </div>
                <div className="form-content">
                  <div className="form-fields">
                    <label className="input-wrap firstname required">
                      <span className="hide-content">First name</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="First Name"
                        name="billing_firstname"
                        type="text"
                        aria-label="First name"
                      />
                    </label>
                    <label className="input-wrap lastname required">
                      <span className="hide-content">Last name</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Last Name"
                        name="billing_lastname"
                        type="text"
                        aria-label="Last name"
                      />
                    </label>
                    <label className="input-wrap company">
                      <span className="hide-content">Company</span>
                      <Field
                        component="input"
                        placeholder="Company"
                        name="billing-company"
                        type="text"
                        aria-label="Company"
                      />
                    </label>
                    <label className="input-wrap address-1 required">
                      <span className="hide-content">Address line 1</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Address Line 1"
                        name="billing_address_1"
                        type="text"
                        aria-label="Address line 1"
                      />
                    </label>
                    <label className="input-wrap address-2">
                      <span className="hide-content">Address line 2</span>
                      <Field
                        component="input"
                        placeholder="Address Line 2"
                        name="billing_address_2"
                        type="text"
                        aria-label="Address line 2"
                      />
                    </label>
                    <label className="input-wrap state required">
                      <span className="hide-content">State or county</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="State / County"
                        name="billing_state"
                        type="text"
                        aria-label="State / County"
                      />
                    </label>
                    <label className="input-wrap postcode required">
                      <span className="hide-content">Postcode</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Postcode"
                        name="billing_postcode"
                        type="text"
                        aria-label="Postcode"
                      />
                    </label>
                    <div className="input-wrap country">
                      <label className="required select-fallback">
                        <span className="hide-content">Country</span>
                        <Field
                          component="select"
                          id="billing_country"
                          required="required"
                          name="billing_country">
                          <option value="">Country</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">
                            Bolivia, Plurinational State of
                          </option>
                          <option value="BQ">
                            Bonaire, Sint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CD">
                            Congo, the Democratic Republic of the
                          </option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Côte d'Ivoire</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">
                            Falkland Islands (Malvinas)
                          </option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="VA">
                            Holy See (Vatican City State)
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran, Islamic Republic of</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KP">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value="KR">Korea, Republic of</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">
                            Lao People's Democratic Republic
                          </option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MK">
                            Macedonia, the former Yugoslav Republic of
                          </option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">
                            Micronesia, Federated States of
                          </option>
                          <option value="MD">Moldova, Republic of</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">
                            Palestinian Territory, Occupied
                          </option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Réunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russian Federation</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">
                            Saint Helena, Ascension and Tristan da Cunha
                          </option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten (Dutch part)</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan, Province of China</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">
                            Tanzania, United Republic of
                          </option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UM">
                            United States Minor Outlying Islands
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">
                            Venezuela, Bolivarian Republic of
                          </option>
                          <option value="VN">Viet Nam</option>
                          <option value="VG">Virgin Islands, British</option>
                          <option value="VI">Virgin Islands, U.S.</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </Field>
                      </label>
                    </div>
                  </div>
                  <button type="button" className="continue">
                    Continue
                  </button>
                </div>
              </fieldset>
              <fieldset className="shipping collapsed">
                <div className="form-header inactive">
                  <h2>Shipping address</h2>
                </div>
                <div className="form-content">
                  <div className="form-fields">
                    <label className="input-wrap firstname required">
                      <span className="hide-content">First name</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="First Name"
                        name="shipping_firstname"
                        type="text"
                        aria-label="First name"
                      />
                    </label>
                    <label className="input-wrap lastname required">
                      <span className="hide-content">Last name</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Last Name"
                        name="shipping_lastname"
                        type="text"
                        aria-label="Last name"
                      />
                    </label>
                    <label className="input-wrap company">
                      <span className="hide-content">Company</span>
                      <Field
                        component="input"
                        placeholder="Company"
                        name="shipping_company"
                        type="text"
                        aria-label="Company"
                      />
                    </label>
                    <label className="input-wrap address-1 required">
                      <span className="hide-content">Address line 1</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Address Line 1"
                        name="shipping_address_1"
                        type="text"
                        aria-label="Address line 1"
                      />
                    </label>
                    <label className="input-wrap address-2">
                      <span className="hide-content">Address line 2</span>
                      <Field
                        component="input"
                        placeholder="Address Line 2"
                        name="shipping_address_2"
                        type="text"
                        aria-label="Address line 2"
                      />
                    </label>
                    <label className="input-wrap state required">
                      <span className="hide-content">State or county</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="State / County"
                        name="shipping_state"
                        type="text"
                        aria-label="State / County"
                      />
                    </label>
                    <label className="input-wrap postcode required">
                      <span className="hide-content">Postcode</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Postcode"
                        name="shipping_postcode"
                        type="text"
                        aria-label="Postcode"
                      />
                    </label>
                    <div className="input-wrap country">
                      <label className="select-fallback required">
                        <span className="hide-content">Country</span>
                        <Field
                          component="select"
                          id="shipping_country"
                          required="required"
                          name="shipping_country">
                          <option value="">Country</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">
                            Bolivia, Plurinational State of
                          </option>
                          <option value="BQ">
                            Bonaire, Sint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CD">
                            Congo, the Democratic Republic of the
                          </option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Côte d'Ivoire</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">
                            Falkland Islands (Malvinas)
                          </option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="VA">
                            Holy See (Vatican City State)
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran, Islamic Republic of</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KP">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value="KR">Korea, Republic of</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">
                            Lao People's Democratic Republic
                          </option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MK">
                            Macedonia, the former Yugoslav Republic of
                          </option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">
                            Micronesia, Federated States of
                          </option>
                          <option value="MD">Moldova, Republic of</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">
                            Palestinian Territory, Occupied
                          </option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Réunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russian Federation</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">
                            Saint Helena, Ascension and Tristan da Cunha
                          </option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten (Dutch part)</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan, Province of China</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">
                            Tanzania, United Republic of
                          </option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UM">
                            United States Minor Outlying Islands
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">
                            Venezuela, Bolivarian Republic of
                          </option>
                          <option value="VN">Viet Nam</option>
                          <option value="VG">Virgin Islands, British</option>
                          <option value="VI">Virgin Islands, U.S.</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </Field>
                      </label>
                    </div>
                  </div>
                  <button type="button" className="continue">
                    Continue
                  </button>
                </div>
              </fieldset>
              <fieldset className="payment collapsed">
                <div className="form-header inactive">
                  <h2>Payment details</h2>
                </div>
                <div className="form-content">
                  <div className="form-fields">
                    <label className="input-wrap name">
                      <span className="hide-content">Name on card</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Name on card"
                        name="card_name"
                        type="text"
                        aria-label="Name on card"
                      />
                    </label>
                    <label className="input-wrap card required">
                      <span className="hide-content">Card number</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="Card number"
                        name="card-number"
                        maxLength="23"
                        type="tel"
                        aria-label="Card number"
                      />
                    </label>
                    <div className="input-wrap expiry-month">
                      <label className="select-fallback required">
                        <span className="hide-content">Card expiry month</span>
                        <select
                          id="expiry-month"
                          required="required"
                          name="expiry-month">
                          <option value="01">January</option>
                          <option value="02">February</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </label>
                    </div>
                    <div className="input-wrap expiry-year">
                      <label className="select-fallback required">
                        <span className="hide-content">Card expiry year</span>
                        <select
                          id="expiry-year"
                          required="required"
                          name="expiry-year">
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                        </select>
                      </label>
                    </div>
                    <label className="input-wrap cvc required">
                      <span className="hide-content">CVC code</span>
                      <Field
                        component="input"
                        required="required"
                        placeholder="CVC"
                        maxLength="4"
                        name="card_cvc"
                        type="tel"
                        aria-label="CVC"
                      />
                    </label>
                  </div>
                  <button type="submit" className="pay" aria-live="polite">
                    <div className="loading-icon">
                      <span className="hide-content">Processing</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52.7 46.9"
                        aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M47.8,15.9c0,2.8-1,5.6-3.2,7.6L26.4,41.7L8.1,23.5c-4.3-4.3-4.3-11.1,0-15.4c2.1-2.1,4.9-3.2,7.7-3.2c2.8,0,5.6,1,7.6,3.2
                            l2.9,2.9l2.9-2.9c4.3-4.3,11.1-4.3,15.4,0C46.7,10.3,47.8,13.1,47.8,15.9z"
                        />
                      </svg>
                    </div>
                    <span className="copy">Pay</span>
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

CheckoutForm = reduxForm({
  form: 'CheckoutForm'
})(CheckoutForm);

export default connect(mapStateToProps)(CheckoutForm);
