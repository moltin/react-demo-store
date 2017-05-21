import React, { Component } from 'react';
var api = require('../utils/moltin.js')

class File extends Component {

  constructor(props) {
    super()
    this.state = {file: null}
  }

  componentDidMount() {

    api.GetFile(this.props.ID)

    .then((file) => {

      this.setState(() => {
        return {
          file: file
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })

  }

  render() {
    if(this.state.file === null) {
      return (
        <div>
          <p>no file</p>
        </div>
      )
    }
    else {
      console.log(this.state.file.data.link.href)
      return (
        <div>
          <p>{this.state.file.data.link.href}</p>
        </div>
      )
    }
  }
}

export default File;
