import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ProfileInterface, TokenizedPayload} from '../types';

interface ProfileSate {
  profiles: Map<number, ProfileInterface>;
  isLoading: boolean;
  error?: string;
}

export const initialState: ProfileSate = {
  profiles: new Map<number, ProfileInterface>(),
  isLoading: false,
};

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getProfileStart(state, {payload}: PayloadAction<TokenizedPayload<number>>) {
      state.isLoading = true;
    },
    getProfileSuccess(state, {payload}: PayloadAction<ProfileInterface>) {
      state.profiles.set(payload.id, payload);
      state.isLoading = false;
    },
    getProfileFailed(state, {payload}: PayloadAction<string>) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  getProfileStart,
  getProfileSuccess,
  getProfileFailed,
} = profilesSlice.actions;

export default profilesSlice.reducer;
