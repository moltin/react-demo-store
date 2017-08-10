import { reducer as formReducer } from 'redux-form';

//import the function we need to combine multiple redux reducers
import { combineReducers } from 'redux';

// import our individual reducers so we can combine them
import products from './products';
import product from './product';
import collections from './collections';
import cart from './cart';
import categories from './categories';
import checkout from './checkout';
import styles from './styles';
import payments from './payments';

// import a special reducer that allows us to use routing in redux
import { routerReducer } from 'react-router-redux';

// combine our reducers and export
export default combineReducers({
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
