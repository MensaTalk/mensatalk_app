import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RoomInterface} from '../types';

interface RoomState {
  rooms: RoomInterface[];
  isLoading: boolean;
  error?: string;
}

export const initialState: RoomState = {rooms: [], isLoading: false};

const roomsSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    getRoomsStart(state) {
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
  },
});

export const {
  getRoomsStart,
  getRoomsSuccess,
  getRoomsFailed,
} = roomsSlice.actions;

export default roomsSlice.reducer;
