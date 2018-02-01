export const FETCH_CART_START = 'cart/FETCH_CART_START';
export const FETCH_CART_END = 'cart/FETCH_CART_END';
export const CART_UPDATED = 'cart/CART_UPDATED';

const initialState = {
  cart: null,
  fetching: false,
  fetched: false,
  error: null,
  empty: true,
  newQuantity: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_START:
      return {
        ...state,
        fetching: true,
        fetched: false,
        newQuantity: action.gotNew
      };

    case FETCH_CART_END:
      return {
        ...state,
        cart: action.payload,
        fetched: true,
        fetching: false,
        newQuantity: action.gotNew
      };

    case CART_UPDATED:
      return {
        ...state,
        newQuantity: action.gotNew
      };

    default:
      return { ...state, newQuantity: false };
  }
};
