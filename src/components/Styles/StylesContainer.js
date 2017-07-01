import React, { Component } from 'react';
import MailingList from '../global/MailingList';
import CartHeader from '../Cart/CartHeader';
import Footer from '../global/Footer';
import StylesMenu from './StylesMenu';
import StylesHeader from './StylesHeader';
import StyleProducts from './StyleProducts';
import Loading from '../global/Loading';
import { connect } from 'react-redux';
import ModernHeader from '../../assets/img/modern-header.svg';

function mapStateToProps(state) {
    return(state)
}

class StylesContainer extends Component {

  render() {

    if(this.props.categories.categories) {
      console.log(this.props.styles.style)
      return (
        <div>
        <div className="medium-header push" style={{"background": ModernHeader, /*"no-repeat scroll center center/cover border-box"*/}}>
        <CartHeader />
        <StylesHeader />
        </div>
        <main role="main" id="container" className="main-container push">
            <section className="style-links">
                <div className="content">
                    <StylesMenu />
                </div>
            </section>
            <section className="products">
                <div className="content">
                  <StyleProducts />
                </div>
            </section>
            <MailingList/>
        </main>
        <Footer />
        </div>
      )
    }

    else {
      return (
        <div>
        <CartHeader/>
        <Loading />
        <Footer />
        </div>
      )
    }
  };
};

export default connect(mapStateToProps)(StylesContainer);
