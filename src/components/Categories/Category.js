import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
    return(state)
}

class Category extends Component {

  render() {

    return (
      <p>hello</p>
    )

  };
};

export default connect(mapStateToProps)(Category);
