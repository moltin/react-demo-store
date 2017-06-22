const moltin = require('@moltin/sdk');

var exports = module.exports = {};

const Moltin = moltin.gateway({
   client_id: 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4',
   client_secret: 'BlAu5SLjn8UWizDChYePijb1FOHQ0fHfLRke28uN1u',
 });

exports.GetProducts = function() {
  return Moltin.Products.All()
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
  return Moltin.Cart.Items()
}

exports.Checkout = function(data) {
  return Moltin.Cart.Checkout(data)
}

exports.GetOrder = function(ID) {
  return Moltin.Orders.Get(ID)
}
