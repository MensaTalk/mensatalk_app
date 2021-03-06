import {createSelector} from '@reduxjs/toolkit';

import {AppState} from '../store';
import {initialState} from '../slices/user';

const userDomain = (state: AppState) => state.user || initialState;

export const getUser = createSelector([userDomain], (userState) => ({
  token: userState.token,
  username: userState.username,
  userId: userState.userId,
  isLoading: userState.isLoading,
  error: userState.error,
}));
