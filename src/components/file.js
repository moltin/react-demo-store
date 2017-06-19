import React, { Component } from 'react';
var api = require('../utils/moltin.js')

class File extends Component {

  constructor(props) {
    super()
    this.state = {file: null}
  }


render(props) {

    try {
    api.GetFile(this.props.fileID)

    .then((file) => {
      return (
        <Tile name={product.name} id={product.id} link='https://s3-eu-west-1.amazonaws.com/files.moltin/96033171-6da8-473c-8ae9-d5bce520a02d/c76b5a67-400a-4e2a-99ef-0026b8cd23b2'/>
      )
    })
  }

  catch(e){
    return (<Tile name={product.name} id={product.id} link='https://s3-eu-west-1.amazonaws.com/files.moltin/96033171-6da8-473c-8ae9-d5bce520a02d/af5340f6-620b-4d94-a51a-7f6a1c07c41e'/>)
  }
}

export default File;
