import React, { Component } from 'react';

class NavMenu extends Component {

  render() {
    return (
      <nav id="mobile-nav" aria-hidden="true">
          <ul>
              <li className="pushy-link"><a href="products">Products</a></li>
              <li className="pushy-link"><a href="categories">Collections</a></li>
          </ul>
      </nav>
    )
  }
};

export default NavMenu;
