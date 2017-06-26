import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
    return(state)
}

class TopPicks extends Component {

  render() {
    var products = this.props.products.products;
    if(this.props.products.products !== null) {
      var top_picks = this.props.products.products.data.filter(function(top_pick) {
        return top_pick.relationships.collections !== null
      });
      return(
        <div>
          {top_picks.map(function(top_pick) {
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
