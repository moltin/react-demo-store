import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducers';
import createHistory from 'history/createBrowserHistory';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const middleware = applyMiddleware(thunk, createLogger(), routerMiddleware(history))

export default createStore(reducer, middleware);
