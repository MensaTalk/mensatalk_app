import {createSelector} from '@reduxjs/toolkit';

import {AppState} from '../store';
import {initialState} from '../slices/messages';

const messagesDomain = (state: AppState) => state.messages || initialState;

export const getAllMessages = createSelector(
  [messagesDomain],
  (messagesState) => messagesState,
);
