import { put, call, take, fork, all } from 'redux-saga/effects';
import { WALLET_FETCH_FUNDS } from '../types/wallet';
import { retrieveFunds } from '../apis/walletApis';
import { updateFunds } from '../actions/walletActions';

export function* fetchFunds(payload) {
  const result = yield call(retrieveFunds, payload);
  yield put(updateFunds(result));
}

function* watchFetchFunds() {
  while (true) {
    const { payload } = yield take(WALLET_FETCH_FUNDS);
    yield fork(fetchFunds, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchFunds)
  ]);
}
