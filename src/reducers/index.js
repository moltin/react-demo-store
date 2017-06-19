import { combineReducers } from 'redux';
import products from './products';
import collections from './collections';
import cart from './cart';

export default combineReducers({
  products,
  collections,
  cart
});
