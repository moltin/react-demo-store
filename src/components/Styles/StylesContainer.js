import React, { Component } from 'react';
import MailingList from '../global/MailingList';
import StylesHeader from './StylesHeader';
import Footer from '../global/Footer';
import StylesMenu from './StylesMenu';
import StylesHeading from './StylesHeading';
import StyleProducts from './StyleProducts';
import Loading from '../global/Loading';
import { connect } from 'react-redux';
import MobileNav from '../global/Mobile/MobileNav';

import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_END
} from '../../ducks/products';
import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_END
} from '../../ducks/categories';
import { INITIAL_STYLE } from '../../ducks/styles';

var api = require('../../moltin.js');

function mapStateToProps(state) {
  return state;
}

class StylesContainer extends Component {
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
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_PRODUCTS_START });

        api
          .GetProducts()

          .then(products => {
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
            if (categories.data.length > 0) {
              dispatch({
                type: INITIAL_STYLE,
                style: categories.data[0].name,
                header: categories.data[0].name
              });
            }
          });
      });
    }
  }

  render() {
    if (this.props.categories.categories && this.props.products.products) {
      if (this.props.categories.categories.data.length > 0) {
        return (
          <div>
            <MobileNav />
            <StylesHeader />
            <main role="main" id="container" className="main-container push">
              <section className="style-links">
                <div className="content">
                  <StylesMenu />
                </div>
              </section>
              <section className="products">
                <div className="content">
                  <StyleProducts />
                </div>
              </section>
              <MailingList />
            </main>
            <Footer />
          </div>
        );
      } else {
        return (
          <div>
            <MobileNav />
            <StylesHeader />
            <StylesHeading />
            <main role="main" id="container" className="main-container push">
              <section className="style-links">
                <div className="content">
                  <StylesMenu />
                </div>
              </section>
              <section className="products">
                <div className="content">
                  <p>You do not have any categories set up with products</p>
                </div>
              </section>
              <MailingList />
            </main>
            <Footer />
          </div>
        );
      }
    } else {
      return (
        <div>
          <MobileNav />
          <StylesHeader />
          <Loading />
          <Footer />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(StylesContainer);
