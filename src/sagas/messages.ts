import {call, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {MessageInterface} from '../types';

import {request} from '../utils/client';
import {
  getMessagesStart,
  getMessagesSuccess,
  getMessagesFailed,
} from '../slices/messages';

const concatRoomMessagesURL = (roomId: number) => {
  return (
    'https://mensatalk.herokuapp.com/chatrooms/' +
    roomId.toString() +
    '/chatmessages/'
  );
};

function* handleGetMessages({payload}: PayloadAction<number>) {
  try {
    const apiMessageUrl = concatRoomMessagesURL(payload);
    const messages: MessageInterface[] = yield call(request, apiMessageUrl);
    yield put(getMessagesSuccess(messages));
  } catch (error) {
    yield put(getMessagesFailed(error.toString()));
  }
}

export function* messagesSaga() {
  yield takeEvery(getMessagesStart.type, handleGetMessages);
}
