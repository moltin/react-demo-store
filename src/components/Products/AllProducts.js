import React, {Component} from 'react';
import { connect } from 'react-redux';
import MailingList from '../global/MailingList';
import ProductImage from './ProductImage';

function mapStateToProps(state) {
    return(state)
}

class AllProducts extends Component {

  render() {

    if(this.props.css !== null && this.props.products.products.data.length > 0) {

      var products = this.props.products.products;

      return (
        <main role="main" id="container" className="main-container push">
          <section className="products">
            <div className="content">
              <div className="product-list">
                {products.data.map(function(product) {
                  console.log(product.background_colour);
                  
                  let background;
                  if(product.background_colour) {
                    background = product.background_colour
                  } else {
                    background = '#d9d9d9';
                  }

                  function isThereACurrencyPrice () {
                    try {
                      return <div className="price">{product.meta.display_price.with_tax.amount/100}</div>
                    } catch(e) {
                      return <div className="price">Price not available</div>
                    }
                  }
                  
                  return (
                    <a className="product-item" href={"/product/" + product.id} key={product.id} >
                      <div className="product-image" style={{"background": background}}>
                          <ProductImage product={product} products={products}/>
                      </div>
                      <div className='overlay'>
                        <div className="overlay-background" style={{"background": "#aaaaaa"}}></div>
                        <div className="overlay-content">
                          <div className="title">{product.name}</div>
                          {isThereACurrencyPrice()}
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

    return (
      <main role="main" id="container" className="main-container push">
      <section className="products">
        <div className="content">
          <p>You do not have any products</p>
        </div>
      </section>
      <MailingList />
    </main>
    )


  }
}


export default connect(mapStateToProps)(AllProducts);
