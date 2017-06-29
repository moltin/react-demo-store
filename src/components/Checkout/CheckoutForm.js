import React, { Component } from 'react';
import MailingList from '../global/MailingList';
import CheckoutSummary from './CheckoutSummary';
import { Field, reduxForm } from 'redux-form';

class CheckoutForm extends Component {

  render() {

    var handleSubmit = (values) => {
      console.log(values)
    }

    return (
      <main role="main" id="container" className="main-container push">
      <section className="checkout">
          <div className="content">
              <CheckoutSummary />
              <form className="checkout-form"  noValidate onSubmit={handleSubmit}>
                  <fieldset className="details">
                      <div className="form-header">
                          <h2>Your details</h2>
                      </div>
                      <div className="form-content">
                          <div className="form-fields">
                              <div className="input-wrap name">
                                  <Field component="input" className="name" required="required" placeholder="Name" name="name" type="text" aria-label="Name"/>
                              </div>
                              <div className="input-wrap email">
                                  <Field component="input" className="email" required="required" placeholder="Email address" name="email" type="email" aria-label="Email"/>
                              </div>
                          </div>
                          <button type="button" className="continue">Continue</button>
                      </div>
                  </fieldset>
                  <fieldset className="billing collapsed">
                      <div className="form-header inactive">
                          <h2>Billing address</h2>
                      </div>
                      <div className="form-content">
                          <div className="form-fields">
                              <div className="input-wrap firstname">
                                  <Field component="input" required="required" placeholder="First Name" name="billing-firstname" type="text" aria-label="First name"/>
                              </div>
                              <div className="input-wrap lastname">
                                  <Field component="input" required="required" placeholder="Last Name" name="billing-lastname" type="text" aria-label="Last name"/>
                              </div>
                              <div className="input-wrap company">
                                  <Field component="input" placeholder="Company" name="billing-company" type="text" aria-label="Company"/>
                              </div>
                              <div className="input-wrap address-1">
                                  <Field component="input" required="required" placeholder="Address Line 1" name="billing-address-1" type="text" aria-label="Address line 1"/>
                              </div>
                              <div className="input-wrap address-2">
                                  <Field component="input" placeholder="Address Line 2" name="billing-address-2" type="text" aria-label="Address line 2"/>
                              </div>
                              <div className="input-wrap state">
                                  <Field component="input" required="required" placeholder="State / County" name="billing-state" type="text" aria-label="State / County"/>
                              </div>
                              <div className="input-wrap postcode">
                                  <Field component="input" required="required" placeholder="Postcode" name="billing-postcode" type="text" aria-label="Postcode"/>
                              </div>
                              <div className="input-wrap">
                                  <label className="select-restyle">
                                      <span className="hide-content">Country</span>
                                      <Field component="select" id="billing-country" required="required" name="billing-country">
                                          <option value></option>
                                          <option value="GB">United Kingdom</option>
                                          <option value="US">The US of A</option>
                                          <option value="FR">France</option>
                                          <option value="DE">Germany</option>
                                          <option value="CA">Canada o Canada!</option>
                                      </Field>
                                  </label>
                              </div>
                          </div>
                          <button type="button" className="continue">Continue</button>
                      </div>
                  </fieldset>
                  <fieldset className="shipping collapsed">
                      <div className="form-header inactive">
                          <h2>Shipping address</h2>
                      </div>
                      <div className="form-content">
                          <div className="form-fields">
                              <label className="replace-checkbox same-as-billing">
                                  <Field component="input" type="checkbox" name="use-billing"/>
                                  <span className="checkbox-label"><span className="hide-content"> Is your shipping address the </span>Same as<span className="hide-content">your </span> billing address?</span>
                              </label>
                              <div className="input-wrap firstname">
                                  <Field component="input" required="required" placeholder="First Name" name="shipping-firstname" type="text" aria-label="First name"/>
                              </div>
                              <div className="input-wrap lastname">
                                  <Field component="input" required="required" placeholder="Last Name" name="shipping-lastname" type="text" aria-label="Last name"/>
                              </div>
                              <div className="input-wrap company">
                                  <Field component="input" placeholder="Company" name="shipping-company" type="text" aria-label="Company"/>
                              </div>
                              <div className="input-wrap address-1">
                                  <Field component="input" required="required" placeholder="Address Line 1" name="shipping-address-1" type="text" aria-label="Address line 1"/>
                              </div>
                              <div className="input-wrap address-2">
                                  <Field component="input" placeholder="Address Line 2" name="shipping-address-2" type="text" aria-label="Address line 2"/>
                              </div>
                              <div className="input-wrap state">
                                  <Field component="input" required="required" placeholder="State / County" name="shipping-state" type="text" aria-label="State / County"/>
                              </div>
                              <div className="input-wrap postcode">
                                  <Field component="input" required="required" placeholder="Postcode" name="shipping-postcode" type="text" aria-label="Postcode"/>
                              </div>
                              <div className="input-wrap">
                                  <label className="select-restyle">
                                      <span className="hide-content">Country</span>
                                      <Field component="select" id="shipping-country" required="required" name="shipping-country">
                                          <option value></option>
                                          <option value="GB">United Kingdom</option>
                                          <option value="US">The US of A</option>
                                          <option value="FR">France</option>
                                          <option value="DE">Germany</option>
                                          <option value="CA">Canada o Canada!</option>
                                      </Field>
                                  </label>
                              </div>
                          </div>
                          <button type="button" className="continue">Continue</button>
                      </div>
                  </fieldset>
                  <fieldset className="payment collapsed">
                      <div className="form-header inactive">
                          <h2>Payment details</h2>
                      </div>
                      <div className="form-content">
                          <div className="form-fields">
                              <div className="input-wrap name">
                                  <Field component="input" required="required" placeholder="Name on card" name="card-name" type="text" aria-label="Name on card"/>
                              </div>
                              <div className="input-wrap card">
                                  <Field component="input" required="required" placeholder="Card number" name="card-number" type="number" aria-label="Card number"/>
                              </div>
                              <div className="input-wrap expiry">
                                  <Field component="input" required="required" placeholder="MM/YYYY" name="card-expriry" type="number" aria-label="Card expiry date in a MM/YYYY format"/>
                              </div>
                              <div className="input-wrap cvc">
                                  <Field component="input" required="required" placeholder="CVC" name="card-cvc" type="number" aria-label="CVC"/>
                              </div>
                          </div>
                          <button type="submit" className="pay" >Pay</button>
                      </div>
                  </fieldset>
              </form>
          </div>
      </section>
      <MailingList />
  </main>
    )
  };
};

export default reduxForm({form: 'contact'})(CheckoutForm);
