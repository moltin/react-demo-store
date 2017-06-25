import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return(state)
}


var quant = 0;

class CartCounter extends Component {

  render() {

    if(this.props.cart.fetched === true) {
      var items = this.props.cart.cart.data;
      items.forEach(function(item) {
        quant = quant + item.quantity
            console.log(quant)
      })

    }

    else {
      console.log("no cart data returned")
    }

    return (
      <a href="cart" className="cart"><span className="cart-name">Cart(</span><span className="cart-count">{quant}</span><span className="cart-name">)</span></a>
    )
  }
};

export default connect(mapStateToProps)(CartCounter);
