import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const middleware = applyMiddleware(thunk, createLogger())

export default createStore(reducer, middleware);
