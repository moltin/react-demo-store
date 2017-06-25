import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
var api = require('../../utils/moltin.js')

function mapStateToProps(state) {
    return(state)
}

class CartCounter extends Component {


  componentDidMount() {
    this.props.dispatch((dispatch) => {
      api.GetCartItems()

      .then((cart) => {
        dispatch({type: "Fetch_Cart", payload: cart})
      })
    })
  }

  render() {

    const toCart = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/cart'))
      })
    };

    if(this.props.cart.fetched === true) {
      var quant = 0;
      var items = this.props.cart.cart.data;
      items.forEach(function(item) {
        quant = quant + item.quantity;
      })

    }

    return (
      <a href="cart" className="cart"><span className="cart-name" onClick={() => toCart()}>Cart(</span><span className="cart-count">{quant}</span><span className="cart-name">)</span></a>
    )
  }
};

export default connect(mapStateToProps)(CartCounter);
