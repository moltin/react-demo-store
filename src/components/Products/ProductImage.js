import React, { Component } from 'react';

class ProductImage extends Component {

  render() {
    
    let file;
    let fileId;
    let placeholder = 'https://placeholdit.imgix.net/~text?txtsize=69&txt=824%C3%971050&w=824&h=1050';
    
    var isThereAMainImage = (product) => {
      fileId = this.props.product.relationships.main_image.data.id;
      
      file = this.props.products.included.main_images.find(function (el) {
        return fileId === el.id
      })

      return <img alt={this.props.product.name + '-' + this.props.product.description} src={file.link.href} style={{"background": this.props.background}}/> || <img alt="placeholder" src={placeholder}/>
    };
    
    var isThereAFile = (product) => {
      fileId = this.props.product.relationships.files.data[0].id;
      file = this.props.products.included.files.find(function (el) {
        return fileId === el.id
      })      
        return <img alt={this.props.product.name + ', ' + this.props.product.description} src={file.link.href} style={{"background": this.props.background}}/> || <img alt="placeholder" src={placeholder}/>
    };
  
    try {
      return isThereAMainImage(this.props.product)
    } catch (e) {
      return isThereAFile(this.props.product) 
    }
  };
};

export default ProductImage;
