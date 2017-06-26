// import what we need to create a react component
import React, { Component } from 'react';

// import all our child components
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import CheckoutContainer from './components/Checkout/CheckoutContainer';
import CategoryContainer from './components/Categories/CategoryContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import SingleProductContainer from './components/Products/SingleProductContainer';

// import ability to change the displayed component depending on the browser URL
import { Switch, Route } from 'react-router-dom';

// import ability to link components to our redux store
import { connect } from 'react-redux';

// import ability to hook our router up to our redux store
import { ConnectedRouter } from 'react-router-redux';

// import ability to create a browser history for our router to use
import createHistory from 'history/createBrowserHistory'

// import the moltin api utility
var api = require('./utils/moltin.js')

// map the redux store (lives in state) to our components props
const mapStateToProps = state => {
  return state
}

// Create a history for the router
const history = createHistory()

// initialize our component
class App extends Component {

  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {

    // check if we already have a moltin products in the store
    if(this.props.products.fetched === false) {

      // dispatch an action to our redux reducers
      this.props.dispatch((dispatch) => {

          // this action will set a fetching field to true
          dispatch({type: "Fetch_Products_Start"})

          // get the moltin products from the API
          api.GetProducts()

          .then((products) => {
            /* now that we have the products, this action will set fetching to false and fetched to true,
            as well as add the moltin products to the store */
            dispatch({type: "Fetch_Products_End", payload: products})
          })
      })
    }

    // now we do the same thing for categories
    if(this.props.categories.fetched === false) {
      this.props.dispatch((dispatch) => {
        dispatch({type: "Fetch_Categories_Start"})

        api.GetCategories()

        .then((categories) => {
          dispatch({type: "Fetch_Categories_End", payload: categories})
        })
      })
    }

    // then collections
    if(this.props.collections.fetched === false) {
      this.props.dispatch((dispatch) => {
        dispatch({type: "Fetch_Collections_Start"})

        api.GetCollections()

        .then((collections) => {
          dispatch({type: "Fetch_Collections_End", payload: collections})
        })
      })
    }
  }

  render() {

    return (
      // here we define our routes and what component to show for each path. ConnectedRouter makes sure it lives in our redux store.
      <ConnectedRouter history={history}>
        <Switch>

          <Route exact path="/" component={Home}/>

          <Route path="/cart" component={Cart} />

          <Route path="/category/:ID" component={CategoryContainer} />

          <Route path="/products" component={ProductsContainer} />

          <Route path="/product/:id" component={SingleProductContainer} />

          <Route path="/checkout" component={CheckoutContainer} />

        </Switch>
      </ConnectedRouter>

    );
  }
}

// export the component for use elsewhere and invoke connect to connect it to the redux store
export default connect(mapStateToProps)(App);
