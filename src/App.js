import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/home'
import Cart from './components/cart';
import Order from './components/order';
import Categories from './components/categories';
import Category from './components/category'
import Nav from './components/nav';
import Product from './components/product';
import checkoutForm from './components/checkoutForm';

var api = require('./utils/moltin.js')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {products: null, cart: '0'};
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

    .catch((error) => {
      console.log(error)
    })

  }

  render() {

    return (
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/order' component={Order} />
          <Route exact path='/nav' component={Nav} />
          <Route exact path='/categories' component={Categories} />
          <Route path="/categories/:ID" component={Category}/>
          <Route path="/products/:ID" component={Product}/>
          <Route exact path='/checkoutForm' component={checkoutForm} />
      </Switch>
    );
  }
}

export default App;
