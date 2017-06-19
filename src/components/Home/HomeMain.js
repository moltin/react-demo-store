import React, { Component } from 'react';
import TopPicks from './TopPicks';
import Collection from './Collection';
import MailingList from '../global/MailingList';

class Main extends Component {
render() {
  return (
    <main role="main" id="container" className="main-container push">
      <Collection />
      <TopPicks />
      <MailingList />
    </main>
    )
  }
}

export default Main;
