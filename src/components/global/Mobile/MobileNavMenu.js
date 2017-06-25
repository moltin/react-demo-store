import React, { Component } from 'react';
import { push } from 'react-router-redux';

class NavMenu extends Component {

  render() {

    var toProducts = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/products'))
      })
    }

    var toCollections = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/collections'))
      })
    }

    return (
      <nav id="mobile-nav" aria-hidden="true" className="pushy pushy-left">
          <ul>
              <li className="pushy-link"><a href="products" onClick={() => toProducts()}>Products</a></li>
              <li className="pushy-link"><a href="collections" onClick={() => toCollections()}>Collections</a></li>
          </ul>
      </nav>
    )
  }
};

export default NavMenu;
