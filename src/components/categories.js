import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import CatTile from './CatTile'
var api = require('../utils/moltin.js')

class Categories extends Component {

  constructor(props) {
    super();
    this.state = {categories: null};
  }

  componentDidMount() {
    api.GetCategories()
    .then((categories) => {
      console.log(categories)
      this.setState(() => {
        return {
          categories: categories,
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {

    if(this.state.categories === null) {
      console.log('the data did not make it through to this component')
      return (
        <div>
          <p>'the data is not in this component yet'</p>
        </div>
      )
    }

    else {
      console.log('the data is now in the component')
      var singleCat = this.state.categories.data;
      console.log(singleCat)
      return (
        <Grid style={{width: 100 + '%'}}>
          <Row className="show-grid" style={{display: 'flex', justifyContent: 'center'}}>
          {singleCat.map(function(category, props) {

            if(category.id != null) {
                return (
                  <CatTile path={'/categories/'} name={category.name} id={category.id} link={category.name} description={category.description} key={category.id} background={category.background}/>
              )
            }

            else {
              console.log('product has no main image');
              //var backgrounds = ['#D9D9D9', '#D7F0EA', '#DED7CB', '#E6E1E1']
              return (
                <CatTile name={category.name} id={category.id} link={category.name} description={category.description} key={category.id}/>
              )
            }
          })}
          </Row>
        </Grid>
      )
    }
  }
};

export default Categories;
