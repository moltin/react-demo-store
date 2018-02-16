import React, { Component } from 'react';
import OrderConfirmation from './OrderConfirmation';
import CartHeader from '../Cart/CartHeader';

class OrderConfirmationContainer extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <CartHeader />
        <OrderConfirmation />
      </div>
    );
  }
}

export default OrderConfirmationContainer;
