import React, { Component } from 'react';
import '../../App.css';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import Footer from '../global/Footer';
import MobileNav from '../global/Mobile/MobileNav';
import Loading from '../global/Loading';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return(state)
}

class Home extends Component {

  render() {
    if(this.props.collections.collections !== null && this.props.products.products !== null) {
      return (
        <div>
        <MobileNav />
        <HomeHeader />
        <HomeMain />
        <Footer />
      </div>
      );
    }
    else {
      return (
        <div>
        <MobileNav />
        <HomeHeader />
        <Loading />
        <Footer />
      </div>
      );
    }
  }
}

export default connect(mapStateToProps)(Home);
