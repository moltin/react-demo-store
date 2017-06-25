import React, { Component } from 'react';
import MailingList from '../global/MailingList';
import CheckoutItems from './CheckoutItems';

class CheckoutForm extends Component {

  render() {
    return (
      <main role="main" id="container" className="main-container push">
        <section className="checkout">
            <div className="content">
                <form className="checkout-summary" method="post" noValidate>
                    <h2>Summary<span className="hide-content"> of your selected items.</span></h2>
                    <CheckoutItems />
                </form>
                <form className="checkout">
                    <fieldset className="details">
                        <h2>Your details</h2>
                        <input className="name" required="required" placeholder="Name" name="name" type="text" aria-label="Name"/>
                        <input className="email" required="required" placeholder="Email address" name="email" type="email" aria-label="Email"/>
                        <button type="continue" className="continue">Continue</button>
                    </fieldset>
                    <fieldset className="billing">
                        <h2>Billing address</h2>
                        <input className="firstname" required="required" placeholder="First name" name="billing-firstname" type="text" aria-label="First name"/>
                        <input className="lastname" required="required" placeholder="Last name" name="billing-lastname" type="text" aria-label="Last name"/>
                        <input className="company" placeholder="Company" name="billing-company" type="text" aria-label="Company"/>
                        <input className="address-1" required="required" placeholder="Address Line 1" name="billing-address-1" type="text" aria-label="Address line 1"/>
                        <input className="address-2" placeholder="Address Line 2" name="billing-address-2" type="text" aria-label="Address line 2"/>
                        <input className="state" required="required" placeholder="State / County" name="billing-state" type="text" aria-label="State / County"/>
                        <input className="postcode" required="required" placeholder="Postcode" name="billing-postcode" type="text" aria-label="Postcode"/>
                        <label className="select-restyle">
                            <span className="hide-content">Country</span>
                            <select id="billing-country" required="required" name="billing-country">
                                <option value></option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">The US of A</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                                <option value="CA">Canada o Canada!</option>
                            </select>
                        </label>
                        <button type="continue" className="continue">Continue</button>
                    </fieldset>
                    <fieldset className="shipping">
                        <h2>Shipping address</h2>
                        <label className="same-as-billing">
                            <input type="checkbox" name="use-billing"/>
                            <span className="label-content">Shipping address is the same as billing address</span>
                        </label>
                        <input className="firstname" required="required" placeholder="First name" name="shipping-firstname" type="text" aria-label="First name"/>
                        <input className="lastname" required="required" placeholder="Last name" name="shipping-lastname" type="text" aria-label="Last name"/>
                        <input className="company" placeholder="Company" name="shipping-company" type="text" aria-label="Company"/>
                        <input className="address-1" required="required" placeholder="Address Line 1" name="shipping-address-1" type="text" aria-label="Address line 1"/>
                        <input className="address-2" placeholder="Address Line 2" name="shipping-address-2" type="text" aria-label="Address line 2"/>
                        <input className="state" required="required" placeholder="State / County" name="shipping-state" type="text" aria-label="State / County"/>
                        <input className="postcode" required="required" placeholder="Postcode" name="shipping-postcode" type="text" aria-label="Postcode"/>
                        <label className="select-restyle">
                            <span className="hide-content">Country</span>
                            <select id="shipping-country" required="required" name="shipping-country">
                                <option value></option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">The US of A</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                                <option value="CA">Canada o Canada!</option>
                            </select>
                        </label>
                        <button type="continue" className="continue">Continue</button>
                    </fieldset>
                </form>
            </div>
        </section>
        <MailingList />
    </main>
    )
  }
}

export default CheckoutForm;
