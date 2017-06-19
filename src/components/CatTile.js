import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
// import classes from '../index.css';
var api = require('../utils/moltin.js')

class CatTile extends Component {

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

    onMouseOver = () => console.log('hello');

  render(props) {
    console.log('hello')

    const styles = {
      viewThisResult : {position: 'absolute', bottom: 8 + 'px', left: 380 + 'px'},
      visibility : {visibility: 'hidden'}

    }

    return (
       <Col sm={6} md={3} style={{margin: 0, height: 200 + 'px'}} className="classes.catcol">

           <Link to={'/products/'+ this.props.id } product={this.props.id}>
             <img alt = {this.props.name} src= {this.props.link} onMouseOver={this.onMouseOver} style={{maxWidth: 100 + '%', height: 80 + '%', paddingTop: 30}}/>
           </Link>
           <p>{this.props.name}</p>
           <div style={styles.visibility}>
                <button >Click Me!</button>
            </div>
      </Col>
    )
  }
};



export default CatTile;
