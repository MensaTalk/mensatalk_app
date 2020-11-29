import {combineReducers} from '@reduxjs/toolkit';

import roomReducer from './slices/rooms';
import messageReducer from './slices/messages';

const combinedReducers = combineReducers({
  rooms: roomReducer,
  messages: messageReducer,
});

export default combinedReducers;
