import {createSelector} from '@reduxjs/toolkit';

import {AppState} from '../store';
import {initialState} from '../slices/profiles';

const profilesDomain = (state: AppState) => state.profiles || initialState;

export const selectSelectedProfile = createSelector(
  [profilesDomain],
  (profileState) => profileState.selectedProfile,
);
