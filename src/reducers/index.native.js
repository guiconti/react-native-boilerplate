import { combineReducers } from 'redux';
import fooReducer from './fooReducer';
import barReducer from './barReducer';
import walletReducer from './walletReducer';

const rootReducer = () => combineReducers({
  foo: fooReducer,
  bar: barReducer,
  wallet: walletReducer,
});

export default rootReducer;
