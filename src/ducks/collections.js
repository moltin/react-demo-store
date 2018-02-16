export const FETCH_COLLECTIONS_START = 'collections/FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_END = 'collections/FETCH_COLLECTIONS_END';

const initialState = {
  fetching: false,
  fetched: false,
  collections: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, fetching: true };

    case FETCH_COLLECTIONS_END:
      return {
        ...state,
        fetching: false,
        fetched: true,
        collections: action.payload
      };

    default:
      return { ...state, fetching: false };
  }
};

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsEnd = data => ({
  type: FETCH_COLLECTIONS_END,
  payload: data
});

export const GetCollections = () => (dispatch, getState, api) => {
  dispatch(fetchCollectionsStart());

  return api
    .GetCollections()
    .then(collections => dispatch(fetchCollectionsEnd(collections)));
};
