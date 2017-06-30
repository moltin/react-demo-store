import React, { Component } from 'react';
import CheckoutForm from './CheckoutForm';
import CartHeader from '../Cart/CartHeader';
import MobileNav from '../global/Mobile/MobileNav';
import Footer from '../global/Footer';

class CheckoutContainer extends Component {

  render() {
    return (
      <div>
        <MobileNav />
        <CartHeader />
        <div className="header-container smaller">
          <div className="content">
              <h1>Checkout</h1>
          </div>
        </div>
        <CheckoutForm/>
        <Footer/>
      </div>
    )
  }
}

export default CheckoutContainer;
