import {all, fork} from 'redux-saga/effects';
import {roomsSaga} from './rooms';

// INSERT:
export function* rootSaga() {
  yield all([fork(roomsSaga)]);
}
