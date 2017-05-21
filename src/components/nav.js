import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
var api = require('../utils/moltin.js')

const MenuStyle = {
  display: 'inline-block',
  padding: '0px 15px 0px 0px',
  margin: '0px 10px 0px 0px'
};

const NavDivStyle = {
    float: 'left'
}

class Nav extends Component {

  constructor(props) {
    super();
    this.state = {categories: null};
  }

  componentDidMount() {
    api.GetCategories()
    .then((categories) => {

      this.setState(() => {
        return {
          categories: categories
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })

  }

  render() {
    if(this.state.categories === null) {
      return (
        <div style={NavDivStyle}>
          <MuiThemeProvider>
          <Paper style={MenuStyle}>
            <Menu style={MenuStyle}>
              <MenuItem primaryText="No Data" />
            </Menu>
          </Paper>
          </MuiThemeProvider>
        </div>
      )
    } else {
      var singleCat = this.state.categories.data;
        return (
          <div style={NavDivStyle}>
            <MuiThemeProvider>
            <Paper style={MenuStyle}>
              <Menu>
              {singleCat.map(function(category) {
                return (
                  <MenuItem
                    primaryText={category.name}
                    key={category.name}
                     />
                )})}
              </Menu>
            </Paper>
            </MuiThemeProvider>
          </div>
        )
    }
  }
};

export default Nav;
