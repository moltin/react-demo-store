// import what we need to create a react component
import React, { Component } from 'react';

// import all our child components
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import CheckoutContainer from './components/Checkout/CheckoutContainer';
import StylesContainer from './components/Styles/StylesContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import SingleProductContainer from './components/Products/SingleProductContainer';
import OrderConfirmationContainer from './components/Orders/OrderConfirmationContainer';
import NotFound from './components/global/NotFound';

// import ability to change the displayed component depending on the browser URL
import { Switch, Route } from 'react-router-dom';

// import ability to link components to our redux store
import { connect } from 'react-redux';

// import ability to hook our router up to our redux store
import { ConnectedRouter } from 'react-router-redux';

import history from './history';

// map the redux store (lives in state) to our components props
const mapStateToProps = state => {
  return state
}

// initialize our component
class App extends Component {


  render() {

    return (
      // define our routes and what component to show for each path. ConnectedRouter makes sure it lives in our redux store.
      <ConnectedRouter history={history}>
        <Switch>

          <Route exact path="/" component={Home}/>

          <Route path="/cart" component={Cart} />

          <Route path="/styles" component={StylesContainer} />

          <Route path="/products" component={ProductsContainer} />

          <Route path="/checkout" component={CheckoutContainer} />

          <Route path="/order-confirmation" component={OrderConfirmationContainer}/>

          <Route path="/product/:id" component={SingleProductContainer} />

          <Route path="*" component={NotFound} />

        </Switch>
      </ConnectedRouter>
    )
  };
};

// export the component for use elsewhere and invoke connect to connect it to the redux store
export default connect(mapStateToProps)(App);
