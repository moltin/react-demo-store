import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { GetCartItems } from '../../ducks/cart';

class CartCounter extends Component {
  componentDidMount() {
    this.props.GetCartItems();
  }

  render() {
    let quantity = 0;

    if (this.props.cart.fetched === true) {
      var items = this.props.cart.cart.data;

      quantity = items.reduce((sum, item) => sum + item.quantity, 0);
    }

    return (
      <Link to="/cart" className="cart" aria-live="polite">
        <span className="cart-name" aria-hidden="true">
          Cart (
        </span>
        <span className="hide-content">The cart contains </span>
        <span className="cart-count">{quantity}</span>
        <span className="hide-content">items.</span>
        <span className="cart-name" aria-hidden="true">
          )
        </span>
      </Link>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetCartItems
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);
