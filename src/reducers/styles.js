const initialState = {
  style: "Modern",
  error: null
}

const StylesReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Change_Style": {
      return {...state, style: action.style};
    }

    default: {
      return {...state, error: action.style};
    }
  }
};

export default StylesReducer;
