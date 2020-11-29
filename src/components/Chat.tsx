import React from 'react';

import {MessageInterface, RoomInterface} from '../types';
import ChatInput from './ChatInput';

import MessageList from './MessageList';
import TextHeader from './utils/TextHeader';
import Hairline from './utils/Hairline';

export interface ChatProps {
  room: RoomInterface;
  messages: MessageInterface[];
  onSendText?: (text: string) => void;
}

const Chat: React.FC<ChatProps> = ({room, messages, onSendText}: ChatProps) => {
  return (
    <>
      <TextHeader title={room.name} />
      <Hairline />
      <MessageList messages={messages} />
      <ChatInput onSendText={onSendText} />
    </>
  );
};

export default Chat;
