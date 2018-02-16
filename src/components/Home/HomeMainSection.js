import React from 'react';
import TopPicksContainer from './TopPicksContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';

const HomeMainSection = () => (
  <main role="main" id="container" className="main-container push">
    <CategoriesContainer />
    <TopPicksContainer />
  </main>
);

export default HomeMainSection;
