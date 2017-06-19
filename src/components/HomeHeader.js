import React, { Component } from 'react';
import * as bigLogo from '../assets/img/logo/ill-white.svg';
import * as smallLogo from '../assets/img/logo/ill-short-white.svg';
import * as arrow from '../assets/img/headers/down-arrow.svg';
import * as Header from '../assets/img/headers/header.png';

var HeaderStyle = {
  backgroundImage: `url(${Header})`
};

class HomeHeader extends Component {

  render() {
    return (
      <header className="large-header push" style={HeaderStyle}>
          <div className="nav-container">
              <nav className="primary-nav light">
                  <a href="products.html">Products</a>
                  <a href="categories.html">Collections</a>
              </nav>
              <div className="logo">
                  <a href="/" className="logo-link">
                      <span className="hide-content">I love lamp</span>
                      <img className="big-logo" src={bigLogo} alt="I love lamp logo" aria-hidden="true"/>
                      <img className="small-logo" src={smallLogo} alt="I love lamp logo" aria-hidden="true"/>
                  </a>
              </div>
              <nav className="secondary-nav light">
                  <a href="cart.html" className="cart"><span className="cart-name">Cart(</span><span className="cart-count">0</span><span className="cart-name">)</span></a>
              </nav>
          </div>
          <div className="header-container">
              <div className="content">
                  <h1>I love carpet. I love desk.</h1>
                  <a className="btn" href="/">I love lamp</a>
              </div>
          </div>
          <div className="down-arrow"><span className="hide-content"></span><object data={arrow} type="image/svg+xml" aria-hidden="true"></object></div>
      </header>
    )
  }
};

export default HomeHeader;
