const initialState = {
  style: "",
  header: null,
  error: null
}

const StylesReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Change_Style": {
      return {...state, style: action.style, header: action.style};
    }
    case "Initial_Style": {
      return {...state, style: action.style, header: action.style};
    }
    default: {
      return {...state, error: action.style};
    }
  }
};

export default StylesReducer;
