import { combineReducers } from 'redux';
import fooReducer from './fooReducer';
import barReducer from './barReducer';
import walletReducer from './walletReducer';
import { connectRouter } from 'connected-react-router'
import onboardingReducer from './onboardingReducer';
import loginReducer from './loginReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  foo: fooReducer,
  bar: barReducer,
  wallet: walletReducer,
  onboarding: onboardingReducer,
  login: loginReducer,
});

export default rootReducer;
