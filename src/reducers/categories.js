const initialState = {
  fetching: false,
  fetched: false,
  categories: null,
  error: null
}

const CategoriesReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Fetch_Categories_Start": {
      return {...state, fetching: true};
    }
    case "Fetch_Categories_End": {
      return {...state,
         fetching: false,
         fetched: true,
         categories: action.payload
       };
    }
    default: {
      return {...state, fetching: false, error: action.payload};
    }
  }
};

export default CategoriesReducer;
