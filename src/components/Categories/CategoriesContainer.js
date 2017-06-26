import React, {Component} from 'react';
import Category from './Category';

class CategoriesContainer extends Component {

  render() {

    return (
      <div className="collection">
          <div className="content">
              <h2 className="hide-content">Our collections</h2>

                <Category />

          </div>
      </div>
    )
  }
};

export default CategoriesContainer;
