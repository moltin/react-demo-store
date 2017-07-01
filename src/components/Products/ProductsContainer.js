import React, { Component } from 'react';
import AllProducts from './AllProducts';
import Footer from '../global/Footer';
import CartHeader from '../Cart/CartHeader';
import MobileNav from '../global/Mobile/MobileNav';
import { connect } from 'react-redux';
import Loading from '../global/Loading';

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

class ProductsContainer extends Component {


  render() {

    if(this.props.products.products) {

      return (
            <div>
              <MobileNav />
              <CartHeader />
              <AllProducts/>
              <Footer />
            </div>
        )
    } else {
      return (
        <div>
          <CartHeader />
          <Loading />
          <Footer />
        </div>

      )
    }
  }
}

export default connect(mapStateToProps)(ProductsContainer);
