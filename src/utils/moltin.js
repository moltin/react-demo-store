const moltin = require('@moltin/sdk');

var exports = module.exports = {};

const Moltin = moltin.gateway({
   client_id: 'NN8Q3BO0Ojt32fjUT2zhlGzzaAYigaBiov1KZkS3yL',
   client_secret: 'm2a3Q1GZ6vlm339B0Mjzc9XJosqVALtLV9iNKOycUA',
 });

exports.GetProducts = function() {
  return Moltin.Products.All()
 };

exports.GetCategories = function() {
  return Moltin.Categories.All()
}

exports.GetFile = function(ID) {
  return Moltin.Files.Get(ID)
}
