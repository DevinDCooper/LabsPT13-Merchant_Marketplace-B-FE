import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import rootReducer from './state/reducers';
import App from './App';
import 'normalize.css';
import 'antd/dist/antd.less';
import './index.css';

const enhancer = compose(applyMiddleware(thunk), persistState());
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
