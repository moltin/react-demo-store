import React, { Component } from 'react';
import AllProducts from './AllProducts';
import Footer from '../global/Footer';
import CartHeader from '../Cart/CartHeader';
import MobileNav from '../global/Mobile/MobileNav';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

class ProductsContainer extends Component {

  constructor(props) {
    super();
  }

  render() {

    return (
          <div>
            <MobileNav />
            <CartHeader />
            <AllProducts/>
            <Footer />
          </div>
      )

  }
}

export default connect(mapStateToProps)(ProductsContainer);
