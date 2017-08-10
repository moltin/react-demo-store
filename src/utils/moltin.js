const MoltinGateway = require('@moltin/sdk').gateway;

let client_id = 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4';

if (process.env.REACT_APP_MOLTIN_CLIENT_ID) {
  client_id = process.env.REACT_APP_MOLTIN_CLIENT_ID;
}

var exports = module.exports = {};

const Moltin = MoltinGateway({
  client_id,
  application: 'react-demo-store'
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

exports.OrderPay = function(ID, data) {
  return Moltin.Orders.Payment(ID, data)
}

exports.DeleteCart = function() {
  return Moltin.Cart.Delete()
};