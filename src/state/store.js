import reducer from './reducers'

// **********************************************************************
// For the redux tools
// **********************************************************************
// import { createStore } from 'redux'
import { createStore, compose } from 'redux';
const store = createStore(
  reducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
// else you only need to create a store
// const store = createStore(reducer)
// **********************************************************************

export default store;
