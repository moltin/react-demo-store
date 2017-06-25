import React, { Component } from 'react';
import AllProducts from './AllProducts';
import Footer from '../global/Footer';
import CartHeader from '../Cart/CartHeader';
import MobileNav from '../global/Mobile/MobileNav';
import { connect } from 'react-redux';
import * as Spinner from 'react-spinkit';
// var api = require('../utils/moltin.js');

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

class ProductsContainer extends Component {

  constructor(props) {
    super();
  }

  render() {
    if (this.props.products.products != null) {

    return (
          <div>
            <MobileNav />
            <CartHeader />
            <AllProducts {...this.props}/>
            <Footer />
          </div>
      )
    }
    else {

      return (
        <Spinner name="ball-spin-fade-loader"/>
      )
    }
  }
}

export default connect(mapStateToProps)(ProductsContainer);
