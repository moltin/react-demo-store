const initialState = {
  OverlayIsHidden: "hidden",
  ButtonIsHidden: "hidden",
  error: null,
  id: null
}

const CSSReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Unhide_Overlay": {
      return {...state, OverlayIsHidden: null, id: action.id};
    }
    case "hide_Overlay": {
      return {...state, OverlayIsHidden: "hidden", id: action.id};
    }
    case "Unhide_Button": {
      return {...state, ButtonIsHidden: null, id: action.id};
    }
    case "hide_Button": {
      return {...state, ButtonIsHidden: "hidden", id: action.id};
    }
    default: {
      return {...state};
    }
  }
};

export default CSSReducer;
