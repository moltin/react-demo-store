import React, { Component } from 'react';
import * as lamp1 from '../assets/img/products/lamp1-trans.png';
import * as lamp2 from '../assets/img/products/lamp2-trans.png';
import * as lamp3 from '../assets/img/products/lamp3-trans.png';
import * as lamp4 from '../assets/img/products/lamp4-trans.png';
import * as lamp5 from '../assets/img/products/lamp5-trans.png';
import * as lamp6 from '../assets/img/products/lamp6-trans.png';

class TopPicks extends Component {

  render() {

      return (
        <section className="top-picks">
        <div className="content">
            <h2>Top picks</h2>
            <div className="product-list">
                <a className="product-item new" href="product.html">
                    <div className="product-image" style={{"background": "#e2d1bf"}}>
                        <img src={lamp1} alt="Black mod - A black tripod floor lamp with a modern flair."/>
                    </div>
                    <div className="overlay hidden" aria-hidden="true">
                        <div className="overlay-background" style={{"background": "#ad9d8b"}}></div>
                        <div className="overlay-content">
                            <div className="title">Black mod</div>
                            <div className="price">$400</div>
                        </div>
                    </div>
                </a>
                <a className="product-item" href="product.html">
                    <div className="product-image" style={{"background": "#dadada"}}>
                        <img src={lamp2} alt="Little grey - A small table lamp with a rotund lampshade."/>
                    </div>
                    <div className="overlay hidden" aria-hidden="true">
                        <div className="overlay-background" style={{"background": "#aaaaaa"}}></div>
                        <div className="overlay-content">
                            <div className="title">Little grey</div>
                            <div className="price">$245</div>
                        </div>
                    </div>
                </a>
                <a className="product-item" href="product.html">
                    <div className="product-image" style={{"background": "#f0e4e4"}}>
                        <img src={lamp3} alt="Red woman - A wrought iron table lamp with lovely curves and a tall red lampshade."/>
                    </div>
                    <div className="overlay hidden" aria-hidden="true">
                        <div className="overlay-background" style={{"background": "#c3a3a3"}}></div>
                        <div className="overlay-content">
                            <div className="title">Red woman</div>
                            <div className="price">$290</div>
                        </div>
                    </div>
                </a>
                <a className="product-item" href="product.html">
                    <div className="product-image" style={{"background": "#f0f0f0"}}>
                        <img src={lamp4} alt="White mod - A white tripod floorlamp with a modern flair."/>
                    </div>
                    <div className="overlay hidden" aria-hidden="true">
                        <div className="overlay-background" style={{"background": "#c4c4c4"}}></div>
                        <div className="overlay-content">
                            <div className="title">White mod</div>
                            <div className="price">$400</div>
                        </div>
                    </div>
                </a>
                <a className="product-item" href="product.html">
                    <div className="product-image" style={{"background": "#f1e2cc"}}>
                        <img src={lamp5} alt="Woodsy - A wide rotund brown lampshade suspended over its wooden tripod legs."/>
                    </div>
                    <div className="overlay hidden" aria-hidden="true">
                        <div className="overlay-background"  style={{"background": "#c0af95"}}></div>
                        <div className="overlay-content">
                            <div className="title">Woodsy</div>
                            <div className="price">$395</div>
                        </div>
                    </div>
                </a>
                <a className="product-item sale" href="product.html">
                    <div className="product-image" style={{"background": "#f0f0f0"}}>
                        <img src={lamp6} alt="Multi-vibe - A multi-coloured table lamp with a organic kaleidoscope pattern"/>
                    </div>
                    <div className="overlay hidden" aria-hidden="true">
                        <div className="overlay-background" style={{"background": "#c4c4c4"}}></div>
                        <div className="overlay-content">
                            <div className="title">Multi-vibe</div>
                            <div className="price">$325</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        </section>
      )
  }
};

export default TopPicks;
