import React, { Component } from 'react';
var api = require('../utils/moltin');

class Order extends Component {

  componentDidMount() {
    api.Checkout(
      {
        customer: {
          name: 'John Doe',
          email: 'john@doe.co'
        },
        shipping_address: {
          first_name: 'John',
          last_name: 'Doe',
          line_1: '2nd Floor British India House',
          line_2: '15 Carliol Square',
          city: 'Newcastle Upon Tyne',
          postcode: 'NE1 6UF',
          county: 'Tyne & Wear',
          country: 'United Kingdom'
        },
        billing_address: {
          first_name: 'John',
          last_name: 'Doe',
          line_1: '2nd Floor British India House',
          line_2: '15 Carliol Square',
          city: 'Newcastle Upon Tyne',
          postcode: 'NE1 6UF',
          county: 'Tyne & Wear',
          country: 'United Kingdom'
        }
      }
    )
    .then((order) => {
      this.setState(() => {
        return {
          orders: order
        }
      })
    })

    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    if(this.state === null) {
      return (
        <div>
        <h2>Your Order Is not made yet</h2>
        </div>
      )
    }
    else {
      console.log(this.state)
      return (
        <div>
        <h2 >Your Order</h2>
        <p>is {this.state.orders.data.payment}</p>
        </div>
      )
    }
  }
}

export default Order;
