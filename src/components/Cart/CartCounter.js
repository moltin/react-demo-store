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

      dispatch({type: "Fetch_Cart_Start"})

      api.GetCartItems()

      .then((cart) => {
        dispatch({type: "Fetch_Cart_End", payload: cart, gotNew: true})
      })
    })
  }

  //shouldComponentUpdate() {

  //   if(this.props.cart.newQuantity === true) {
  //     console.log("cart counter should rerender now")
  //     return false
  //   }
  //   else {
  //     return false
  //   }
  // }

  componentWillUpdate() {
    console.log("updating cart counter")
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
    else {
      quant = 0;
    }

    return (
      <a href="cart" className="cart"><span className="cart-name" onClick={() => toCart()}>Cart(</span><span className="cart-count">{quant}</span><span className="cart-name">)</span></a>
    )
  }
};

export default connect(mapStateToProps)(CartCounter);
