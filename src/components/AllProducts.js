import React, {Component} from 'react';
import MailingList from './global/MailingList';
import * as lamp7 from '../assets/img/products/lamp7-trans.png';

class AllProducts extends Component {

  render() {
    var products = this.props.products.products

    return (
    <main role="main" id="container" className="main-container push">
    <section className="products">
        <div className="content">
            <div className="product-list">

              {products.data.map(function(product) {

                return (
                  <a className="product-item" href="product.html" key={product.id}>
                    <div className="product-image" style={{"background": "#d9d9d9"}}>
                        <img src={lamp7} alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights."/>
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
