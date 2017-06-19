import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import '../App.css';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var api = require('../utils/moltin');

class Cart extends Component {

  updateCartPlus(id, quantity) {
    api.UpdateCartPlus(id, quantity)

    .then((cartData) => {
      this.setState ({
        newTotal: 'yes'
      })
    })

    .catch((error) => {
      console.log(error)
    })
   }

  updateCartMinus(id, quantity) {

    api.UpdateCartMinus(id, quantity)

    .then((cartData) => {
      this.setState ({
        newTotal: 'yes'
      })
    })

    .catch((error) => {
      console.log(error)
    })
   }

  GetItems() {
   api.GetCartItems()
   .then((cart) => {
       this.setState((cartData) => {
         return (
           cart: cartData
         )
       })
   })
   .catch((error) => {
     console.log(error)
   })
 }

  constructor(props) {
    super()
    this.state = { cart:{}, newTotal: 'no'}
  }

  componentDidMount() {
    this.GetItems();
  }

  componentDidUpdate() {
    this.GetItems();
  }

  render() {
    var SingleCartItem = this.state.data

      if(SingleCartItem !== undefined) {
        return (
          <div className='App'>

              <div style={{paddingTop: 50, paddingBottom: 50}}>
              <Grid style={{width: 100 + '%'}}>
              <Row className="show-grid" style={{display: 'flex', justifyContent: 'center'}}>

                {SingleCartItem.map((item, idx) => {
                  return (
                  <Col sm={6} md={3} style={{padding: 20}} key={idx}>
                  <MuiThemeProvider>
                    <Card style={{maxWidth: 100 + '%', minHeight: 100 + '%' }} >
                      <CardTitle title={item.name} subtitle={'quantity: ' + item.quantity} />
                      <CardText>
                        {item.description}
                      </CardText>
                      <CardActions>
                        <IconButton label="Remove">
                          <ContentRemoveCircle onClick={() => this.updateCartMinus(item.id, item.quantity) }/>
                        </IconButton>
                        <IconButton label="Add">
                          <ContentAddCircleOutline onClick={() => this.updateCartPlus(item.id, item.quantity) }/>
                        </IconButton>
                      </CardActions>
                    </Card>
                  </MuiThemeProvider>
                </Col>
                  )
                })}
              </Row>
              </Grid>
            </div>

            <div>
              <MuiThemeProvider>
                <Link to='/checkoutForm'>
                  <RaisedButton label="Checkout"/>
                </Link>
              </MuiThemeProvider>
            </div>
          </div>
        )
      }

      else {
        return (
          <h2>Got no data</h2>
        )
      }

  }
}


export default Cart;
