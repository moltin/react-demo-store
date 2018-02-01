export const FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START';
export const FETCH_CATEGORIES_END = 'categories/FETCH_CATEGORIES_END';

const initialState = {
  fetching: false,
  fetched: false,
  categories: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_START:
      return { ...state, fetching: true };

    case FETCH_CATEGORIES_END:
      return {
        ...state,
        fetching: false,
        fetched: true,
        categories: action.payload
      };

    default:
      return { ...state, fetching: false };
  }
};
