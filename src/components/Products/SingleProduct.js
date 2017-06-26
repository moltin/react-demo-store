import React, { Component } from 'react';
import MailingList from '../global/MailingList';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';
//import * as api from '../../utils/moltin';

const mapStateToProps = state => {
  return (
    state
  )
}

class SingleProduct extends Component {
  render() {

    var products = this.props.products.products;

    if (this.props.products.fetched === true) {
      var ID = this.props.router.location.pathname.slice(9, 100)

      var productArray = this.props.products.products.data.filter(function(product) {
        return product.id === ID;
      })

      var product = productArray[0];

      return (
        <main role="main" id="container" className="main-container push">
        <section className="product">
          <div className="content">
              <div className="product-listing">
                  <div className="product-image" >
                      <ProductImage product={product} products={products}/>
                  </div>
                  <div className="product-description">
                      <h2>{product.name}</h2>
                      <p className="manufacturer"><span className="hide-content">Manufactured </span>By <span className="word-mark">I<span className="love">Love</span>Lamp</span></p>
                      <p className="price"><span className="hide-content">Unit price </span>{product.meta.display_price.with_tax.amount}</p>
                      <div className="description">
                          <p className="hide-content">Product details:</p>
                          <p>{product.description}</p>
                      </div>
                      <form className="product" noValidate>
                          <div className="quantity-input">
                              <p className="hide-content">Product quantity.</p>
                              <p className="hide-content">Increment the quantity by using the plus and minus buttons, or alter the input directly.</p>
                              <button type="button" className="decrement number-button"><span className="hide-content">Decrement quantity</span><span aria-hidden="true">-</span></button>
                              <input className="quantity" name="number" type="number" min="1" max="10" defaultValue="1" size="2"/>
                              <button type="button" className="increment number-button"><span className="hide-content">Increment quantity</span><span aria-hidden="true">+</span></button>
                          </div>
                          <button type="submit" className="submit" onClick={() => {/*api.AddCart(product.id, )*/;console.log("hello")}}>Add to cart</button>
                      </form>
                  </div>
              </div>
              <div className="product-info">
                  <div className="product-details">
                      <div className="header"><h3>Product details</h3></div>
                      <div className="details-body">
                          <div className="row">
                              <div className="label">Weight</div>
                              <div className="value">1.5kg</div>
                          </div>
                          <div className="row">
                              <div className="label">Finish</div>
                              <div className="value">{product.finish}</div>
                          </div>
                          <div className="row">
                              <div className="label">Material</div>
                              <div className="value">{product.material}</div>
                          </div>
                          <div className="row">
                              <div className="label">Bulb type</div>
                              <div className="value">{product.bulb}</div>
                          </div>
                          <div className="row">
                              <div className="label">Max Watt</div>
                              <div className="value">{product.max_watt}</div>
                          </div>
                          <div className="row">
                              <div className="label">Bulb Qty</div>
                              <div className="value">{product.bulb_qty}</div>
                          </div>
                          <div className="row">
                              <div className="label">SKU</div>
                              <div className="value sku">{product.sku}</div>
                          </div>
                      </div>
                  </div>
                  <div className="product-details">
                      <div className="header"><h3>Dimensions (cm)</h3></div>
                      <div className="details-body">
                          <div className="row">
                              <div className="label">Height</div>
                              <div className="value">156</div>
                          </div>
                          <div className="row">
                              <div className="label">Width</div>
                              <div className="value">80</div>
                          </div>
                          <div className="row">
                              <div className="label">Depth</div>
                              <div className="value">80</div>
                          </div>
                      </div>
                  </div>
                  <div className="product-details">
                      <div className="header"><h3>Delivery & returns</h3></div>
                      <div className="details-body">
                          <div className="row">
                              <div className="label">Dispatch</div>
                              <div className="value">Within 2 weeks</div>
                          </div>
                          <div className="row">
                              <div className="label">Delivery</div>
                              <div className="value">£5.95</div>
                          </div>
                      </div>
                      <div className="footer">
                          <p>Read the <a href="/">delivery and returns policy</a>.</p>
                      </div>
                      </div>
                  </div>
              </div>
          </section>
          <MailingList />
      </main>
      )
    }
    else {
      return (<p>hello</p>)
    }

  }
}

export default connect(mapStateToProps)(SingleProduct);
