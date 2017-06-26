import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
    return(state)
}

class TopPicks extends Component {

  render() {

    if(this.props.collections.collections !== null) {

      var products = this.props.products.products;
      var productsToMap = this.props.collections.collections.included.products;

      return(
        <div>
          {productsToMap.map(function(top_pick) {
            console.log(top_pick)
            var background = top_pick.background_colour;
            return (
              <a className="product-item new" href={"/product/" + top_pick.id} key={top_pick.id}>
                  <div className="product-image" style={{"background": background}}>
                    <ProductImage product={top_pick} products={products}/>
                  </div>
                  <div className="overlay hidden" aria-hidden="true">
                      <div className="overlay-background" style={{"background": "#ad9d8b"}}></div>
                      <div className="overlay-content">
                          <div className="title">{top_pick.name}</div>
                          <div className="price">{top_pick.meta.display_price.with_tax.amount}</div>
                      </div>
                  </div>
              </a>
            )
          })}
        </div>
      )
    }

    return (
      <p>no categories</p>
    )

  };
};

export default connect(mapStateToProps)(TopPicks);
