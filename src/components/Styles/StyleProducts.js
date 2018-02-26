import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
  return state;
}

class StyleProducts extends Component {
  render() {
    var productsToMap = [];
    var categories = this.props.categories.categories.data;
    var CurrentStyle = this.props.styles.style;
    var CurrentCategory = categories.find(category => {
      return category.name === CurrentStyle;
    });

    try {
      var CurrentCategoryProductIDs =
        CurrentCategory.relationships.products.data;
      var Products = this.props.products.products;
      var ProductsData = this.props.products.products.data;

      CurrentCategoryProductIDs.forEach(function(productref) {
        var Product = ProductsData.find(function(product) {
          return product.id === productref.id;
        });
        productsToMap.push(Product);
      });

      return (
        <div className="product-list">
          {productsToMap.map(function(product) {
            let background;

            if (product.background_colour) {
              background = product.background_colour;
            } else {
              background = '#d9d9d9';
            }

            return (
              <a
                className="product-item"
                href={'product/' + product.id}
                key={product.id}>
                <div
                  className="product-image"
                  style={{ background: background }}>
                  <ProductImage product={product} products={Products} />
                </div>
                <div className="overlay">
                  <div
                    className="overlay-background"
                    style={{ background: '#aaaaaa' }}
                  />
                  <div className="overlay-content">
                    <div className="title">{product.name}</div>
                    <div className="price">
                      {'$' + product.meta.display_price.with_tax.amount / 100}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      );
    } catch (err) {
      return (
        <div className="content">
          <h2>Your category has no attached products</h2>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(StyleProducts);
