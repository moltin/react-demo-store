const initialState = {
  cart: null,
  fetching: false,
  fetched: false,
  error: null,
  empty: true,
  newQuantity: false
}

const CartReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Fetch_Cart_Start": {
      return {...state,
         fetching: true,
         fetched: false,
         newQuantity: action.gotNew
       };
    }
    case "Fetch_Cart_End": {
      return {...state,
         cart: action.payload,
         fetched: true,
         fetching: false,
         newQuantity: action.gotNew
       };
    }
    case "Cart_Updated": {
      return {...state,
        newQuantity: action.gotNew
       };
    }
    default: {
      return {...state, error: action.payload, newQuantity: false};
    }
  }
};

export default CartReducer;
