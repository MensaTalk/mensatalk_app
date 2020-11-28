import {combineReducers} from '@reduxjs/toolkit';

import roomReducer from './slices/rooms';

const combinedReducers = combineReducers({
  rooms: roomReducer,
});

export default combinedReducers;
