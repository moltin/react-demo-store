import React, {Component} from 'react';

class MailingList extends Component {
  render() {
    return (
      <section className="mailing-list">
        <div className="content">
            <div className="mailing-list-content">
                <h2>Do you love lamp?</h2>
                <p>Sign up to recieve updates, promotions, new products and news from <span className="word-mark">I<span className="love">Love</span>Lamp</span></p>
                <form className="newsletter-form" method="post" noValidate>
                    <input className="email" required="required" placeholder="Email address" name="email" type="email" aria-label="Email"/>
                    <button type="submit" className="submit">Sign up</button>
                </form>
            </div>
        </div>
    </section>
    )
  }
}

export default MailingList;
