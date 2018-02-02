import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { connect } from 'react-redux'
import { addNameToState } from './state/actions';
import ListView from './ListView'

class App extends Component {
  render() {
    return (
      <ListView />
    );
  }
}

const getStateFromReduxPassToAppComponentAsProps = (state) => {
  return {
    appViewState: state.viewState
  }
}

// const getDispatchFromReduxToAppComponentAsProps = (dispatch) => {
//   return {
//     appInitialView(dispatchName) {
//       dispatch(initialView(dispatchName))
//     }
//   }
// }

export default connect(getStateFromReduxPassToAppComponentAsProps)(App)
