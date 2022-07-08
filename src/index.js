import React from 'react';
import ReactDOM from 'react-dom/client';
import { createApi } from './api/api';
import App from './components/pages/App/App';
import GlobalStyles from './global-styles';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/root-reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const api = createApi();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyles/>
    <App />
  </Provider>
);
reportWebVitals();
