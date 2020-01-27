import { put, call, take, fork, all } from 'redux-saga/effects';
import { BAR_FETCH_EXAMPLE } from '../types/bar';
import { retrieveExample } from '../apis/exampleApis';
import { example } from '../actions/barActions';

export function* fetchBarExample(payload) {
  const result = yield call(retrieveExample, payload);
  yield put(example(result));
}

function* watchFetchBarExample() {
  while (true) {
    const { payload } = yield take(BAR_FETCH_EXAMPLE);
    yield fork(fetchBarExample, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchBarExample)
  ]);
}
