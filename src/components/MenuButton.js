import React, { Component } from 'react';

class MenuButton extends Component {

  render() {
    return (
      <button id="nav-toggle" className="menu-btn nav-toggle light" aria-controls="nav-toggle" aria-expanded="false" aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g className="hamburger-menu">
                <rect className="top" y="10" width="24" height="2" fill="currentColor"/>
                <rect className="middle" y="2" width="24" height="2" fill="currentColor"/>
                <rect className="bottom" y="18" width="24" height="2" fill="currentColor"/>
            </g>
        </svg>
      </button>
    )
  }

}

export default MenuButton;
