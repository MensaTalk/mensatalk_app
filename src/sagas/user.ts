import {call, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {SignUserInterface, TokenInterface} from '../types';

import {request} from '../utils/client';
import {
  signUpUserStart,
  signUpUserSuccess,
  signupUserFailed,
} from '../slices/user';

const apiSignUpUrl = 'https://mensatalk.herokuapp.com/register';

function* handleSignUpUser(action: PayloadAction<SignUserInterface>) {
  try {
    const token: TokenInterface = yield call(request, apiSignUpUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(action.payload),
    });
    yield put(signUpUserSuccess(token));
  } catch (error) {
    yield put(signupUserFailed(error.toString()));
  }
}

export function* usersSaga() {
  yield takeEvery(signUpUserStart.type, handleSignUpUser);
}
