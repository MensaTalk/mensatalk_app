import {call, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {ProfileInterface, TokenizedPayload} from '../types';

import {request} from '../utils/client';
import {
  getProfileStart,
  getProfileSuccess,
  getProfileFailed,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailed,
} from '../slices/profiles';

const apiProfileUrl = 'https://mensatalk.herokuapp.com/users/';
const apiUpdateProfileUrl = 'https://mensatalk.herokuapp.com/users';

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

function* handleUpdateProfile(
  action: PayloadAction<TokenizedPayload<ProfileInterface>>,
) {
  const token = action.payload.token;
  const body = action.payload.payload;
  const authorization = `Bearer ${token}`;
  try {
    const profile: ProfileInterface = yield call(request, apiUpdateProfileUrl, {
      method: 'PUT',
      headers: {
        Authorization: authorization,
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(body),
    });
    yield put(updateProfileSuccess(profile));
  } catch (error) {
    yield put(updateProfileFailed(error.toString()));
  }
}

export function* profilesSaga() {
  yield takeEvery(getProfileStart.type, handleGetProfile);
  yield takeEvery(updateProfileStart.type, handleUpdateProfile);
}
