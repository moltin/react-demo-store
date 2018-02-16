import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';
import HomeMainSection from './HomeMainSection';
import MobileNav from '../global/Mobile/MobileNav';
import Loading from '../global/Loading';

import { GetProducts } from '../../ducks/products';
import { GetCategories } from '../../ducks/categories';
import { GetCollections } from '../../ducks/collections';

class Home extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  componentDidMount() {
    const { products, categories, collections } = this.props;

    if (!products.fetched) {
      this.props.GetProducts();
    }

    if (!categories.fetched) {
      this.props.GetCategories();
    }

    if (!collections.fetched) {
      this.props.GetCollections();
    }
  }

  render() {
    const { products, collections, categories } = this.props;

    if (
      collections.collections !== null &&
      products.products !== null &&
      categories.categories !== null
    ) {
      return (
        <div>
          <MobileNav />
          <HomeHeader />
          <HomeMainSection />
        </div>
      );
    } else {
      return (
        <div>
          <MobileNav />
          <HomeHeader />
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ products, categories, collections }) => ({
  products,
  categories,
  collections
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts,
      GetCategories,
      GetCollections
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
