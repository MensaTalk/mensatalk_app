import {combineReducers} from '@reduxjs/toolkit';

import postReducer from './slices/posts';

const combinedReducers = combineReducers({
  posts: postReducer,
});

export default combinedReducers;
