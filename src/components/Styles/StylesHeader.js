import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';

import Modern from '../../assets/img/modern.png';
import Silver from '../../assets/img/silver.png';
import Bright from '../../assets/img/bright.png';
import Unique from '../../assets/img/unique.png';

const StylesHeader = ({ style, header }) => {
  let Header = null;

  switch (header) {
    case 'Modern':
      Header = Modern;
      break;
    case 'Silver':
      Header = Silver;
      break;
    case 'Bright':
      Header = Bright;
      break;
    case 'Unique':
      Header = Unique;
      break;
    default:
      Header = null;
  }

  return (
    <header
      className="medium-header light push"
      style={{
        backgroundImage: `url(${Header})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundOrigin: 'border-box',
        backgroundAttachment: 'scroll'
      }}>
      <div className="nav-container">
        <nav className="primary-nav">
          <Link to="/products">Products</Link>
          <Link to="/styles">Styles</Link>
        </nav>
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="hide-content">I love lamp</span>
            <div className="big-logo" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 54">
                <path fill="currentColor" d="M41.6,48.1V6.3h4.7v41.8H41.6z" />
                <path
                  fill="currentColor"
                  d="M80.1,48.1V6.3h9.2v33.4h16.3v8.4H80.1z"
                />
                <path
                  fill="currentColor"
                  d="M138.3,12c4.2-4.1,9.9-6.4,15.8-6.3c5.9-0.1,11.6,2.2,15.8,6.3c4.3,4,6.6,9.5,6.5,15.4
c0.1,5.8-2.2,11.4-6.5,15.4c-8.9,8.3-22.8,8.3-31.7,0c-4.2-4-6.6-9.6-6.5-15.4C131.7,21.5,134,15.9,138.3,12z M144.8,36.8
c2.4,2.5,5.8,3.9,9.3,3.8c3.5,0.1,6.8-1.3,9.2-3.8c5.1-5.2,5.1-13.5,0.1-18.8c-5-5.1-13.3-5.2-18.4-0.2c-0.1,0.1-0.1,0.1-0.2,0.2
C139.8,23.2,139.8,31.5,144.8,36.8L144.8,36.8z"
                />
                <path
                  fill="currentColor"
                  d="M217.4,48.1L200.2,6.3h9.8l11.4,28.3l11.3-28.3h9.8l-17.1,41.8H217.4z"
                />
                <path
                  fill="currentColor"
                  d="M271.6,48.1V6.3h28.6v8.4h-19.3v7.9h18.1v8.2h-18.1v8.9h19.7v8.4L271.6,48.1z"
                />
                <path
                  fill="currentColor"
                  d="M332.9,48.1V6.3h4.7v37.5h17.2v4.3L332.9,48.1z"
                />
                <path
                  fill="currentColor"
                  d="M382,48.1l17.7-41.8h3.6L421,48.1h-5l-4.3-10.3h-20.3L387,48.1H382z M393.2,33.5h16.7l-8.3-19.9L393.2,33.5z"
                />
                <path
                  fill="currentColor"
                  d="M452.6,48.1V6.3h4.3l16,26.5l16-26.5h4.3v41.8h-4.6V15.6l-15.6,25.6l-15.7-25.5v32.5H452.6z"
                />
                <path
                  fill="currentColor"
                  d="M528.2,48.1V6.3h13.4c3.4-0.1,6.7,1.2,9.1,3.7c2.5,2.4,3.8,5.7,3.7,9.1c0.1,3.4-1.3,6.7-3.7,9.1
c-2.4,2.4-5.7,3.7-9.1,3.6h-8.7v16.4H528.2z M532.8,27.4h8.5c2.2,0.1,4.3-0.8,5.9-2.4c3.2-3.4,3.2-8.6,0-12
c-1.5-1.6-3.7-2.5-5.9-2.4h-8.5V27.4z"
                />
              </svg>
            </div>
            <div className="small-logo" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 54">
                <path fill="currentColor" d="M28.2,48.2V6.4h4.7v41.8H28.2z" />
                <path
                  fill="currentColor"
                  d="M150.4,48.2V6.4h4.7v37.5h17.2v4.3H150.4z"
                />
                <path
                  fill="currentColor"
                  d="M199.5,48.2l17.7-41.8h3.6l17.7,41.8h-5l-4.3-10.3h-20.3l-4.3,10.3H199.5z M210.7,33.6h16.7L219,13.7
  L210.7,33.6z"
                />
                <path
                  fill="currentColor"
                  d="M270.1,48.2V6.4h4.3l16,26.5l16-26.5h4.3v41.8H306V15.7l-15.6,25.6l-15.7-25.5v32.5H270.1z"
                />
                <path
                  fill="currentColor"
                  d="M345.7,48.2V6.4h13.4c3.5,0,6.6,1.2,9.1,3.7c2.5,2.4,3.7,5.4,3.7,9.1c0,3.7-1.3,6.7-3.7,9.1
  c-2.5,2.4-5.5,3.6-9.1,3.6h-8.7v16.4H345.7z M350.4,27.5h8.5c2.3,0,4.3-0.8,5.9-2.4c1.6-1.6,2.4-3.6,2.4-6s-0.8-4.4-2.4-6
  c-1.6-1.6-3.5-2.4-5.9-2.4h-8.5V27.5z"
                />
                <path
                  fill="currentColor"
                  d="M116.1,18.3c0,3.2-1.2,6.4-3.7,8.8l-21,21l-21-21c-4.9-4.9-4.9-12.8,0-17.7c2.4-2.4,5.6-3.7,8.9-3.7
  c3.2,0,6.4,1.2,8.8,3.7l3.3,3.3l3.3-3.3c4.9-4.9,12.8-4.9,17.7,0C114.8,11.9,116.1,15.1,116.1,18.3z"
                />
              </svg>
            </div>
          </Link>
        </div>
        <nav className="secondary-nav light">
          <CartCounter />
        </nav>
      </div>
      <div className="header-container light">
        <div className="content">
          <h1>
            {style}
            <span className="hide-content"> styles</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ styles: { style, header } }) => ({
  style,
  header
});

export default connect(mapStateToProps)(StylesHeader);
