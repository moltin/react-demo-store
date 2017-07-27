import React, { Component } from 'react';

class ProductImage extends Component {

  render() {
    var placeholder = 'https://placeholdit.imgix.net/~text?txtsize=69&txt=824%C3%971050&w=824&h=1050';

    try {
      var fileId = this.props.product.relationships.files.data[0].id;
      var file = this.props.products.included.files.find(function (el) {
        return fileId === el.id
      })
      
      return <img alt="" src={file.link.href} style={{"background": this.props.background}}/> || <img alt="" src={placeholder}/>

    } catch (e) {
      return <img alt="" src={placeholder}/>
    }

  }
}

export default ProductImage;
