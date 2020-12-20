import {call, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {ProfileInterface, TokenizedPayload} from '../types';

import {request} from '../utils/client';
import {
  getProfileStart,
  getProfileSuccess,
  getProfileFailed,
} from '../slices/profiles';

const apiProfileUrl = 'https://mensatalk.herokuapp.com/users/';

function* handleGetProfile(action: PayloadAction<TokenizedPayload<number>>) {
  const token = action.payload.token;
  const profileId = action.payload.payload;
  const apiProfileUrlWithId = `${apiProfileUrl}${profileId}`;
  const authorization = `Bearer ${token}`;
  try {
    const profile: ProfileInterface = yield call(request, apiProfileUrlWithId, {
      headers: {
        Authorization: authorization,
      },
    });
    yield put(getProfileSuccess(profile));
  } catch (error) {
    yield put(getProfileFailed(error.toString()));
  }
}

export function* profilesSaga() {
  yield takeEvery(getProfileStart.type, handleGetProfile);
}
