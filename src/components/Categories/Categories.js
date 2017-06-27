import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as lamp7 from '../../assets/img/products/lamp7-trans.png';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
    return(state)
}

class Categories extends Component {

  render() {

    var products = this.props.products.products;

    if(this.props.categories.categories !== null && this.props.products.products!== null) {

      var ButtonIsHidden = this.props.css.ButtonIsHidden;

      var ChangeHidden = (event) => {
        if(event === "unhide") {

          this.props.dispatch((dispatch) => {
            dispatch({type: "Unhide_Button"})
          })
        }
        if(event === "hide") {

          this.props.dispatch((dispatch) => {
            dispatch({type: "hide_Button"})
          })
        }
        else {
          //console.log("something is fucked")
        }
      };

      var productData = this.props.products.products.data;
      var product = this.props.categories.categories.included.products[0];

      return (
        <div className="collection-list">
          {this.props.categories.categories.data.map(function(category) {

            var CatProductRef = category.relationships.products.data[0];

            var CatProduct = productData.find(function(product) {
              return product.id === CatProductRef.id
            })

            var background = CatProduct.background_colour;

            return (
              <a className="collection-item" href={"/category/" + category.id} style={{"background": background}} key={category.id} onMouseEnter={() => {ChangeHidden("unhide")}} onMouseLeave={() => {ChangeHidden("hide")}}>
                <h3>{category.name}<span className="hide-content"> lamps</span></h3>
                <ProductImage product={CatProduct} products={products} alt={product.description} aria-hidden="true"/>
                <div className={`overlay fake-btn ${ButtonIsHidden}`} aria-hidden="true" style={{"background": "#4d4d4d"}}>Shop <span className="hide-content">our unique collection </span>now</div>
              </a>
            )
          })}
        </div>
      )
    }
    else {
      return (
        <a className="collection-item" href="collection.html" style={{"background": "#d9d9d9"}}>
          <h3>Unique<span className="hide-content"> lamps</span></h3>
          <img src={lamp7} alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights." aria-hidden="true"/>
          <div className="overlay fake-btn hidden" aria-hidden="true" style={{"background": "#4d4d4d"}}>Shop <span className="hide-content">our unique collection </span>now</div>
        </a>
      )
    }
  };
};

export default connect(mapStateToProps)(Categories);
