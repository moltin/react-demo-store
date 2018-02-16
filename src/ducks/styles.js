export const SET_STYLE = 'styles/SET_STYLE';

const initialState = {
  style: 'Bright',
  header: 'Bright',
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STYLE:
      return { ...state, style: action.style, header: action.style };

    default:
      return { ...state };
  }
};

export const setStyle = style => ({
  type: SET_STYLE,
  style,
  header: style
});
