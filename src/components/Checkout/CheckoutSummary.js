import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutItems from './CheckoutItems';
import Loading from '../global/Loading';

import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_END } from '../../ducks/products';
import { FETCH_CART_START, FETCH_CART_END } from '../../ducks/cart';

var api = require('../../moltin.js');

function mapStateToProps(state) {
  return state;
}

class CheckoutSummary extends Component {
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

    if (this.props.cart.fetched === false) {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_CART_START });

        api
          .GetCartItems()

          .then(cart => {
            dispatch({ type: FETCH_CART_END, payload: cart });
          });
      });
    }
  }

  render() {
    if (
      this.props.cart.fetched === true &&
      this.props.products.fetched === true
    ) {
      var tax =
        this.props.cart.cart.meta.display_price.with_tax.amount -
        this.props.cart.cart.meta.display_price.without_tax.amount;

      return (
        <div className="checkout-summary">
          <div className="form-header">
            <h2>
              Summary<span className="hide-content">
                {' '}
                of your order, ready for checkout.
              </span>
            </h2>
          </div>
          <div className="checkout-items">
            <CheckoutItems />
          </div>
          <div className="price-calculations">
            <div className="price-item">
              Subtotal<span className="hide-content"> for all products</span>
              <span className="price">
                {'$' +
                  this.props.cart.cart.meta.display_price.without_tax.amount /
                    100}
              </span>
            </div>
            <div className="price-item">
              Tax<span className="price">{'$' + tax}</span>
            </div>
            <div className="price-item">
              Shipping<span className="price">$0</span>
            </div>
          </div>
          <div className="total-price price">
            Total{' '}
            <span className="price">
              {'$' +
                this.props.cart.cart.meta.display_price.without_tax.amount /
                  100}
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="checkout-summary">
        <Loading />
      </div>
    );
  }
}

export default connect(mapStateToProps)(CheckoutSummary);
