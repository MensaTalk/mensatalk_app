import {createSelector} from '@reduxjs/toolkit';

import {AppState} from '../store';
import {initialState} from '../slices/posts';

const postsDomain = (state: AppState) => state.posts || initialState;

export const getAllPosts = createSelector(
  [postsDomain],
  (postsState) => postsState,
);
