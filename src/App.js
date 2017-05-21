import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductGrid from './components/ProductGrid.js';
import Nav from './components/nav.js';
import CartButton from'./components/CartButton';
import File from './components/file.js'
var api = require('./utils/moltin.js')

class App extends Component {

  constructor(props) {
    super();
    this.state = {categories: null};
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
    //console.log(this.state.products);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Meme Emporium</h2>
          <CartButton />
        <div>
          <Nav />
        </div>
        <ProductGrid products={this.state.products} />
      </div>
    </div>

    );
  }
}

export default App;
