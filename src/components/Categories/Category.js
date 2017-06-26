import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as lamp7 from '../../assets/img/products/lamp7-trans.png';

function mapStateToProps(state) {
    return(state)
}

class Category extends Component {

  render() {

    if(this.props.categories.categories !== null) {

      return (
        <div className="collection-list">
        {this.props.categories.categories.data.map(function(category) {
          return (
            <a className="collection-item" href={"/category/" + category.id} style={{"background": "#d9d9d9"}} key={category.id}>
                <h3>{category.name}<span className="hide-content"> lamps</span></h3>
                <img src={lamp7} alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights." aria-hidden="true"/>
                <div className="overlay fake-btn hidden" aria-hidden="true" style={{"background": "#4d4d4d"}}>Shop <span className="hide-content">our unique collection </span>now</div>
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

export default connect(mapStateToProps)(Category);
