import React from 'react';

const ProductImage = props => {
  let file;
  let fileId;
  let placeholder =
    'https://placeholdit.imgix.net/~text?txtsize=69&txt=824%C3%971050&w=824&h=1050';

  var isThereAMainImage = product => {
    fileId = props.product.relationships.main_image.data.id;

    file = props.products.included.main_images.find(function(el) {
      return fileId === el.id;
    });

    return (
      (
        <img
          alt={props.product.name + '-' + props.product.description}
          src={file.link.href}
          style={{ background: props.background }}
        />
      ) || <img alt="placeholder" src={placeholder} />
    );
  };

  var isThereAFile = product => {
    try {
      fileId = props.product.relationships.files.data[0].id;
      file = props.products.included.files.find(function(el) {
        return fileId === el.id;
      });
      return (
        <img
          alt={props.product.name + ', ' + props.product.description}
          src={file.link.href}
          style={{ background: props.background }}
        />
      );
    } catch (e) {
      return <img alt="placeholder" src={placeholder} />;
    }
  };

  try {
    return isThereAMainImage(props.product);
  } catch (e) {
    return isThereAFile(props.product);
  }
};

export default ProductImage;
