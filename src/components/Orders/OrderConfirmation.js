import React from 'react';
import * as WeLoveYou from '../../assets/img/weloveyou.svg';

const OrderConfirmation = () => (
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
  </main>
);

export default OrderConfirmation;
