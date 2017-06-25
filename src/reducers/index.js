import { combineReducers } from 'redux';
import products from './products';
import collections from './collections';
import cart from './cart';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  products,
  collections,
  cart,
  router: routerReducer
});
