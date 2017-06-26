import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
    return(state)
}

class CheckoutItems extends Component {

  render() {

    if(this.props.cart.fetched === true && this.props.products.fetched === true) {
      console.log(this.props)
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
          <div className="checkout-item" key={item.id}>
              <div className="checkout-product">
                  <div className="product-image" aria-hidden="true">
                    <ProductImage products={products} product={product} background={background}/>
                  </div>
                  <div className="product-info">
                      <p className="product-title">{item.name + ' X ' + item.quantity}</p>
                      <p className="price"><span className="hide-content">Price per item </span>{'$' + item.unit_price.amount/100}</p>
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
