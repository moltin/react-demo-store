export const UPDATE_QUANTITY = 'product/UPDATE_QUANTITY';

const initialState = {
  quantity: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUANTITY:
      return { ...state, quantity: action.payload };

    default:
      return { ...state };
  }
};
