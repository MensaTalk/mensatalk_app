import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {
  SignUserInterface,
  TokenInterface,
  TokenizedPayload,
  VerifyUserTokenInterface,
} from '../types';
export interface UserState {
  isLoading: boolean;
  error?: string;
  token?: string;
  username?: string;
  userId?: number;
}

export const initialState: UserState = {
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpUserStart(state, {payload}: PayloadAction<SignUserInterface>) {
      state.isLoading = true;
      state.error = undefined;
      state.username = payload.username;
    },
    signUpUserSuccess(state, {payload}: PayloadAction<TokenInterface>) {
      state.token = payload.token;
      state.isLoading = false;
      state.error = undefined;
    },
    signUpUserFailed(state, {payload}: PayloadAction<string>) {
      state.token = undefined;
      state.error = payload;
      state.username = undefined;
      state.isLoading = false;
    },
    signInUserStart(state, {payload}: PayloadAction<SignUserInterface>) {
      state.isLoading = true;
      state.error = undefined;
      state.username = payload.username;
    },
    signInUserSuccess(state, {payload}: PayloadAction<TokenInterface>) {
      state.token = payload.token;
      state.error = undefined;
      state.isLoading = false;
    },
    signInUserFailed(state, {payload}: PayloadAction<string>) {
      state.token = undefined;
      state.error = payload;
      state.username = undefined;
      state.isLoading = false;
    },
    getUserIdStart(
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      {payload}: PayloadAction<TokenizedPayload<VerifyUserTokenInterface>>,
    ) {
      state.userId = undefined;
      state.error = undefined;
      state.isLoading = true;
    },
    getUserIdSuccess(state, {payload}: PayloadAction<number>) {
      state.userId = payload;
      state.error = undefined;
      state.isLoading = false;
    },
    getUserIdFailed(state, {payload}: PayloadAction<string>) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  signUpUserStart,
  signUpUserSuccess,
  signUpUserFailed,
  signInUserStart,
  signInUserSuccess,
  signInUserFailed,
  getUserIdStart,
  getUserIdSuccess,
  getUserIdFailed,
} = userSlice.actions;

export default userSlice.reducer;
