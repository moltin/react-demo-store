import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


class ProductGrid extends Component {

  render() {
    if(this.props.products === undefined) {
      return (
        <p>'the data did not make it through to this component'</p>
      )
    } else {
      var singleProd = this.props.products.data;
      return (
        <MuiThemeProvider>
          <GridList>
          {singleProd.map(function(product) {
            return (
              <GridTile
              onClick={() => onProductClick(product.id)}
              title={product.name}
              key={product.id}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
              <img src= 'https://s3-eu-west-1.amazonaws.com/files.moltin/96033171-6da8-473c-8ae9-d5bce520a02d/c76b5a67-400a-4e2a-99ef-0026b8cd23b2'/>
              </GridTile>
            )
          })}
          </GridList>
        </MuiThemeProvider>
      )
    }
  }
};

export default ProductGrid;
