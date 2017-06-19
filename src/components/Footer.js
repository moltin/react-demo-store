import React, {Component} from 'react';
import * as ILove from '../assets/img/footer/i-love.svg';
import * as AtLove from '../assets/img/footer/at-love.svg';
import * as WeLove from '../assets/img/footer/we-love.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="push">
      <div className="content">
          <div className="footer-content">
              <div className="footer-about">
                  <img className="footer-header" src={ILove} alt="I love lamp logo" aria-hidden="true"/>
                  <p>Do you really love lamp, or are you just saying it because you saw this?</p>
              </div>
              <nav className="footer-links">
                  <img className="footer-header" src={AtLove} alt="@ love lamp" aria-hidden="true"/>
                  <dl>
                      <dd><a href="/">About</a></dd>
                      <dd><a href="/">Shipping & Returns</a></dd>
                      <dd><a href="/">Privacy Policy</a></dd>
                      <dd><a href="/">T&CS</a></dd>
                  </dl>
              </nav>
              <nav className="footer-social">
                  <img className="footer-header" src={WeLove} alt="We love social" aria-hidden="true"/>
                  <dl>
                      <dd><a href="/">Facebook</a></dd>
                      <dd><a href="/">Instagram</a></dd>
                      <dd><a href="/">Pintrest</a></dd>
                      <dd><a href="/">Twitter</a></dd>
                  </dl>
              </nav>
          </div>
        </div>
      </footer>
    )
  }
};

export default Footer;
