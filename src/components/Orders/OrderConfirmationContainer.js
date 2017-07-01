import React, {Component} from 'react';
import OrderConfirmation from './OrderConfirmation';
import Footer from '../global/Footer';

class OrderConfirmationContainer extends Component {
  render() {
    return (
      <div>
      <OrderConfirmation />
      <Footer />
      </div>
    )
  };
};

export default OrderConfirmationContainer;
