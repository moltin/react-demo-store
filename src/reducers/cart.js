const initialState = {
  cart: null,
  error: null
}

const CartReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Fetch_Cart": {
      return {...state,
         cart: action.payload
       };
    }
    default: {
      return {...state, error: action.payload};
    }
  }
};

export default CartReducer;
