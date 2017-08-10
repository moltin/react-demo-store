import React, { Component } from 'react';
import HeaderNav from '../global/HeaderNav';
import * as Header from '../../assets/img/headers/header.png';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

var HeaderStyle = {
  "backgroundImage": `url(${Header})`,
  "backgroundRepeat": "no-repeat",
  "backgroundAttachment": "scroll",
  "backgroundPosition": "center",
  "backgroundSize": "cover",
  "backgroundOrigin": "border-box"
};

function mapStateToProps(state) {
    return(state)
}

class HomeHeader extends Component {

  render() {

    var toProducts = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/products'))
      })
    }

    return (

      <header className="large-header light push" style={HeaderStyle}>

      <HeaderNav />
          <div className="header-container">
              <div className="content">
                  <h1>I love carpet. I love desk.</h1>
                  <a className="btn" href="/" onClick={(e) => {toProducts();e.preventDefault()}}>I love lamp</a>
              </div>
          </div>
          <div className="down-arrow" aria-hidden="true"><span className="arrow">	&#10095; </span></div>
      </header>
    )
  }
};

export default connect(mapStateToProps)(HomeHeader);
