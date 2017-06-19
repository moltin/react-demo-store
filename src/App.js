import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Category from './components/category'
// import MobileNav from './components/global/MobileNav';
import Product from './components/product';

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
          <Route path="/categories/:ID" component={Category}/>
          <Route path="/products" component={Product}/>
      </Switch>
    );
  }
}

export default App;
