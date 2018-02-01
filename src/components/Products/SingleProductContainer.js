import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import Footer from '../global/Footer';
import CartHeader from '../Cart/CartHeader';
import ProductHeader from './ProductHeader';
import { connect } from 'react-redux';
import Loading from '../global/Loading';
import MobileNav from '../global/Mobile/MobileNav';

import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_END
} from '../../ducks/products';

var api = require('../../moltin.js');

function mapStateToProps(state) {
  return state;
}

class Product extends Component {
  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {
    // check if we already have a moltin products in the store
    if (this.props.products.fetched === false) {
      // dispatch an action to our redux reducers
      this.props.dispatch(dispatch => {
        // this action will set a fetching field to true
        dispatch({ type: FETCH_PRODUCTS_START });

        // get the moltin products from the API
        api
          .GetProducts()

          .then(products => {
            /* now that we have the products, this action will set fetching to false and fetched to true,
            as well as add the moltin products to the store */
            dispatch({ type: FETCH_PRODUCTS_END, payload: products });
          });
      });
    }
  }

  render() {
    if (this.props.products.products) {
      return (
        <div>
          <MobileNav />
          <ProductHeader />
          <SingleProduct />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <MobileNav />
          <CartHeader />
          <Loading />
          <Footer />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(Product);
