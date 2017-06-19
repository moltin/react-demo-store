import React, { Component } from 'react';
import MailingList from './global/MailingList';
import * as lamp7 from '../assets/img/products/lamp7-trans.png';

class SingleProduct extends Component {
  render() {
    return (
      <main role="main" id="container" className="main-container push">
      <section className="product">
        <div className="content">
            <div className="product-listing">
                <div className="product-image" >
                    <img src={lamp7} alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights." style={{"background": "#d9d9d9"}}/>
                </div>
                <div className="product-description">
                    <h2>Crown</h2>
                    <p className="manufacturer"><span className="hide-content">Manufactured </span>By <span className="word-mark">I<span className="love">Love</span>Lamp</span></p>
                    <p className="price"><span className="hide-content">Unit price </span>$475</p>
                    <div className="description">
                        <p className="hide-content">Product details:</p>
                        <p>Abstract, sculptural and refined, edgy with a modern twist. Its symmetrical spoked structure generates a clever geometric presence, which works well in an contemporary environment.</p>
                    </div>
                    <form className="product" method="post" noValidate>
                        <div className="quantity-input">
                            <p className="hide-content">Product quantity.</p>
                            <p className="hide-content">Increment the quantity by using the plus and minus buttons, or alter the input directly.</p>
                            <button type="button" className="decrement number-button"><span className="hide-content">Decrement quantity</span><span aria-hidden="true">-</span></button>
                            <input className="quantity" name="number" type="number" min="1" max="10" value="1" size="2"/>
                            <button type="button" className="increment number-button"><span className="hide-content">Increment quantity</span><span aria-hidden="true">+</span></button>
                        </div>
                        <button type="submit" className="submit">Add to cart</button>
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
                            <div className="value">Matt black</div>
                        </div>
                        <div className="row">
                            <div className="label">Material</div>
                            <div className="value">Steel & acrylic</div>
                        </div>
                        <div className="row">
                            <div className="label">Bulb type</div>
                            <div className="value">E27</div>
                        </div>
                        <div className="row">
                            <div className="label">Max Watt</div>
                            <div className="value">40W</div>
                        </div>
                        <div className="row">
                            <div className="label">Bulb Qty</div>
                            <div className="value">6</div>
                        </div>
                        <div className="row">
                            <div className="label">SKU</div>
                            <div className="value sku">CWLP100BLK</div>
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
}

export default SingleProduct;
