import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers.js';
import {API_URL} from './actions';

// **********************************************************************
// For the redux tools
// **********************************************************************
// import { createStore } from 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(API_URL))
  )
)
// else you only need to create a store
// const store = createStore(reducer)
// **********************************************************************
