import {createSelector} from '@reduxjs/toolkit';

import {AppState} from '../store';
import {initialState} from '../slices/user';

const userDomain = (state: AppState) => state.user || initialState;

export const getUser = createSelector([userDomain], (userState) => ({
  token: userState.token,
  isLoading: userState.isLoading,
  error: userState.error,
  username: userState.username,
}));
