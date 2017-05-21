import React, { Component } from 'react';

class Hello extends Component {

   constructor(props) {
     super();
     this.state = {age: null};
   }

   componentDidMount() {
     this.setState(() => {
       return {
         age: 15
       }
     })
   }

  render(props) {
    //console.log(this.state)
    return (
      <div>
        <p>hello, {this.props.name} </p>
        <p>Your age is {this.state.age} </p>
        <p>Your sex is {this.props.sex} </p>
      </div>
    )
  }
};

export default Hello;
