import {all, fork} from 'redux-saga/effects';
import {postsSaga} from './posts';

// INSERT:
export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
