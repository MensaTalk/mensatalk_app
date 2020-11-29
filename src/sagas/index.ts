import {all, fork} from 'redux-saga/effects';
import {roomsSaga} from './rooms';
import {messagesSaga} from './messages';

// INSERT:
export function* rootSaga() {
  yield all([fork(roomsSaga)]);
  yield all([fork(messagesSaga)]);
}
