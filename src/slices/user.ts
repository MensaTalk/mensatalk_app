import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  isLoading: boolean;
  error?: string;
}

export const initialState: UserState = {isLoading: false};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dummy(state, {payload}: PayloadAction<number>) {
      state.isLoading = true;
      state.error = undefined;
    },
  },
});

export const {dummy} = userSlice.actions;

export default userSlice.reducer;
