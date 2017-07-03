import React, {Component} from 'react';
import CartHeader from '../Cart/CartHeader';
import MobileNav from '../global/Mobile/MobileNav';
import Footer from './Footer';

class NotFound extends Component {
  render() {
    return (
      <div className="broken-body">
        <MobileNav />
        <CartHeader/>
        <main role="main" id="container" className="main-container push">
          <section className="broken-container">
            <div className="content">
              <div className="bulb" aria-hidden="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.5 144.5">
                  <title>lights</title>
                  <path fill="currentColor" d="M72.25049,36.5a33.99157,33.99157,0,0,0-15.2207,64.38916v29.521H87.47021V100.88965A33.99157,33.99157,0,0,0,72.25049,36.5Zm8.21973,86.91016H64.02979V103.48938a33.94021,33.94021,0,0,0,16.44043.00024ZM72.25049,97.5a27,27,0,1,1,27-27A27.03078,27.03078,0,0,1,72.25049,97.5Z"/>
                  <rect className="shine" fill="currentColor" x="68.75049" y="14.08984" width="7" height="13.7002"/>
                  <rect className="shine" fill="currentColor" x="33.70511" y="28.60284" width="6.99994" height="13.70399" transform="translate(-14.17321 36.69374) rotate(-45.00144)"/>
                  <rect className="shine" fill="currentColor" x="103.79495" y="98.69317" width="6.99994" height="13.70399" transform="translate(-43.20572 106.78622) rotate(-45.00144)"/>
                  <rect className="shine" fill="currentColor" x="114.96045" y="67" width="13.69922" height="7"/>
                  <rect className="shine" fill="currentColor" x="15.84033" y="67" width="13.7002" height="7"/>
                  <rect className="shine" fill="currentColor" x="100.44293" y="31.95486" width="13.70399" height="6.99994" transform="translate(6.35059 86.24349) rotate(-44.99435)"/>
                  <rect className="shine" fill="currentColor" x="30.35308" y="102.04519" width="13.70399" height="6.99994" transform="translate(-63.72982 57.21147) rotate(-44.99435)"/>
                </svg>
              </div>
              <h2>404</h2>
              <p>Uh oh, the bulb went out!<br/>
              <a href="/">Return to the homepage</a> to see the light.</p>
            </div>
          </section>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default NotFound;
