import React from 'react';
import { Provider } from 'react-redux';
import App from '../components/App/App';
import store from '../store';

const AppContainer = () =>
  <Provider store={store}>
    <App />
  </Provider>;

export default AppContainer;
