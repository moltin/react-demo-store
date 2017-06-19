import React, { Component } from 'react';

class NavMenu extends Component {

  render() {
    return (

      <nav id="mobile-nav" role="navigation" aria-hidden="true">
          <ul>
              <li className="pushy-link"><a href="products.html">Products</a></li>
              <li className="pushy-link"><a href="categories.html">Collections</a></li>
          </ul>
      </nav>
    )
  }
};

export default NavMenu;
