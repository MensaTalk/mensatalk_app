import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ProfileInterface, TokenizedPayload} from '../types';

interface ProfileSate {
  profiles: Map<number, ProfileInterface>;
  isLoading: boolean;
  error?: string;
  selectedProfile?: ProfileInterface;
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
      state.error = undefined;
    },
    getProfileSuccess(state, {payload}: PayloadAction<ProfileInterface>) {
      state.profiles.set(payload.id, payload);
      state.isLoading = false;
    },
    getProfileFailed(state, {payload}: PayloadAction<string>) {
      state.error = payload;
      state.isLoading = false;
    },
    updateProfileStart(
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      {payload}: PayloadAction<TokenizedPayload<ProfileInterface>>,
    ) {
      state.isLoading = true;
      state.error = undefined;
    },
    updateProfileSuccess(state, {payload}: PayloadAction<ProfileInterface>) {
      state.profiles.set(payload.id, payload);
      state.isLoading = false;
    },
    updateProfileFailed(state, {payload}: PayloadAction<string>) {
      state.error = payload;
      state.isLoading = false;
    },
    selectProfile(state, {payload}: PayloadAction<number>) {
      const profile = state.profiles.get(payload);
      if (profile) {
        state.selectedProfile = profile;
      }
    },
  },
});

export const {
  getProfileStart,
  getProfileSuccess,
  getProfileFailed,
  selectProfile,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailed,
} = profilesSlice.actions;

export default profilesSlice.reducer;
