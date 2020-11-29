import React from 'react';

import {MessageInterface} from '../types';
import ChatInput from './ChatInput';

import MessageList from './MessageList';

export interface ChatProps {
  messages: MessageInterface[];
  onSendText?: (text: string) => void;
}

const Chat: React.FC<ChatProps> = ({messages, onSendText}: ChatProps) => {
  return (
    <>
      <MessageList messages={messages} />
      <ChatInput onSendText={onSendText} />
    </>
  );
};

export default Chat;
