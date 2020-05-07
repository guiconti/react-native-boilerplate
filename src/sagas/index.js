import { all } from 'redux-saga/effects';
import barSaga from './barSaga';
import walletSaga from './walletSaga';

export default function* rootSaga() {
  yield all([
    barSaga(),
    walletSaga(),
  ]);
}
