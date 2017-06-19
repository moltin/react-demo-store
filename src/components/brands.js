import React, { Component } from 'react';
var api = require('../utils/moltin.js')


class Brands extends Component {
  constructor(props) {
    super();
    this.state = {brands: null};
  }

  componentDidMount() {
    api.GetBrands()
    .then((brands) => {

      this.setState(() => {
        return {
          brands: brands
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })

  }


    render() {
      if(this.state.brands === null) {
        return (
          <div>
          <p>'no brands'</p>
          </div>
        )
      } else {
        var singleBrand = this.state.brands.data;
          return (
            <div>
              <ul>
                {singleBrand.map(function(brand) {
                  return (
                    <li key={brand.name}>
                    {brand.name}
                    </li>
                  )})}
                  </ul>
            </div>
          )
      }
    }
  };

  export default Brands;
