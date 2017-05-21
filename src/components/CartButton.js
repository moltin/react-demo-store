import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';


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
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton
            label="Cart"
            labelPosition="before"
            primary={true}
            icon={<ActionAndroid />}
            style={styles.button}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default CartButton;
