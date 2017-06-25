const initialState = {
  cart: null,
  fetching: false,
  fetched: false,
  error: null
}

const CartReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Fetch_Cart": {
      return {...state,
         cart: action.payload,
         fetched: true
       };
    }
    default: {
      return {...state, error: action.payload};
    }
  }
};

export default CartReducer;
