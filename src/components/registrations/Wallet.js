import React, { Component } from 'react';
import configureStore from '../../store';
import { Provider } from 'react-redux';
const store = configureStore();
import Wallet from '../Wallet';

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wallet />
      </Provider>
    );
  }
}
