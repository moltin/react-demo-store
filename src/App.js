import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Category from './components/category'
// import MobileNav from './components/global/MobileNav';
import SingleProductContainer from './components/SingleProductContainer';
import ProductsContainer from './components/ProductsContainer';
import { connect } from 'react-redux';

var api = require('./utils/moltin.js')

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

class App extends Component {

  componentDidMount() {

    this.props.dispatch((dispatch) => {
        dispatch({type: "Fetch_Products_Start"})

        api.GetProducts()

        .then((products) => {
          dispatch({type: "Fetch_Products_End", payload: products})
        })
    })

    this.props.dispatch((dispatch) => {
      dispatch({type: "Fetch_Collections_Start"})

      api.GetCollections()

      .then((collections) => {
        dispatch({type: "Fetch_Collections_End", payload: collections})
      })
    })

    this.props.dispatch((dispatch) => {
      api.GetCartItems()

      .then((cart) => {
        dispatch({type: "Fetch_Cart", payload: cart})
      })
    })
  }

  render() {

    return (
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route path="/categories/:ID" component={Category}/>
            <Route path="/products" render={(props) => (
                <ProductsContainer {...props} />
            )}/>
          <Route path="/product" component={SingleProductContainer}/>
      </Switch>
    );
  }
}

export default connect(mapStateToProps)(App);
