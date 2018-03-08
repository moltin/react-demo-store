import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoadingIndicator from '../global/Loading';

import { addToCart } from '../../ducks/cart';

class OneClickCheckout extends Component {
  async componentDidMount() {
    const { match: { params }, history, addToCart } = this.props;

    if (!params.productId) {
      history.push('/checkout');
    }

    await addToCart(params.productId, 1);

    history.push('/checkout');
  }

  render() {
    return <LoadingIndicator />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToCart
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(withRouter(OneClickCheckout));
