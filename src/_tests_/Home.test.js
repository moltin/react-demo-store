import React from 'react';
import Home from '../components/Home/Home';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store';

test('Home', () => {
  const component = renderer.create(
      <Provider store={store}>
    <Home/>
    </Provider>
  );
  expect(Home.find('div')).to.exist;
});
