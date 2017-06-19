import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import { GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
var api = require('../utils/moltin.js')

class Product extends Component {

  handleCart(id) {

    api.AddCart(id)

    .then((cartData) => {
    return (
      this.setState(() => {
        return {
          cart: cartData
        }
      })
    )
    })
  }

  constructor(props) {
    super(props);
    this.state = {product: null};
  }

  componentDidMount() {


    api.GetProduct(this.props.location.pathname.slice(10, 100))
    .then((product) => {
      console.log(product)
      this.setState(() => {
        return {
          product: product
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }


  render() {

    var ID = this.props.location.pathname.slice(10, 40);
    console.log(ID)

      if(this.state.product === null) {
        console.log('the data did not make it through to this component')
        return (
          <div>
            <p>'the data is not in this component yet'</p>
          </div>
        )
      }

      else {
        return (
          <div>
            <p>{this.state.product.data.name}</p>
            <MuiThemeProvider>
              <GridTile
              style={{height: 200, width: 200}}
              title={this.state.product.data.name}
              subtitle={this.state.product.data.description}
              key={this.state.product.data.id}
              onMouseOver={this.onMouseOver}
              actionIcon={<IconButton><ActionAddShoppingCart  color="white" onTouchTap={() => this.handleCart(this.state.product.id)} /></IconButton>}
              >
                <img alt = {this.state.product.data.name} src= {this.state.product.data.image} style={{maxWidth: 100 + '%', height: 80 + '%', paddingTop: 30}}/>
            </GridTile>
            </MuiThemeProvider>
          </div>
      )
      }
  }
}

export default Product;
