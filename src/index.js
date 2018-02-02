import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import store from'./state/store'
import { Provider } from 'react-redux'

// Cannot render App directory because it does not have the store component
const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
