import {combineReducers} from '@reduxjs/toolkit';

import roomReducer from './slices/rooms';
import messageReducer from './slices/messages';
import userReducer from './slices/user';

const combinedReducers = combineReducers({
  rooms: roomReducer,
  messages: messageReducer,
  user: userReducer,
});

export default combinedReducers;
