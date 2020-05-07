import { combineReducers } from 'redux';
import barReducer from './barReducer';
import walletReducer from './walletReducer';

const rootReducer = () => combineReducers({
  bar: barReducer,
  wallet: walletReducer,
});

export default rootReducer;
