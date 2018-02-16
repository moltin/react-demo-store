import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StylesHeader from './StylesHeader';
import StylesMenu from './StylesMenu';
import StylesHeading from './StylesHeading';
import StyleProducts from './StyleProducts';
import Loading from '../global/Loading';
import MobileNav from '../global/Mobile/MobileNav';

import { GetProducts } from '../../ducks/products';
import { GetCategories } from '../../ducks/categories';
import { setStyle } from '../../ducks/styles';

class StylesContainer extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  componentDidMount() {
    if (this.props.products.fetched === false) {
      this.props.GetProducts();
    }

    if (this.props.categories.fetched === false) {
      this.props.GetCategories();
    }
  }

  render() {
    const { categories, products } = this.props;

    if (categories.fetched === true && products.products) {
      if (categories.categories.data.length > 0) {
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
            </main>
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
            </main>
          </div>
        );
      }
    } else {
      return (
        <div>
          <MobileNav />
          <StylesHeader />
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ categories, products }) => ({
  categories,
  products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setStyle,
      GetProducts,
      GetCategories
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(StylesContainer);
