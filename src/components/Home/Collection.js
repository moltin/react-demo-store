import React, {Component} from 'react';
import * as lamp7 from '../../assets/img/products/lamp7-trans.png';
import * as lamp8 from '../../assets/img/products/lamp8-trans.png';
import * as lamp9 from '../../assets/img/products/lamp9-trans.png';
import * as lamp10 from '../../assets/img/products/lamp10-trans.png';

class Collection extends Component {
  render() {
    return (
      <div className="collection">
          <div className="content">
              <h2 className="hide-content">Our collections</h2>
              <div className="collection-list">
                  <a className="collection-item" href="collection.html" style={{"background": "#d9d9d9"}}>
                      <h3>Unique<span className="hide-content"> lamps</span></h3>
                      <img src={lamp7} alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights." aria-hidden="true"/>
                      <div className="overlay fake-btn hidden" aria-hidden="true" style={{"background": "#4d4d4d"}}>Shop <span className="hide-content">our unique collection </span>now</div>
                  </a>
                  <a className="collection-item" href="collection.html" style={{"background": "#d7f0ea"}}>
                      <h3>Modern<span className="hide-content"> lamps</span></h3>
                      <img src={lamp8} alt="Green mod - A green tripod floor lamp with a modern flair." aria-hidden="true"/>
                      <div className="overlay fake-btn hidden" aria-hidden="true" style={{"background": "#5d8077"}}>Shop <span className="hide-content">our modern collection </span>now</div>
                  </a>
                  <a className="collection-item" href="collection.html" style={{"background": "#ded7cb"}}>
                      <h3>Bright<span className="hide-content"> lamps</span></h3>
                      <img src={lamp9} alt="Orb - A floorlamp with a glass orb lampshade held up by its silver metal legs" aria-hidden="true"/>
                      <div className="overlay fake-btn hidden" aria-hidden="true" style={{"background": "#4d4841"}}>Shop <span className="hide-content">our bright collection </span>now</div>
                  </a>
                  <a className="collection-item" href="collection.html" style={{"background": "#e6e1e1"}}>
                      <h3>Silver<span className="hide-content"> lamps</span></h3>
                      <img src={lamp10} alt="Jewellery - A floor lamp with silver metal lampshade suspended over a white base" aria-hidden="true"/>
                      <div className="overlay fake-btn hidden" aria-hidden="true" style={{"background": "#666363"}}>Shop <span className="hide-content">our silver collection </span>now</div>
                  </a>
              </div>
          </div>
      </div>
    )
  }
};

export default Collection;
