const initialState = {
  quantity: 1
}

const ProductReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Update_Quantity": {
      return {...state, quantity: action.payload};
    }

    default: {
      return {...state};
    }
  }
};

export default ProductReducer;
