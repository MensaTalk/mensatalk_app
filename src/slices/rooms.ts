import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RoomInterface} from '../types';

interface RoomState {
  rooms: RoomInterface[];
  isLoading: boolean;
  error?: string;
  selectedRoomId?: number;
  userIds: number[];
}

export const initialState: RoomState = {
  rooms: [],
  isLoading: false,
  userIds: [],
};

const roomsSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRoomsStart(state, {payload}: PayloadAction<string>) {
      state.isLoading = true;
      state.rooms = [];
      state.error = undefined;
    },
    getRoomsSuccess(state, {payload}: PayloadAction<RoomInterface[]>) {
      state.rooms = payload;
      state.isLoading = false;
    },
    getRoomsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    selectRoom(state, {payload}: PayloadAction<number>) {
      if (state.rooms.find((room) => room.id === payload)) {
        state.selectedRoomId = payload;
      } else {
        state.error = 'Room not found';
      }
    },
    setUserIds(state, {payload}: PayloadAction<number[]>) {
      state.userIds = payload;
    },
  },
});

export const {
  getRoomsStart,
  getRoomsSuccess,
  getRoomsFailed,
  selectRoom,
  setUserIds,
} = roomsSlice.actions;

export default roomsSlice.reducer;
