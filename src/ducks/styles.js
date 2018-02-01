export const CHANGE_STYLE = 'styles/CHANGE_STYLE';
export const INITIAL_STYLE = 'styles/INITIAL_STYLE';

const initialState = {
  style: '',
  header: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STYLE:
      return { ...state, style: action.style, header: action.style };

    case INITIAL_STYLE:
      return { ...state, style: action.style, header: action.style };

    default:
      return { ...state };
  }
};
