import React, { Component } from 'react';
import MailingList from '../global/MailingList';
import CartHeaderLight from '../Cart/CartHeaderLight';
import Footer from '../global/Footer';
import StylesMenu from './StylesMenu';
import StylesHeader from './StylesHeader';
import StyleProducts from './StyleProducts';
import Loading from '../global/Loading';
import { connect } from 'react-redux';
import ModernHeader from '../../assets/img/modern.png';
import MobileNav from '../global/Mobile/MobileNav';
var api = require('../../utils/moltin.js');

function mapStateToProps(state) {
    return(state)
}

class StylesContainer extends Component {

  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {

    // check if we already have a moltin products in the store
    if(this.props.products.fetched === false) {
      this.props.dispatch((dispatch) => {

          dispatch({type: "Fetch_Products_Start"})

          api.GetProducts()

          .then((products) => {
            dispatch({type: "Fetch_Products_End", payload: products})
          })
      })
    }

    // now we do the same thing for categories
    if(this.props.categories.fetched === false) {
      this.props.dispatch((dispatch) => {
        dispatch({type: "Fetch_Categories_Start"})

        api.GetCategories()

        .then((categories) => {
          dispatch({type: "Fetch_Categories_End", payload: categories})
        })
      })
    }

  }

  render() {

    if(this.props.categories.categories && this.props.products.products) {
      return (
        <div>
        <header className="medium-header push" style={{"backgroundImage": `url(${ModernHeader})`, "backgroundRepeat": "no-repeat", "backgroundPosition": "center/cover", "boxSizing": "border-box", "overflow": "scroll", "textAlign": "center"}}>
        <MobileNav />
        <CartHeaderLight />
        <StylesHeader />
        </header>
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
            <MailingList/>
        </main>
        <Footer />
        </div>
      )
    }

    else {
      return (
        <div>
        <MobileNav />
        <CartHeaderLight/>
        <Loading />
        <Footer />
        </div>
      )
    }
  };
};

export default connect(mapStateToProps)(StylesContainer);
