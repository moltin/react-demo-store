import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';
import { FETCH_CART_START, FETCH_CART_END } from '../../ducks/cart';

var api = require('../../moltin.js');

function mapStateToProps(state) {
  return state;
}

class CartItems extends Component {
  render() {
    var cart_decrement = (ID, quantity) => {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_CART_START });

        api
          .UpdateCartMinus(ID, quantity)

          .then(cart => {
            console.log('cart quantity updated');
            dispatch({ type: FETCH_CART_END, payload: cart, gotNew: true });
          })

          .catch(e => {
            console.log(e);
          });
      });
    };

    var cart_increment = (ID, quantity) => {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_CART_START });

        api
          .UpdateCartPlus(ID, quantity)

          .then(cart => {
            console.log('cart quantity updated');

            dispatch({ type: FETCH_CART_END, payload: cart, gotNew: true });
          })

          .catch(e => {
            console.log(e);
          });
      });
    };

    var cart_edit = (ID, quantity) => {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_CART_START });

        api
          .UpdateCart(ID, quantity)

          .then(cart => {
            console.log('cart quantity updated');
            dispatch({ type: FETCH_CART_END, payload: cart });
          })

          .catch(e => {
            console.log(e);
          });
      });
    };

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

          var TotalPriceHidden = 'hidden';

          if (item.quantity > 1) {
            TotalPriceHidden = '';
          }

          return (
            <div className="cart-item" key={item.id}>
              <div className="product-image" aria-hidden="true">
                <ProductImage
                  alt="item.description"
                  products={products}
                  product={product}
                  background={background}
                />
              </div>
              <div className="cart-details">
                <div className="cart-title">
                  <h3>{item.name}</h3>
                </div>

                <div className="cart-quantity">
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
                        cart_decrement(item.id, item.quantity);
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
                      size="2"
                      defaultValue={item.quantity}
                      onBlur={event => {
                        cart_edit(item.id, event.target.value);
                        console.log(event.target.value);
                      }}
                    />
                    <button
                      type="button"
                      className="increment number-button"
                      onClick={() => {
                        cart_increment(item.id, item.quantity);
                      }}>
                      <span className="hide-content">Increment quantity</span>
                      <span aria-hidden="true">+</span>
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  <p className="price">
                    <span className={`item-price ${TotalPriceHidden}`}>
                      <span className="hide-content">Price per item </span>$<span className="product-price">
                        {item.unit_price.amount / 100}
                      </span>
                      <span aria-hidden="true"> / </span>
                    </span>
                    <span className="hide-content">Product subtotal </span>$<span className="total-product-price">
                      {item.unit_price.amount / 100 * item.quantity}
                    </span>
                  </p>
                </div>
              </div>
              <div className="cart-delete">
                <button
                  className="remove"
                  type="button"
                  onClick={() => {
                    cart_edit(item.id, 0);
                  }}>
                  <span className="hide-content">Delete item</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15.55635 15.55635">
                    <rect
                      fill="currentColor"
                      x="-2.22183"
                      y="6.77817"
                      width="20"
                      height="2"
                      transform="translate(7.77817 -3.22183) rotate(45)"
                    />
                    <rect
                      fill="currentColor"
                      x="-2.22183"
                      y="6.77817"
                      width="20"
                      height="2"
                      transform="translate(18.77817 7.77817) rotate(135)"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartItems);
