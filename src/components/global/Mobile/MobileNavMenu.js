import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => (
  <nav id="mobile-nav" aria-hidden="true" className="pushy pushy-left">
    <ul>
      <li className="pushy-link">
        <Link to="/products">Products</Link>
      </li>
      <li className="pushy-link">
        <Link to="/styles">Styles</Link>
      </li>
    </ul>
  </nav>
);

export default NavMenu;
