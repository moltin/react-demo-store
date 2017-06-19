const cart = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_CART':
    return {
      ...state,
      cart: 1
    };
    default:
      return state
  }
}

export default cart
