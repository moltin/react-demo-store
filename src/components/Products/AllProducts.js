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

      var OverlayIsHidden = this.props.css.OverlayIsHidden;

      var ChangeHidden = (event) => {
        if(event === "unhide") {

          this.props.dispatch((dispatch) => {
            dispatch({type: "Unhide_Overlay"})
          })
        }
        if(event === "hide") {

          this.props.dispatch((dispatch) => {
            dispatch({type: "hide_Overlay"})
          })
        }
        else {
          //console.log("something is fucked")
        }
      };

      return (
      <main role="main" id="container" className="main-container push">
      <section className="products">
          <div className="content">
              <div className="product-list">

                {products.data.map(function(product) {
                  var background = product.background_colour;
                  return (
                    <a className="product-item" href={"/product/" + product.id} key={product.id} onMouseOver={() => {ChangeHidden("unhide")}} onMouseLeave={() => {ChangeHidden("hide")}}>
                      <div className="product-image" style={{"background": background}}>
                          <ProductImage product={product} products={products}/>
                      </div>
                      <div className={`overlay ${OverlayIsHidden}`} aria-hidden="true">
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
          <h2>You do not have any products</h2>
        </div>
      </section>
      <MailingList />
    </main>
    )


  }
}


export default connect(mapStateToProps)(AllProducts);
