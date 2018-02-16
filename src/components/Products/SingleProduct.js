import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';
import * as api from '../../moltin';

import { UPDATE_QUANTITY } from '../../ducks/product';
import {
  FETCH_CART_START,
  FETCH_CART_END,
  CART_UPDATED
} from '../../ducks/cart';

const mapStateToProps = state => {
  return state;
};

class SingleProduct extends Component {
  render() {
    var products = this.props.products.products;

    var ID = this.props.router.location.pathname.slice(9, 100);

    var productArray = this.props.products.products.data.filter(function(
      product
    ) {
      return product.id === ID;
    });

    var product = productArray[0];

    var updateQuantity = quantity => {
      this.props.dispatch(dispatch => {
        dispatch({ type: UPDATE_QUANTITY, payload: quantity });
      });
    };

    var addToCart = id => {
      this.props.dispatch(dispatch => {
        api
          .AddCart(id, this.props.product.quantity)

          .then(cart => {
            console.log(cart);
            dispatch({ type: CART_UPDATED, gotNew: false });
          })

          .then(() => {
            dispatch({ type: FETCH_CART_START, gotNew: false });

            api
              .GetCartItems()

              .then(cart => {
                dispatch({ type: FETCH_CART_END, payload: cart, gotNew: true });
              });
          })
          .catch(e => {
            console.log(e);
          });
      });
    };

    var background = product.background_colour;

    function isThereACurrencyPrice() {
      try {
        return (
          <p className="price">
            <span className="hide-content">Unit price </span>
            {'$' + product.meta.display_price.with_tax.amount / 100}
          </p>
        );
      } catch (e) {
        return <div className="price">Price not available</div>;
      }
    }

    return (
      <main role="main" id="container" className="main-container push">
        <section className="product">
          <div className="content">
            <div className="product-listing">
              <div className="product-image">
                <ProductImage
                  product={product}
                  products={products}
                  background={background}
                />
              </div>
              <div className="product-description">
                <h2>{product.name}</h2>
                <p className="manufacturer">
                  <span className="hide-content">Manufactured </span>By{' '}
                  <span className="word-mark">
                    I<span className="love">Love</span>Lamp
                  </span>
                </p>
                {isThereACurrencyPrice()}
                <div className="description">
                  <p className="hide-content">Product details:</p>
                  <p>{product.description}</p>
                </div>
                <form className="product" noValidate>
                  <div className="quantity-input">
                    <p className="hide-content">Product quantity.</p>
                    <p className="hide-content">
                      Change the quantity by using the buttons, or alter the
                      input directly.
                    </p>
                    <button
                      type="button"
                      className="decrement number-button"
                      onClick={() => {
                        updateQuantity(this.props.product.quantity - 1);
                      }}>
                      <span className="hide-content">Decrement quantity</span>
                      <span aria-hidden="true">-</span>
                    </button>
                    <input
                      className="quantity"
                      name="number"
                      type="number"
                      min="1"
                      max="10"
                      value={this.props.product.quantity}
                      size="2"
                      onChange={event => {
                        updateQuantity(event.target.value);
                      }}
                    />
                    <button
                      type="button"
                      className="increment number-button"
                      onClick={() => {
                        updateQuantity(this.props.product.quantity + 1);
                      }}>
                      <span className="hide-content">Increment quantity</span>
                      <span aria-hidden="true">+</span>
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="submit"
                    onClick={e => {
                      addToCart(product.id);
                      console.log(this.props.product.quantity);
                      e.preventDefault();
                    }}>
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
            <div className="product-info">
              <div className="product-details">
                <div className="header">
                  <h3>Product details</h3>
                </div>
                <div className="details-body">
                  <div className="row">
                    <div className="label">Weight</div>
                    <div className="value">1.5kg</div>
                  </div>
                  <div className="row">
                    <div className="label">Finish</div>
                    <div className="value">{product.finish}</div>
                  </div>
                  <div className="row">
                    <div className="label">Material</div>
                    <div className="value">{product.material}</div>
                  </div>
                  <div className="row">
                    <div className="label">Bulb type</div>
                    <div className="value">{product.bulb}</div>
                  </div>
                  <div className="row">
                    <div className="label">Max Watt</div>
                    <div className="value">{product.max_watt}</div>
                  </div>
                  <div className="row">
                    <div className="label">Bulb Qty</div>
                    <div className="value">{product.bulb_qty}</div>
                  </div>
                  <div className="row">
                    <div className="label">SKU</div>
                    <div className="value sku">{product.sku}</div>
                  </div>
                </div>
              </div>
              <div className="product-details">
                <div className="header">
                  <h3>Dimensions (cm)</h3>
                </div>
                <div className="details-body">
                  <div className="row">
                    <div className="label">Height</div>
                    <div className="value">156</div>
                  </div>
                  <div className="row">
                    <div className="label">Width</div>
                    <div className="value">80</div>
                  </div>
                  <div className="row">
                    <div className="label">Depth</div>
                    <div className="value">80</div>
                  </div>
                </div>
              </div>
              <div className="product-details">
                <div className="header">
                  <h3>Delivery & returns</h3>
                </div>
                <div className="details-body">
                  <div className="row">
                    <div className="label">Dispatch</div>
                    <div className="value">Within 2 weeks</div>
                  </div>
                  <div className="row">
                    <div className="label">Delivery</div>
                    <div className="value">$5.95</div>
                  </div>
                </div>
                <div className="footer">
                  <p>
                    Read the <a href="/">delivery and returns policy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default connect(mapStateToProps)(SingleProduct);
