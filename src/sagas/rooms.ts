import {call, put, takeEvery} from 'redux-saga/effects';

import {RoomInterface} from '../types';

import {request} from '../utils/client';
import {getRoomsStart, getRoomsSuccess, getRoomsFailed} from '../slices/rooms';

const apiRoomsUrl = 'https://mensatalk.herokuapp.com/chatrooms';

function* handleGetRooms() {
  try {
    const rooms: RoomInterface[] = yield call(request, apiRoomsUrl);
    yield put(getRoomsSuccess(rooms));
  } catch (error) {
    yield put(getRoomsFailed(error.toString()));
  }
}

export function* roomsSaga() {
  yield takeEvery(getRoomsStart.type, handleGetRooms);
}
