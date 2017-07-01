import React, {Component} from 'react';
import MailingList from '../global/MailingList';
import * as WeLoveYou from '../../assets/img/weloveyou.svg';

class OrderConfirmation extends Component {
  render() {
    return (
      <main role="main" id="container" className="main-container push">
          <section className="order-confirmation">
              <div className="content">
                  <div className="confirmation">
                      <h2>Awesome, your order has been placed</h2>
                      <p>Make sure you check your emails for confirmation.</p>
                      <img src={WeLoveYou} alt="We Love You" />
                  </div>
              </div>
          </section>
          <MailingList />
      </main>
    )
  };
};

export default OrderConfirmation;
