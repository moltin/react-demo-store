const initialState = {
  cart: null,
  fetching: false,
  fetched: false,
  error: null,
  newQuantity: false
}

const CartReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Fetch_Cart_Start": {
      return {...state,
         fetching: true,
         fetched: false
       };
    }
    case "Fetch_Cart_End": {
      return {...state,
         cart: action.payload,
         fetched: true,
         fetching: false
       };
    }
    case "Cart_Updated": {
      return {...state,
        newQuantity: action.gotNew
       };
    }
    default: {
      return {...state, error: action.payload};
    }
  }
};

export default CartReducer;
