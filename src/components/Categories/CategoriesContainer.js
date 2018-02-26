import React, { Component } from 'react';
import Categories from './Categories';

class CategoriesContainer extends Component {
  render() {
    return (
      <div className="styles">
        <div className="content">
          <h2 className="hide-content">Our collections</h2>
          <Categories />
        </div>
      </div>
    );
  }
}

export default CategoriesContainer;
