import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
  return state;
}

class CheckoutItems extends Component {
  render() {
    var items = this.props.cart.cart.data;

    var products = this.props.products.products;

    return (
      <div>
        {items.map(function(item) {
          var productArray = products.data.filter(function(product) {
            return product.id === item.product_id;
          });

          var product = productArray[0];
          var background = product.background_colour;

          return (
            <div className="checkout-product" key={item.id}>
              <div className="product-image" aria-hidden="true">
                <ProductImage
                  products={products}
                  product={product}
                  background={background}
                />
              </div>
              <div className="product-info">
                <div className="product-title">
                  {item.name + ' X ' + item.quantity}
                </div>
                <div className="price">
                  <span className="hide-content">Product subtotal: </span>
                  {'$' + item.unit_price.amount / 100}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CheckoutItems);
