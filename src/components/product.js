import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import Footer from './global/Footer';
import CartHeader from './Cart/CartHeader';
// var api = require('../utils/moltin.js');

class Product extends Component {

  render() {
    return (
          <div>
            <CartHeader />
            <SingleProduct />
            <Footer />
          </div>
      )
  }
}

export default Product;
