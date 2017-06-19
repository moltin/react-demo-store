const initialState = {
  fetching: false,
  fetched: false,
  orders: null,
  error: null
}

const ProductsReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Fetch_Products_Start": {
      return {...state, fetching: true};
    }
    case "Fetch_Products_End": {
      return {...state,
         fetching: false,
         fetched: true,
         orders: action.payload
       };
    }
    default: {
      return {...state, fetching: false, error: action.payload};
    }
  }
};

export default ProductsReducer;
