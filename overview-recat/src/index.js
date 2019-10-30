import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import dashboardApp from './store'
import storeLogger from './middlewares/storeLogger'
import * as serviceWorker from './serviceWorker';

const store = createStore(
        dashboardApp,
        applyMiddleware(storeLogger)
    ) // 스토어 생성

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
