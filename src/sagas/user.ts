import {call, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {
  SignUpUserInterface,
  SignUserInterface,
  TokenInterface,
  TokenizedPayload,
  VerifyUserTokenInterface,
} from '../types';

import {request} from '../utils/client';
import {
  signUpUserStart,
  signUpUserSuccess,
  signUpUserFailed,
  signInUserStart,
  signInUserSuccess,
  signInUserFailed,
  getUserIdStart,
  getUserIdSuccess,
  getUserIdFailed,
} from '../slices/user';

const apiSignUpUrl = 'https://mensatalk.herokuapp.com/register';
const apiSignInUrl = 'https://mensatalk.herokuapp.com/authenticate';
const apiGetUserIdUrl =
  'https://mensatalk.herokuapp.com/verifyUserNameWithToken';

function* handleSignUpUser(action: PayloadAction<SignUpUserInterface>) {
  if (action.payload.confirmedPassword !== action.payload.password) {
    yield put(signUpUserFailed('Passwords do not match'));
  } else {
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
      yield put(signUpUserFailed('Username already taken'));
    }
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
    yield put(signInUserFailed('Incorrect username or password'));
  }
}

function* handleGetUserId(
  action: PayloadAction<TokenizedPayload<VerifyUserTokenInterface>>,
) {
  try {
    const token = action.payload.token;
    const authorization = `Bearer ${token}`;
    const body = action.payload.payload;

    const userId: number = yield call(request, apiGetUserIdUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: authorization,
      },
      body: JSON.stringify(body),
    });
    yield put(getUserIdSuccess(userId));
  } catch (error) {
    yield put(getUserIdFailed(error));
  }
}

export function* usersSaga() {
  yield takeEvery(signUpUserStart.type, handleSignUpUser);
  yield takeEvery(signInUserStart.type, handleSignInUser);
  yield takeEvery(getUserIdStart.type, handleGetUserId);
}
