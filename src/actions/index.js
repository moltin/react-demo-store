//import { createAction } from 'redux-actions';

let cartTotal = 0

export const IncrementCart = (cart) => {
  return {
    type: 'INCREMENT_CART',
    cartTotal: cartTotal++
  }
}

//const checkoutAction = createAction('INCREMENT', amount => amount++);

export default IncrementCart;
