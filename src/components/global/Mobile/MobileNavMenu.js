import React, { Component } from 'react';
import { push } from 'react-router-redux';

class NavMenu extends Component {

  render() {

    var toProducts = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/products'))
      })
    }

    var toStyles = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/styles'))
      })
    }

    return (
      <nav id="mobile-nav" aria-hidden="true" className="pushy pushy-left">
          <ul>
              <li className="pushy-link"><a href="products" onClick={() => toProducts()}>Products</a></li>
              <li className="pushy-link"><a href="styles" onClick={() => toStyles()}>Styles</a></li>
          </ul>
      </nav>
    )
  }
};

export default NavMenu;
