import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state;
}

class MenuButton extends Component {
  render() {
    let menu_btn_colour;

    const parsedPath = this.props.router.location.pathname.substring(1);

    if (
      ['products', 'checkout', 'cart', 'order-confirmation'].includes(
        parsedPath
      )
    ) {
      menu_btn_colour = '';
    } else if (parsedPath.includes('product')) {
      menu_btn_colour = '';
    } else {
      menu_btn_colour = 'light';
    }

    return (
      <button
        id="nav-toggle"
        className={`menu-btn nav-toggle ${menu_btn_colour}`}
        aria-controls="nav-toggle"
        aria-expanded="false"
        aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g className="hamburger-menu">
            <rect
              className="top"
              y="10"
              width="24"
              height="2"
              fill="currentColor"
            />
            <rect
              className="middle"
              y="2"
              width="24"
              height="2"
              fill="currentColor"
            />
            <rect
              className="bottom"
              y="18"
              width="24"
              height="2"
              fill="currentColor"
            />
          </g>
        </svg>
      </button>
    );
  }
}

export default connect(mapStateToProps)(MenuButton);
