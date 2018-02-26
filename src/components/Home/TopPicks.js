import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
  return state;
}

class TopPicks extends Component {
  render() {
    var TopPicksToMap = [];

    var collections = this.props.collections.collections.data;

    var productData = this.props.products.products.data;

    let TopPicks;

    try {
      TopPicks = collections.find(collections => {
        return collections.slug === 'top_picks';
      });
    } catch (e) {
      TopPicks = collections[0];
    }

    let TopPicksProductIDs;

    try {
      TopPicksProductIDs = TopPicks.relationships.products.data;

      TopPicksProductIDs.forEach(function(productref) {
        var TopPicksProduct = productData.find(function(product) {
          return product.id === productref.id;
        });
        TopPicksToMap.push(TopPicksProduct);
      });

      var products = this.props.products.products;

      return (
        <div>
          {TopPicksToMap.map(function(top_pick) {
            let background;

            if (top_pick.background_colour) {
              background = top_pick.background_colour;
            } else {
              background = '#d9d9d9';
            }

            var isNew = null;

            if (top_pick.new === true) {
              isNew = 'new';
            }

            return (
              <a
                className={`product-item ${isNew}`}
                href={'/product/' + top_pick.id}
                key={top_pick.id}
                id={top_pick.id}>
                <div
                  className="product-image"
                  style={{ background: background }}>
                  <ProductImage product={top_pick} products={products} />
                </div>
                <div className="overlay">
                  <div
                    className="overlay-background"
                    style={{ background: '#ad9d8b' }}
                  />
                  <div className="overlay-content">
                    <div className="title">{top_pick.name}</div>
                    <div className="price">
                      {'$' + top_pick.meta.display_price.with_tax.amount / 100}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      );
    } catch (err) {
      TopPicksProductIDs = null;
      return (
        <div className="content">
          <p>You do not have any products attached to a collection.</p>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(TopPicks);
