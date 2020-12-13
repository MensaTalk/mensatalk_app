import {call, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {MessageInterface, TokenizedPayload} from '../types';

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

function* handleGetMessages({
  payload,
}: PayloadAction<TokenizedPayload<number>>) {
  try {
    const apiMessageUrl = concatRoomMessagesURL(payload.payload);
    const token = payload.token;
    const authorization = `Bearer ${token}`;

    const messages: MessageInterface[] = yield call(request, apiMessageUrl, {
      headers: {
        Authorization: authorization,
      },
    });

    yield put(getMessagesSuccess(messages));
  } catch (error) {
    yield put(getMessagesFailed(error.toString()));
  }
}

export function* messagesSaga() {
  yield takeEvery(getMessagesStart.type, handleGetMessages);
}
