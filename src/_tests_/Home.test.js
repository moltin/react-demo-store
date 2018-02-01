import React from 'react';
import Home from '../components/Home/Home';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

const store = mockStore({})
moxios.stubRequest(
  'https://status.github.com/api.json',
  {
    status: 200,
    response: {
      result: 'foobar'
    }
  }
)

const p = await store.dispatch(statusActionPromise())
// note: value is the value from redux-promise-middleware
const js = await p.value.data
expect(js).toMatchSnapshot()
expect(store.getActions()).toMatchSnapshot()
