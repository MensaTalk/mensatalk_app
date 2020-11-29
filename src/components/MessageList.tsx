import React from 'react';

import {MessageInterface} from '../types';

import MessageListItem from './MessageListItem';

export interface MessageListProps {
  messages: MessageInterface[];
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
}: MessageListProps) => {
  return (
    <>
      {messages.map((message, index) => (
        <MessageListItem key={index} message={message} />
      ))}
    </>
  );
};

export default MessageList;
