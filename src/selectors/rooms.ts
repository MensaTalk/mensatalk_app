import {createSelector} from '@reduxjs/toolkit';

import {AppState} from '../store';
import {initialState} from '../slices/rooms';

const roomsDomain = (state: AppState) => state.rooms || initialState;
const profilesDomain = (state: AppState) => state.profiles || initialState;

export const getAllRooms = createSelector(
  [roomsDomain],
  (roomsState) => roomsState,
);

export const getSelectedRoom = createSelector([roomsDomain], (roomsState) =>
  roomsState.rooms.find((room) => room.id === roomsState.selectedRoomId),
);

export const getUserIds = createSelector(
  [roomsDomain],
  (roomState) => roomState.userIds,
);

export const selectRoomProfiles = createSelector(
  [profilesDomain, roomsDomain],
  (profileState, roomState) =>
    Array.from(profileState.profiles.values()).filter((profile) =>
      roomState.userIds.find((id) => id === profile.id),
    ),
);
