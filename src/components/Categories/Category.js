import React, {Component} from 'react';
import { connect } from 'react-redux';
//import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
    return(state)
};

class Category extends Component {

  render() {
    if (this.props.collections.collections !== null) {
      var ID = this.props.router.location.pathname.slice(9, 100)
    }
    return (
      <p>hello, the category ID is {ID}</p>
    )
  };
};

export default connect(mapStateToProps)(Category);
