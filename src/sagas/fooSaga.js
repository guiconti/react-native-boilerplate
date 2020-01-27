import { put, call, take, fork, all } from 'redux-saga/effects';
import { FOO_FETCH_EXAMPLE } from '../types/foo';
import { retrieveExample } from '../apis/exampleApis';
import { example } from '../actions/fooActions';

export function* fetchFooExample(payload) {
  const result = yield call(retrieveExample, payload);
  yield put(example(result));
}

function* watchFetchFooExample() {
  while (true) {
    const { payload } = yield take(FOO_FETCH_EXAMPLE);
    yield fork(fetchFooExample, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchFooExample)
  ]);
}
