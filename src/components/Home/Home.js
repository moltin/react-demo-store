import React, { Component } from 'react';
import '../../App.css';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import Footer from '../global/Footer';
import MobileNav from '../global/Mobile/MobileNav';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return(state)
}

class Home extends Component {

  render() {
    return (
      <div className="App">
      <MobileNav />
      <HomeHeader />
      <HomeMain />
      <Footer />
    </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
