import React, { Component } from 'react';
import HeaderNav from '../global/HeaderNav';
import * as Header from '../../assets/img/headers/header.png';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

var HeaderStyle = {
  backgroundImage: `url(${Header})`
};

function mapStateToProps(state) {
    return(state)
}

class HomeHeader extends Component {

  render() {

    var toHome = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/'))
      })
    }

    return (

      <header className="large-header light push" style={HeaderStyle}>

      <HeaderNav />
          <div className="header-container">
              <div className="content">
                  <h1>I love carpet. I love desk.</h1>
                  <a className="btn" href="/" onClick={() => toHome()}>I love lamp</a>
              </div>
          </div>
          <div className="down-arrow"><span className="arrow">	&#10095; </span></div>
      </header>
    )
  }
};

export default connect(mapStateToProps)(HomeHeader);
