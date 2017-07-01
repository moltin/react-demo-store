import React, {Component} from 'react';
import OrderConfirmation from './OrderConfirmation';
import CartHeader from '../Cart/CartHeader';
import Footer from '../global/Footer';

class OrderConfirmationContainer extends Component {
  render() {
    return (
      <div>
      <CartHeader />
      <OrderConfirmation />
      <Footer />
      </div>
    )
  };
};

export default OrderConfirmationContainer;
