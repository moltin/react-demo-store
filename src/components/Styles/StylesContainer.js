import React, { Component } from 'react';
import MailingList from '../global/MailingList';
import CartHeaderLight from '../Cart/CartHeaderLight';
import Footer from '../global/Footer';
import StylesMenu from './StylesMenu';
import StylesHeader from './StylesHeader';
import StyleProducts from './StyleProducts';
import Loading from '../global/Loading';
import { connect } from 'react-redux';
import MobileNav from '../global/Mobile/MobileNav';

import Modern from '../../assets/img/modern.png';
import Silver from '../../assets/img/silver.png';
import Classic from '../../assets/img/bright.png';
import Retro from '../../assets/img/unique.png';

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
          if(categories.data.length > 0) {
              dispatch({type: "Initial_Style", style: categories.data[0].name, header: categories.data[0].name})
          }
        
        })
      })
    }

  }

  render() {
    if(this.props.categories.categories && this.props.products.products) {
        var Header = null;

        switch (this.props.styles.header) {
          case "Modern": Header = Modern;
          break;
          case "Silver": Header = Silver;
          break;
          case "Classic": Header = Classic;
          break;
          case "Retro": Header = Retro;
          break;
          default: Header = Modern;
        }
        
        if(this.props.categories.categories.data.length > 0) {
          
        return (
          <div>
          <header className="medium-header light" style={{"backgroundImage": `url(${Header})`, "backgroundRepeat": "no-repeat", "backgroundPosition": "center/cover", "boxSizing": "border-box", "overflow": "scroll", "textAlign": "center"}}>
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
          <header className="medium-header light" style={{"backgroundImage": `url(${Header})`, "backgroundRepeat": "no-repeat", "backgroundPosition": "center/cover", "boxSizing": "border-box", "overflow": "scroll", "textAlign": "center"}}>
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
                  <h2>You do not have any categories set up with products</h2>
                </div>
              </section>
              <MailingList/>
          </main>
          <Footer />
          </div>
        )
      }
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
