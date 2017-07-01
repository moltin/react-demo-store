import React, { Component } from 'react';
import MobileNav from '../global/Mobile/MobileNav';
import MailingList from '../global/MailingList';
import Footer from '../global/Footer';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
    return(state)
}

class Cart extends Component {

  render() {

    var toProducts = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/products'))
      })
    }

    var toCheckout = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/checkout'))
      })
    }


    if(this.props.cart.fetched === true && this.props.cart.fetching === false) {
      if(this.props.cart.cart.data[0]) {
        var subtotal = '$' + this.props.cart.cart.meta.display_price.with_tax.amount/100;
        return (
          <div>
            <MobileNav />
            <CartHeader />
            <main role="main" id="container" className="main-container push">

              <section className="cart">
                <div className="content">

                  <form className="cart-listing" method="post" noValidate>
                    <div className="cart-list-headings">

                         <div className="cart-product-header">Product</div>
                         <div className="cart-header-group">
                             <div className="cart-empty-header"></div>
                             <div className="cart-quantity-header">Quantity</div>
                             <div className="cart-price-header">Price</div>
                         </div>

                    </div>
                    <CartItems />
                    <div className="total-price">
                      Subtotal <span className="price">{subtotal}</span>
                    </div>
                    <button type="button" className="submit" href="/checkout" onClick={() => toCheckout()}>Checkout</button>
                  </form>
                </div>
              </section>
              <MailingList />
              <Footer />
            </main>
          </div>
        )
      }

      else {
        return (
          <div>
            <MobileNav />
            <CartHeader />
            <main role="main" id="container" className="main-container push">
              <section className="cart">
                <div className="content">
                  <div className="cart-listing empty">
                    <p>Oh no, looks like you don't love lamp, as your cart is empty.</p>
                    <a className="btn" href="products" onClick={() => toProducts()}>Start shopping</a>
                  </div>
                </div>
              </section>
              <MailingList />
            </main>
            <Footer />
          </div>
        )
      }
    }

    else {
      return (
        <div>
          <MobileNav />
          <CartHeader />
            <main role="main" id="container" className="main-container push">
            <section>
              <div className="content">
                  <div className="loading">
                      <div className="loading-icon" aria-hidden="true">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 54">
                              <path fill="currentColor" d="M77.6,18.3c0,3.2-1.2,6.4-3.7,8.8l-21,21l-21-21c-4.9-4.9-4.9-12.8,0-17.7c2.4-2.4,5.6-3.7,8.9-3.7
              c3.2,0,6.4,1.2,8.8,3.7l3.3,3.3l3.3-3.3c4.9-4.9,12.8-4.9,17.7,0C76.3,11.9,77.6,15.1,77.6,18.3z"/>
                          </svg>
                      </div>
                      <p className="loading-text">Loading</p>
                  </div>
              </div>
            </section>
            <MailingList />
            </main>
        </div>
      )
    }

  };
};

export default connect(mapStateToProps)(Cart);
