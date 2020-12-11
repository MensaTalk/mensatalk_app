import {call, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {SignUserInterface, TokenInterface} from '../types';

import {request} from '../utils/client';
import {
  signUpUserStart,
  signUpUserSuccess,
  signUpUserFailed,
  signInUserStart,
  signInUserSuccess,
  signInUserFailed,
} from '../slices/user';

const apiSignUpUrl = 'https://mensatalk.herokuapp.com/register';
const apiSignInUrl = 'https://mensatalk.herokuapp.com/authenticate';

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
    yield put(signUpUserFailed(error.toString()));
  }
}

function* handleSignInUser(action: PayloadAction<SignUserInterface>) {
  try {
    const token: TokenInterface = yield call(request, apiSignInUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(action.payload),
    });
    yield put(signInUserSuccess(token));
  } catch (error) {
    yield put(signInUserFailed(error.toString()));
  }
}

export function* usersSaga() {
  yield takeEvery(signUpUserStart.type, handleSignUpUser);
  yield takeEvery(signInUserStart.type, handleSignInUser);
}