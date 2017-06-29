const initialState = {
form: null,
error: null
}

const CheckoutReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Submit_Form": {
      return {...state, form: action.payload};
    }
    default: {
      return {...state, error: action.payload};
    }
  }
};

export default CheckoutReducer;
