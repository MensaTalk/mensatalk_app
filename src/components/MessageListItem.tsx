import React from 'react';
import {Text} from 'react-native';

import {MessageInterface} from '../types';

export interface MessageListItemProp {
  message: MessageInterface;
}

const MessageListItem: React.FC<MessageListItemProp> = ({
  message,
}: MessageListItemProp) => {
  return (
    <>
      <Text key={message.id}>{message.textMessage}</Text>
    </>
  );
};

export default MessageListItem;
