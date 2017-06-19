import React, {Component} from 'react';
import * as bigLogo from '../../assets/img/logo/ill-dark.svg';
import * as smallLogo from '../../assets/img/logo/ill-short-dark.svg';

class CartHeader extends Component {
  render() {
    return (
      <header className="push">
    <div className="nav-container">
        <nav className="primary-nav">
            <a href="products">Products</a>
            <a href="categories">Collections</a>
        </nav>
        <div className="logo">
            <a href="/" className="logo-link">
                <span className="hide-content">I love lamp</span>
                <img className="big-logo" src={bigLogo} alt="I love lamp logo" aria-hidden="true"/>
                <img className="small-logo" src={smallLogo} alt="I love lamp logo" aria-hidden="true"/>
            </a>
        </div>
        <nav className="secondary-nav">
            <a href="cart" className="cart"><span className="cart-name">Cart(</span><span className="cart-count">2</span><span className="cart-name">)</span></a>
        </nav>
    </div>
    <div className="header-container hide-content">
        <div className="content">
            <h1>Your cart items</h1>
        </div>
    </div>
</header>
    )
  }
};

export default CartHeader;
