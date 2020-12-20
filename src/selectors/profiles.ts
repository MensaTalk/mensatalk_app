import {createSelector} from '@reduxjs/toolkit';

import {AppState} from '../store';
import {initialState} from '../slices/profiles';

const profilesDomain = (state: AppState) => state.profiles || initialState;
const roomsDomain = (state: AppState) => state.rooms || initialState;

export const selectRoomProfiles = createSelector(
  [profilesDomain, roomsDomain],
  (profileState, roomState) =>
    Array.from(profileState.profiles.values()).filter((profile) =>
      roomState.userIds.find((id) => id === profile.id),
    ),
);
