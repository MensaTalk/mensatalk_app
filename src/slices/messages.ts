import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {MessageInterface} from '../types';

interface MessageState {
  messages: MessageInterface[];
  isLoading: boolean;
  error?: string;
}

export const initialState: MessageState = {messages: [], isLoading: false};

const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getMessagesStart(state, {payload}: PayloadAction<number>) {
      state.isLoading = true;
      state.messages = [];
      state.error = undefined;
    },
    getMessagesSuccess(state, {payload}: PayloadAction<MessageInterface[]>) {
      state.messages = payload;
      state.isLoading = false;
    },
    getMessagesFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    addMessage(state, {payload}: PayloadAction<MessageInterface>) {
      state.messages.push(payload);
    },
  },
});

export const {
  getMessagesStart,
  getMessagesSuccess,
  getMessagesFailed,
  addMessage,
} = messagesSlice.actions;

export default messagesSlice.reducer;
