import {combineReducers} from '@reduxjs/toolkit';
import {enableMapSet} from 'immer';

enableMapSet();

import roomReducer from './slices/rooms';
import messageReducer from './slices/messages';
import profileReducer from './slices/profiles';
import userReducer from './slices/user';

const combinedReducers = combineReducers({
  rooms: roomReducer,
  messages: messageReducer,
  profiles: profileReducer,
  user: userReducer,
});

export default combinedReducers;
