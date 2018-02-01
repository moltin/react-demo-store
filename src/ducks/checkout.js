export const SUBMIT_FORM = 'checkout/SUBMIT_FORM';

const initialState = {
  form: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return { ...state, form: action.payload };

    default:
      return { ...state };
  }
};
