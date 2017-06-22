import React, {Component} from 'react';
import MailingList from './global/MailingList';
import ProductImage from './ProductImage';

class AllProducts extends Component {

  render() {
    var products = this.props.products.products

    return (
    <main role="main" id="container" className="main-container push">
    <section className="products">
        <div className="content">
            <div className="product-list">

              {products.data.map(function(product) {
                var background = product.background_colour;
                console.log(background)
                return (
                  <a className="product-item" href="product.html" key={product.id}>
                    <div className="product-image" style={{"background": background}}>
                        <ProductImage product={product} products={products}/>
                    </div>
                    <div className="overlay hidden" aria-hidden="true">
                        <div className="overlay-background" style={{"background": "#aaaaaa"}}></div>
                        <div className="overlay-content">
                            <div className="title">Crown</div>
                            <div className="price">$475</div>
                        </div>
                    </div>
                  </a>
                )

              })}


                </div>
            </div>
        </section>
        <MailingList />
      </main>
    )
  }
}


export default AllProducts;
