const moltin = require('@moltin/sdk');
//const config = require('../config/config');
var env_client_id = "";

if(process.env.REACT_APP_CLIENT_ID !== undefined) {
  env_client_id = process.env.REACT_APP_CLIENT_ID;
}
// else if(!fso.FolderExists('../config/config')) {
//     alert("Folder does not exist!");
//     return;
// }
else {
  env_client_id = "j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4"
}

var exports = module.exports = {};

const Moltin = moltin.gateway({
    client_id: env_client_id
    //client_id: config.client_id
    //client_id: "j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4"
 });

exports.GetProducts = function() {
  return Moltin.Products.With('files, main_images, collections').All()
 };

exports.GetProduct = function(ID) {
  return Moltin.Products.Get(ID)
}

exports.GetCategories = function() {
  return Moltin.Categories.With('products').All()
}

exports.GetCollections = function() {
  return Moltin.Collections.With('products').All()
}

exports.GetCategory = function(ID) {
  return Moltin.Categories.Get(ID)
}

exports.GetBrands = function() {
  return Moltin.Brands.All()
}

exports.GetFile = function(ID) {
  return Moltin.Files.Get(ID)
}

exports.AddCart = function(id, quantity) {
  return Moltin.Cart.AddProduct(id, quantity)
}

exports.UpdateCartPlus = function(ID, quantity) {
  return Moltin.Cart.UpdateItemQuantity(ID, quantity + 1)
}

exports.UpdateCartMinus = function(ID, quantity) {
  return Moltin.Cart.UpdateItemQuantity(ID, quantity - 1)
}

exports.UpdateCart = function(ID, quantity) {
  return Moltin.Cart.UpdateItemQuantity(ID, quantity)
}

exports.GetCartItems = function() {
  return Moltin.Cart.Items()
}

exports.Checkout = function(data) {
  return Moltin.Cart.Checkout(data)
}

exports.GetOrder = function(ID) {
  return Moltin.Orders.Get(ID)
}
