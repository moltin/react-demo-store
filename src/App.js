import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Category from './components/category';
import CheckoutContainer from './components/Checkout/CheckoutContainer';
import SingleProductContainer from './components/Products/SingleProductContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import { connect } from 'react-redux';
import { ConnectedRouter, /*push*/ } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
var api = require('./utils/moltin.js')

const mapStateToProps = state => {
  return state
}

// Create a history
const history = createHistory()

class App extends Component {

  componentDidMount() {

    if(this.props.products.fetched === false) {
      this.props.dispatch((dispatch) => {
          dispatch({type: "Fetch_Products_Start"})

          api.GetProducts()

          .then((products) => {
            dispatch({type: "Fetch_Products_End", payload: products})
          })
      })
    }

    if(this.props.categories.fetched === false) {
      this.props.dispatch((dispatch) => {
        dispatch({type: "Fetch_Categories_Start"})

        api.GetCategories()

        .then((categories) => {
          dispatch({type: "Fetch_Categories_End", payload: categories})
        })
      })
    }

    if(this.props.collections.fetched === false) {
      this.props.dispatch((dispatch) => {
        dispatch({type: "Fetch_Collections_Start"})

        api.GetCollections()

        .then((collections) => {
          dispatch({type: "Fetch_Collections_End", payload: collections})
        })
      })
    }
  }

  render() {

    return (

      <ConnectedRouter history={history}>
        <Switch>

          <Route exact path="/" component={Home}/>

          <Route path="/cart" component={Cart} />

          <Route path="/categories/:ID" component={Category} />

          <Route path="/products" component={ProductsContainer} />

          <Route path="/product/:id" component={SingleProductContainer} />

          <Route path="/checkout" component={CheckoutContainer} />

        </Switch>
      </ConnectedRouter>

    );
  }
}

export default connect(mapStateToProps)(App);
