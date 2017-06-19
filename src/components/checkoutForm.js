import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

var address1 =
  <MuiThemeProvider>
    <div>
      <TextField
        hintText="Line 1"
      />
      <br />
      <TextField
        hintText="Line 2"
      />
      <br />
      <TextField
        hintText="City"
      />
    </div>
  </MuiThemeProvider>

var address2 =
  <MuiThemeProvider>
    <div>
      <TextField
        hintText="County"
      />
      <br />
      <TextField
        hintText="Postcode"
      />
      <br />
      <TextField
        hintText="Country"
      />
    </div>
  </MuiThemeProvider>

class CheckoutForm extends Component {

  constructor(props) {
    super(props);
    this.state = {order: null};
  }

  render() {

    var buyAction = function() {

    };

    var buy =
      <div style={{paddingTop: 20}}>
        <MuiThemeProvider>
          <Link to='/order'>
            <RaisedButton label="Buy" onClick={buyAction} />
          </Link>
        </MuiThemeProvider>
      </div>

    var customer =
      <MuiThemeProvider>
        <div>
          <TextField
            hintText="First Name"
          />
          <br />
          <TextField
            hintText="Last Name"
          />
          <br />
          <TextField
            hintText="Email Address"
          />
        </div>
      </MuiThemeProvider>

    return (
    <div>
      <div className='App'>
        <h2>Checkout</h2>
      <div style={{paddingTop: 50, display: 'flex', justifyContent: 'center'}}>


        <Grid style={{width: 100 + '%'}}>
          <Row className="show-grid" style={{display: 'flex', justifyContent: 'center'}}>

          <Col sm={6} md={3} style={{padding: 0, height: 200 + 'px'}}>
            {customer}
          </Col>

          <Col sm={6} md={3} style={{padding: 0, height: 200 + 'px'}}>
            {address1}
          </Col>

          <Col sm={6} md={3} style={{padding: 0, height: 200 + 'px'}}>
            {address2}
          </Col>

          </Row>
        </Grid>
        </div>

      <div>
      {buy}
      </div>

    </div>

    </div>
    )
  }
}

export default CheckoutForm;
