import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import Footer from '../global/Footer';
import CartHeader from '../Cart/CartHeader';
import { connect } from 'react-redux';
import Loading from '../global/Loading';

function mapStateToProps(state) {
  return state
}

class Product extends Component {

  render() {

    if(this.props.products.products) {
      return (
        <div>
          <CartHeader />
          <SingleProduct />
          <Footer />
        </div>
      )
    }

    else {
      return (
        <Loading />
      )
    }

  };
};

export default connect(mapStateToProps)(Product);
