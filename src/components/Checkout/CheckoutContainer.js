import React, { Component } from 'react';
import Loading from '../global/Loading';
import CheckoutForm from './CheckoutForm';
import CartHeader from '../Cart/CartHeader';
import MobileNav from '../global/Mobile/MobileNav';
import Footer from '../global/Footer';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state
}

class CheckoutContainer extends Component {

  render() {
    if (this.props.cart) {
      return (
        <div>
          <MobileNav />
          <CartHeader />
          <CheckoutForm/>
          <Footer/>
        </div>
      )
    }
    else {
      console.log(this.props)
      return (
        <Loading />
      )
    }

  }
}

export default connect(mapStateToProps)(CheckoutContainer);
