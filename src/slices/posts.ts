import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PostInterface} from '../types';

interface PostState {
  posts: PostInterface[];
  isLoading: boolean;
  error?: string;
}

export const initialState: PostState = {posts: [], isLoading: false};

const postslice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPostsStart(state) {
      state.isLoading = true;
      state.posts = [];
      state.error = undefined;
    },
    getPostsSuccess(state, {payload}: PayloadAction<PostInterface[]>) {
      state.posts = payload;
      state.isLoading = false;
    },
    getPostsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getPostsStart,
  getPostsSuccess,
  getPostsFailed,
} = postslice.actions;

export default postslice.reducer;
