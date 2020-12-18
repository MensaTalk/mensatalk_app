import {createSlice} from '@reduxjs/toolkit';

import {ProfileInterface} from '../types';

interface RoomState {
  profiles: ProfileInterface[];
  isLoading: boolean;
  error?: string;
}

export const initialState: RoomState = {profiles: [], isLoading: false};

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {},
});

export const {} = profilesSlice.actions;

export default profilesSlice.reducer;
