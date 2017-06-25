import React, {Component} from 'react';
import * as bigLogo from '../../assets/img/logo/ill-white.svg';
import * as smallLogo from '../../assets/img/logo/ill-short-white.svg';
import CartCounter from '../Cart/CartCounter';
import { push } from 'react-router-redux';

class HeaderNav extends Component {
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

  var toHome = () => {
    this.props.dispatch((dispatch) => {
      dispatch(push('/'))
    })
  }

    return (
      <div className="nav-container">
          <nav className="primary-nav light">
              <a href="products" onClick={() => toProducts()}>Products</a>
              <a href="collections" onClick={() => toCollections()}>Collections</a>
          </nav>
          <div className="logo">
              <a href="/" className="logo-link" onClick={() => toHome()}>
                  <span className="hide-content">I love lamp</span>
                  <img className="big-logo" src={bigLogo} alt="I love lamp logo" aria-hidden="true"/>
                  <img className="small-logo" src={smallLogo} alt="I love lamp logo" aria-hidden="true"/>
              </a>
          </div>
          <nav className="secondary-nav light">
              <CartCounter />
          </nav>
      </div>
    )
  }
};

export default HeaderNav;
