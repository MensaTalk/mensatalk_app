import {createSelector} from '@reduxjs/toolkit';

import {AppState} from '../store';
import {initialState} from '../slices/profiles';

const profilesDomain = (state: AppState) => state.profiles || initialState;
const userDomain = (state: AppState) => state.user || initialState;

export const selectSelectedProfile = createSelector(
  [profilesDomain],
  (profileState) => profileState.selectedProfile,
);

export const selectOwnProfile = createSelector(
  [profilesDomain, userDomain],
  (profileState, userState) =>
    userState.userId ? profileState.profiles.get(userState.userId) : undefined,
);
