import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addNameToState } from './state/actions';
import ListView from './ListView'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      appViewState: ''
    }
  }

  render() {
    const RenderComponent = this.props.appViewState
    return (
      <div className="margin-vert-medium margin-horiz-medium" style={ {height: '100vh', width: '100vw'} }>
        <header>
          <h1><strong>User Dashboard</strong></h1>
        </header>
            <RenderComponent />
      </div>
    );
  }
}

const getStateFromReduxPassToAppComponentAsProps = (state) => {
  return {
    appViewState: state.viewState
  }
}

export default connect(getStateFromReduxPassToAppComponentAsProps)(App)
