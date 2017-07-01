import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutItems from './CheckoutItems';
import Loading from '../global/Loading';

function mapStateToProps(state) {
    return(state)
}

class CheckoutSummary extends Component {

  render() {

      if(this.props.cart.fetched === true && this.props.products.fetched === true) {

        var tax = this.props.cart.cart.meta.display_price.with_tax.amount - this.props.cart.cart.meta.display_price.without_tax.amount;

        return (
          <div className="checkout-summary">
              <div className="form-header">
                  <h2>Summary<span className="hide-content"> of your order, ready for checkout.</span></h2>
              </div>
              <div className="checkout-items">
                <CheckoutItems />
              </div>
              <div className="price-calculations">
                  <div className="price-item">Subtotal<span className="hide-content"> for all products</span><span className="price">{'$' + this.props.cart.cart.meta.display_price.without_tax.amount/100}</span></div>
                  <div className="price-item">Tax<span className="price">{'$' + tax}</span></div>
                  <div className="price-item">Shipping<span className="price">$0.00</span></div>
              </div>
              <div className="total-price price">
                  Total <span className="price">{'$' + this.props.cart.cart.meta.display_price.without_tax.amount/100}</span>
              </div>
          </div>
        )
      }

      return (
          <div className="checkout-summary">
            <Loading />
          </div>
      )
      }
}


export default connect(mapStateToProps)(CheckoutSummary);
