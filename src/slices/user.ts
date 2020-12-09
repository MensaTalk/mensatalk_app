import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {SignUserInterface, TokenInterface} from '../types';
export interface UserState {
  isLoading: boolean;
  error?: string;
  token?: string;
}

export const initialState: UserState = {isLoading: false};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signUpUserStart(state, {payload}: PayloadAction<SignUserInterface>) {
      state.isLoading = true;
      state.error = undefined;
    },
    signUpUserSuccess(state, {payload}: PayloadAction<TokenInterface>) {
      state.token = payload.token;
      state.isLoading = true;
      state.error = undefined;
    },
    signupUserFailed(state, {payload}: PayloadAction<string>) {
      state.token = undefined;
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  signUpUserStart,
  signUpUserSuccess,
  signupUserFailed,
} = userSlice.actions;

export default userSlice.reducer;
