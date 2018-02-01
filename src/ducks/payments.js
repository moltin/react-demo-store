export const SUBMIT_PAYMENT = 'payments/SUBMIT_PAYMENT';
export const PAYMENT_COMPLETE = 'payments/PAYMENT_COMPLETE';

const initialState = {
  processing: false,
  complete: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PAYMENT:
      return { ...state, processing: true, complete: false };

    case PAYMENT_COMPLETE:
      return { ...state, processing: false, complete: true };

    default:
      return { ...state };
  }
};
