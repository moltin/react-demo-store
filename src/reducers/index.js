import { combineReducers } from 'redux';
import products from './products';
import product from './product';
import collections from './collections';
import cart from './cart';
import categories from './categories';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  product,
  products,
  collections,
  cart,
  categories,
  router: routerReducer
});
