import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
  return(state)
};

class StyleProducts extends Component {
  render() {

    if(this.props.collections.collections !== null && this.props.products.products !== null) {

    var productsToMap = [];
    var categories = this.props.categories.categories.data;
    var CurrentStyle = this.props.styles.style;
    var CurrentCategory = categories.find((category) => {
      return category.name === CurrentStyle
    })
    var CurrentCategoryProductIDs = CurrentCategory.relationships.products.data;
    var Products = this.props.products.products;
    var ProductsData = this.props.products.products.data;

    CurrentCategoryProductIDs.forEach(function(productref) {
      var Product = ProductsData.find(function(product) {
        return product.id === productref.id
      })
      productsToMap.push(Product)
    })

    return (
    <div className="product-list">
    {productsToMap.map(function(product) {
      return (
        <a className="product-item" href={'product/' + product.id} key={product.id}>
            <div className="product-image" style={{"background": "#d9d9d9"}}>
              <ProductImage product={product} products={Products}/>
            </div>
            <div className="overlay">
                <div className="overlay-background" style={{"background": "#aaaaaa"}}></div>
                <div className="overlay-content">
                    <div className="title">{product.name}</div>
                    <div className="price">{'$' + product.meta.display_price.with_tax.amount/100}</div>
                </div>
            </div>
        </a>
      )
    })}

    </div>
    )
  }

    return (


      <a className="product-item" href="product.html">
          <div className="product-image" style={{"background": "#d9d9d9"}}>
              <img src="img/products/lamp7-trans.png" alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights."/>
          </div>
          <div className="overlay">
              <div className="overlay-background" style={{"background": "#aaaaaa"}}></div>
              <div className="overlay-content">
                  <div className="title">Crown</div>
                  <div className="price">$475</div>
              </div>
          </div>
      </a>
    )
  }
};

export default connect(mapStateToProps)(StyleProducts);
