import React from 'react';

const MailingList = () => (
  <section className="mailing-list">
    <div className="content">
      <div className="mailing-list-content">
        <h2>
          Do you <span className="love">love</span> lamp?
        </h2>
        <p>
          Sign up to recieve{' '}
          <span className="word-mark">
            I<span className="love">Love</span>Lamp
          </span>{' '}
          product news, promotions and updates.
        </p>
        <form className="newsletter-form" method="post" noValidate>
          <input
            className="email"
            required="required"
            placeholder="Email address"
            name="email"
            type="email"
            aria-label="Email"
          />
          <button type="submit" className="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default MailingList;
