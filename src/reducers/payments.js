const initialState = {
processing: false,
complete: false,
error: null
}

const PaymentsReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Submit_Payment": {
      return {...state, processing: true, complete: false};
    }
    case "Payment_Complete": {
      return {...state, processing: false, complete: true};
    }
    default: {
      return {...state, error: action.payload};
    }
  }
};

export default PaymentsReducer;
