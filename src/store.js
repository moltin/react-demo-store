// import our logger for redux
import { createLogger } from "redux-logger";

// import a library to handle async with redux
import thunk from 'redux-thunk';

// import the redux parts needed to start our store
import { createStore, applyMiddleware } from 'redux';

// import the middleware for using react router with redux
import { routerMiddleware } from 'react-router-redux';

// import the already combined reducers for redux to use
import reducer from './reducers';

// import ability to create a browser history for our router to use
import history from './history';

// combine the middlewares we're using into a constant so that it can be used by our store
const middleware = applyMiddleware(thunk, createLogger(), routerMiddleware(history))

// create our redux store using our reducers and our middleware, and export it for use in index.js
export default createStore(reducer, middleware);
