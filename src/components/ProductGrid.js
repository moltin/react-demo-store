import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Tile from './Tile'

class ProductGrid extends Component {

  render() {

    if(this.props.products === null) {
      console.log('the data did not make it through to this component')
      return (
        <div>
          <p>'the data is not in this component yet'</p>
        </div>
      )
    }

    else {
      console.log('the data is now in the component')
      var singleProd = this.props.products;

      return (
        <Grid style={{width: 100 + '%'}}>
          <Row className="show-grid" style={{display: 'flex', justifyContent: 'center'}}>
          {singleProd.map(function(product, props) {

            if(product.image != null) {
                return (
                    <Tile name={product.name} id={product.id} link={product.image} description={product.meta.display_price.with_tax.formatted} key={product.id}/>
              )
            }

            else {
              console.log('product has no main image');
              //var backgrounds = ['#D9D9D9', '#D7F0EA', '#DED7CB', '#E6E1E1']
              return (
                  <Tile name={product.name} id={product.id} link={null} key={product.id} description={product.meta.display_price.with_tax.formatted}/>
              )
            }
          })}
          </Row>
        </Grid>
      )
    }
  }
};

export default ProductGrid;
