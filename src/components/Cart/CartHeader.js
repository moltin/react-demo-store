import React, {Component} from 'react';
import { push } from 'react-router-redux';
import * as bigLogo from '../../assets/img/logo/ill-dark.svg';
import * as smallLogo from '../../assets/img/logo/ill-short-dark.svg';
import CartCounter from './CartCounter';

class CartHeader extends Component {
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
      <header className="push">
    <div className="nav-container">
        <nav className="primary-nav">
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
        <nav className="secondary-nav">
            <CartCounter />
        </nav>
    </div>
    <div className="header-container hide-content">
        <div className="content">
            <h1>Your cart items</h1>
        </div>
    </div>
</header>
    )
  }
};

export default CartHeader;
