import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MobileNav from '../global/Mobile/MobileNav';
import * as lamp7 from "../../assets/img/products/lamp7-trans.png";
import MailingList from '../global/MailingList';
import Footer from '../global/Footer';
import CartHeader from './CartHeader';

class Cart extends Component {

  render() {
        return (
          <div className='App'>
            <MobileNav />
            <CartHeader />

            <main role="main" id="container" className="main-container push">
            <section className="cart">
                <div className="content">
                    <h2>Shopping cart</h2>
                    <form className="cart-listing" method="post" noValidate>
                        <div className="cart-list-headings">
                            <div className="cart-product">Product</div>
                            <div className="cart-quantity">Quantity</div>
                            <div className="cart-price">Price</div>
                        </div>
                        <div className="cart-item">
                            <div className="cart-product">
                                <div className="product-image" aria-hidden="true">
                                    <img src={lamp7} alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights." style={{"background": "#d9d9d9"}}/>
                                </div>
                                <h3>Crown</h3>
                            </div>
                            <div className="cart-quantity">
                                <div className="quantity-input">
                                    <p className="hide-content">Product quantity.</p>
                                    <p className="hide-content">Increment the quantity by using the plus and minus buttons, or alter the input directly.</p>
                                    <button type="button" className="decrement number-button"><span className="hide-content">Decrement quantity</span><span aria-hidden="true">-</span></button>
                                    <input className="quantity" name="number" type="number" min="1" max="10" value="1" size="2"/>
                                    <button type="button" className="increment number-button"><span className="hide-content">Increment quantity</span><span aria-hidden="true">+</span></button>
                                </div>
                            </div>
                            <div className="cart-price">
                                <p className="price"><span className="hide-content">Price per item </span>$475</p>
                            </div>
                            <div className="cart-delete">
                                <button className="remove" type="button"><span className="hide-content">Delete item</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.55635 15.55635">
                                        <rect fill="currentColor" x="-2.22183" y="6.77817" width="20" height="2" transform="translate(7.77817 -3.22183) rotate(45)"/>
                                        <rect fill="currentColor" x="-2.22183" y="6.77817" width="20" height="2" transform="translate(18.77817 7.77817) rotate(135)"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="total-price">
                            Subtotal <span className="price">$690</span>
                        </div>
                        <button type="submit" className="submit">Checkout</button>
                    </form>
                </div>
            </section>
          <MailingList />
          <Footer />
        </main>
      </div>
    )
  }
}


export default Cart;
