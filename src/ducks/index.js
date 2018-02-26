import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import products from './products';
import product from './product';
import collections from './collections';
import cart from './cart';
import categories from './categories';
import checkout from './checkout';
import styles from './styles';
import payments from './payments';

const rootReducer = combineReducers({
  product,
  products,
  collections,
  cart,
  categories,
  checkout,
  styles,
  payments,
  router: routerReducer,
  form: formReducer
});

export default rootReducer;
