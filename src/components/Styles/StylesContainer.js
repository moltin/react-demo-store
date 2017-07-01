import React, { Component } from 'react';
import MailingList from '../global/MailingList';
import CartHeaderLight from '../Cart/CartHeaderLight';
import Footer from '../global/Footer';
import StylesMenu from './StylesMenu';
import StylesHeader from './StylesHeader';
import StyleProducts from './StyleProducts';
import Loading from '../global/Loading';
import { connect } from 'react-redux';
import ModernHeader from '../../assets/img/modern.png';

function mapStateToProps(state) {
    return(state)
}

class StylesContainer extends Component {

  render() {

    if(this.props.categories.categories) {
      return (
        <div>
        <header className="medium-header push" style={{"backgroundImage": `url(${ModernHeader})`, "background-repeat": "no-repeat", "background-position": "center/cover", "box-sizing": "border-box", "overflow": "scroll", "text-align": "center"}}>
        <CartHeaderLight />
        <StylesHeader />
        </header>
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
        <CartHeaderLight/>
        <Loading />
        <Footer />
        </div>
      )
    }
  };
};

export default connect(mapStateToProps)(StylesContainer);
