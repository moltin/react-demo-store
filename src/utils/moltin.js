const moltin = require('@moltin/sdk');
const config = require('../config/config');

var exports = module.exports = {};

const Moltin = moltin.gateway({
   client_id: config.client_id,
   client_secret: config.client_secret,
 });

exports.GetProducts = function() {
  return Moltin.Products.With('files, main_images').All()
 };

exports.GetProduct = function(ID) {
  return Moltin.Products.Get(ID)
}

exports.GetCategories = function() {
  return Moltin.Categories.All()
}

exports.GetCollections = function() {
  return Moltin.Collections.All()
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

exports.AddCart = function(id) {
  return Moltin.Cart.AddProduct(id)
}

exports.UpdateCartPlus = function(ID, quantity) {
  return Moltin.Cart.UpdateItemQuantity(ID, quantity + 1)
}

exports.UpdateCartMinus = function(ID, quantity) {
  return Moltin.Cart.UpdateItemQuantity(ID, quantity - 1)
}

exports.GetCartItems = function() {
  return Moltin.Cart.Items("custom")
}

exports.Checkout = function(data) {
  return Moltin.Cart.Checkout(data)
}

exports.GetOrder = function(ID) {
  return Moltin.Orders.Get(ID)
}
