import React, { Component } from 'react';
import '../../App.css';
import HomeHeader from './HomeHeader';
import HomeMainSection from './HomeMainSection';
import Footer from '../global/Footer';
import MobileNav from '../global/Mobile/MobileNav';
import Loading from '../global/Loading';
import { connect } from 'react-redux';

// temp: refactor to actions
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_END
} from '../../ducks/products';
import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_END
} from '../../ducks/categories';
import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_END
} from '../../ducks/collections';

// import the moltin api utility
var api = require('../../moltin.js');

function mapStateToProps(state) {
  return state;
}

class Home extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {
    // check if we already have a moltin products in the store
    if (this.props.products.fetched === false) {
      // dispatch an action to our redux reducers
      this.props.dispatch(dispatch => {
        // this action will set a fetching field to true
        dispatch({ type: FETCH_PRODUCTS_START });

        // get the moltin products from the API
        api
          .GetProducts()

          .then(products => {
            /* now that we have the products, this action will set fetching to false and fetched to true,
            as well as add the moltin products to the store */
            dispatch({ type: FETCH_PRODUCTS_END, payload: products });
          });
      });
    }

    // now we do the same thing for categories
    if (this.props.categories.fetched === false) {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_CATEGORIES_START });

        api
          .GetCategories()

          .then(categories => {
            dispatch({ type: FETCH_CATEGORIES_END, payload: categories });
          });
      });
    }

    // then collections
    if (this.props.collections.fetched === false) {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_COLLECTIONS_START });

        api
          .GetCollections()

          .then(collections => {
            dispatch({ type: FETCH_COLLECTIONS_END, payload: collections });
          });
      });
    }
  }

  render() {
    if (
      this.props.collections.collections !== null &&
      this.props.products.products !== null &&
      this.props.categories.categories !== null
    ) {
      return (
        <div>
          <MobileNav />
          <HomeHeader />
          <HomeMainSection />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <MobileNav />
          <HomeHeader />
          <Loading />
          <Footer />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(Home);
