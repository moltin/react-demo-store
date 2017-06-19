import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Category from './components/category'
// import MobileNav from './components/global/MobileNav';
import Product from './components/product';
import { connect } from 'react-redux';

var api = require('./utils/moltin.js')

const mapStateToProps = state => {
  return {
    orders: state.orders
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
  }

  render() {

    return (
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route path="/categories/:ID" component={Category}/>
          <Route path="/products" component={Product}/>
      </Switch>
    );
  }
}

export default connect(mapStateToProps)(App);
