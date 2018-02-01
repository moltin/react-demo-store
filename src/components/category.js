import React, { Component } from 'react';
var api = require('../moltin.js')

class Category extends Component {

  handleCart(id) {

    api.AddCart(id)

    .then((cartData) => {
    return (
      this.setState(() => {
        return {
          cart: cartData
        }
      })
    )
    })
  }

  constructor(props) {
    super(props);
    this.state = {category: null};
  }

  componentDidMount() {

    api.GetCategory(this.props.location.pathname.slice(12, 100))
    .then((category) => {
      console.log(category)
      this.setState(() => {
        return {
          category: category
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }


  render() {

    var arr = [];
    // var ID = this.props.location.pathname.slice(12, 40);
    //console.log(ID)

      if(this.state.category === null) {
        console.log('the data did not make it through to this component')
        return (
          <div>
            <p>'the data is not in this component yet'</p>
          </div>
        )
      }

      else {
        var data = this.state.category.data.relationships;

        var getProducts = (ID) => {
          api.GetProduct(ID)
          .then((product) => {
            console.log(arr)
            arr.Push(product)
            console.log(arr);
          })
          .catch((err) => {
            console.log(err)
          })
        };

        var checkProduct = (data) => {
          if(data.products !== undefined) {
            var prods = data.products.data;
            console.log(prods)
            prods.forEach(function(prod) {
              getProducts(prod.id)
            })
            //console.log(data.products)

          }
          else {
            console.log('no')
          }
        };


        checkProduct(data)

        return (
          <p>data is here!</p>
      )
      }
  }
}

export default Category;
