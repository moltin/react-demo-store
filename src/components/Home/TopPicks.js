import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
    return(state)
}

class TopPicks extends Component {

  render() {

    if(this.props.collections.collections !== null && this.props.products.products !== null) {

      var id = Math.floor(Math.random() * 0xFFFF);

      var TopPicksToMap = [];

      var collections = this.props.collections.collections.data;

      var productData = this.props.products.products.data;

      var TopPicks = collections.find((collections) => {
        return collections.slug === "top_picks"
      })

      var TopPicksProductIDs = TopPicks.relationships.products.data;

      TopPicksProductIDs.forEach(function(productref) {
        var TopPicksProduct = productData.find(function(product) {
          return product.id === productref.id
        })
        TopPicksToMap.push(TopPicksProduct)
      })

      var products = this.props.products.products;
      var OverlayIsHidden = this.props.css.OverlayIsHidden;

      var ChangeHidden = (event) => {
        if(event === "unhide") {

          this.props.dispatch((dispatch) => {
            dispatch({type: "Unhide_Overlay", id: id})
          })
        }
        if(event === "hide") {

          this.props.dispatch((dispatch) => {
            dispatch({type: "hide_Overlay", id: id})
          })
        }
        else {
          //console.log("something is fucked")
        }
      };

      return(
        <div>
          {TopPicksToMap.map(function(top_pick) {

            var background = top_pick.background_colour;
            // var ariaIsHidden = "true";
            var isNew = null;

            if(top_pick.new === true) {
              isNew = "new"
            }

            return (
              <a className={`product-item ${isNew}`} href={"/product/" + top_pick.id} key={top_pick.id} id={id}>
                  <div className="product-image" style={{"background": background}} onMouseEnter={() => {ChangeHidden("unhide")}} onMouseLeave={() => {ChangeHidden("hide")}}>
                    <ProductImage product={top_pick} products={products}/>
                  </div>
                  <div className={`overlay ${OverlayIsHidden}`} aria-hidden="true">
                      <div className="overlay-background" style={{"background": "#ad9d8b"}}></div>
                      <div className="overlay-content">
                          <div className="title">{top_pick.name}</div>
                          <div className="price">{'$' + top_pick.meta.display_price.with_tax.amount/100}</div>
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
