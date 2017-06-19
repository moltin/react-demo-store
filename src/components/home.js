import React, { Component } from 'react';
import '../App.css';
import Nav from './nav';
import HomeHeader from './HomeHeader';
import Main from './Main';
import Footer from './Footer';
import { connect } from 'react-redux';
var api = require('../utils/moltin');

function mapStateToProps(state) {
    return(state)
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {products: null, featuredProducts: null, notFeaturedProducts: null, cartTotal: 'Cart'};
  }

  componentDidMount() {
    api.GetProducts()
    .then((products) => {

      this.setState(() => {
        return {
          products: products
        }
      })
    })

    .then(() => {
      var products = this.state.products.data;

      var featured = products.filter((product) => {
        return product.isFeatured === true;
      })

      var notFeatured = products.filter((product) => {
        return product.isFeatured !== true;
      })

      this.setState(() => {
        return {
          featuredProducts: featured,
          notFeaturedProducts: notFeatured
        }
      })

    })

    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    //console.log(this.state.products)

    return (
      <div className="App">
      <Nav />
      <HomeHeader />
      <Main />
      <Footer />
    </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
