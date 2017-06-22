const initialState = {
  fetching: false,
  fetched: false,
  collections: null,
  error: null
}

const CollectionsReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Fetch_Collections_Start": {
      return {...state, fetching: true};
    }
    case "Fetch_Collections_End": {
      return {...state,
         fetching: false,
         fetched: true,
         collections: action.payload
       };
    }
    default: {
      return {...state, fetching: false, error: action.payload};
    }
  }
};

export default CollectionsReducer;
