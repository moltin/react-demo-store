import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart'

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};


class CartButton extends Component {

  constructor(props) {
    super(props);
    this.state = {cartTotal: 0};
  }

  render() {

    return (
        <MuiThemeProvider>
          <RaisedButton
            onTouchTap={this.handleClick}
            label={this.state.cartTotal}
            labelPosition="before"
            primary={true}
            icon={<ActionShoppingCart />}
            style={styles.button}
          />
        </MuiThemeProvider>
    )
  }
}

export default CartButton;
