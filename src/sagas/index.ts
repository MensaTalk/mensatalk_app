import {all, fork} from 'redux-saga/effects';
import {roomsSaga} from './rooms';
import {messagesSaga} from './messages';
import {profilesSaga} from './profiles';
import {usersSaga} from './user';

// INSERT:
export function* rootSaga() {
  yield all([fork(roomsSaga)]);
  yield all([fork(messagesSaga)]);
  yield all([fork(profilesSaga)]);
  yield all([fork(usersSaga)]);
}
