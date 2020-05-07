import React from 'react';
import configureStore from './src/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
const store = configureStore();
import Router from './src/components/Router';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default App;