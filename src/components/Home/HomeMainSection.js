import React, { Component } from 'react';
import TopPicksContainer from './TopPicksContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';
import MailingList from '../global/MailingList';

class HomeMainSection extends Component {
render() {
  return (
    <main role="main" id="container" className="main-container push">
      <CategoriesContainer />
      <TopPicksContainer />
      <MailingList />
    </main>
    )
  }
}

export default HomeMainSection;
