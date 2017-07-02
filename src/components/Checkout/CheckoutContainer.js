import React, { Component } from 'react';
import Loading from '../global/Loading';
import CheckoutForm from './CheckoutForm';
import CartHeader from '../Cart/CartHeader';
import MobileNav from '../global/Mobile/MobileNav';
import Footer from '../global/Footer';
import { connect } from 'react-redux';
var api = require('../../utils/moltin.js');

function mapStateToProps(state) {
  return state
}

class CheckoutContainer extends Component {

  componentDidMount() {

    if(this.props.products.fetched === false) {
      this.props.dispatch((dispatch) => {

        dispatch({type: "Fetch_Products_Start"})
        api.GetProducts()

        .then((products) => {
          dispatch({type: "Fetch_Products_End", payload: products})
        })

      })
    }

    if(this.props.cart.fetched === false) {
      this.props.dispatch((dispatch) => {

        dispatch({type: "Fetch_Cart_Start"})

        api.GetCartItems()

        .then((cart) => {
          dispatch({type: "Fetch_Cart_End", payload: cart})
        })
      })
    }

  };

  render() {
    if (this.props.cart.cart && this.props.products.products) {
      return (
        <div>
          <MobileNav />
          <CartHeader />
          <CheckoutForm />
          <Footer/>
        </div>
      )
    }
    else {
      return (
        <div>
          <MobileNav />
          <CartHeader />
          <Loading />
          <Footer/>
        </div>
      )
    }

  }
}

export default connect(mapStateToProps)(CheckoutContainer);
