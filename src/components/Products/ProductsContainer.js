import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AllProducts from './AllProducts';
import ProductsHeader from './ProductsHeader';
import MobileNav from '../global/Mobile/MobileNav';
import Loading from '../global/Loading';

import { GetProducts } from '../../ducks/products';

class ProductsContainer extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  componentDidMount() {
    const { fetched } = this.props;

    if (!fetched) {
      this.props.GetProducts();
    }
  }

  render() {
    const { products } = this.props;

    if (products) {
      return (
        <div>
          <MobileNav />
          <ProductsHeader />
          <AllProducts />
        </div>
      );
    } else {
      return (
        <div>
          <MobileNav />
          <ProductsHeader />
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = ({
  products: { fetching, fetched, error, products }
}) => ({
  fetching,
  fetched,
  error,
  products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
