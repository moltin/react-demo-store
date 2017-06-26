import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
    return(state)
}

class CheckoutItems extends Component {

  render() {

    if(this.props.cart.fetched === true) {
      var items = this.props.cart.cart.data;

      var products = this.props.products.products;

    return (
      <div>

        {items.map(function(item) {

        return (
          <div className="checkout-item" key={item.id}>
              <div className="checkout-product">
                  <div className="product-image" aria-hidden="true">
                    <ProductImage products={products} product={item.product_id}/>
                  </div>
                  <div className="product-info">
                      <p className="product-title">{item.name + ' X ' + item.quantity}</p>
                      <p className="price"><span className="hide-content">Price per item </span>{item.unit_price.amount}</p>
                  </div>
                  <button className="remove" type="button"><span className="hide-content">Delete item</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.55635 15.55635">
                          <rect fill="currentColor" x="-2.22183" y="6.77817" width="20" height="2" transform="translate(7.77817 -3.22183) rotate(45)"/>
                          <rect fill="currentColor" x="-2.22183" y="6.77817" width="20" height="2" transform="translate(18.77817 7.77817) rotate(135)"/>
                      </svg>
                  </button>
              </div>
          </div>
        )

        })}
        </div>
      )

    }

    return (
      <p>no data</p>
    )

  }
};

export default connect(mapStateToProps)(CheckoutItems);
