import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {SignUserInterface, TokenInterface} from '../types';
export interface UserState {
  isLoading: boolean;
  error?: string;
  token?: string;
  username?: string;
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
      state.isLoading = false;
      state.username = undefined;
    },
    signInUserStart(state, {payload}: PayloadAction<SignUserInterface>) {
      state.isLoading = true;
      state.error = undefined;
      state.username = payload.username;
    },
    signInUserSuccess(state, {payload}: PayloadAction<TokenInterface>) {
      state.token = payload.token;
      state.isLoading = false;
      state.error = undefined;
    },
    signInUserFailed(state, {payload}: PayloadAction<string>) {
      state.token = undefined;
      state.error = payload;
      state.isLoading = false;
      state.username = undefined;
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
} = userSlice.actions;

export default userSlice.reducer;
