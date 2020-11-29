import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {MessageInterface} from '../../types';

export interface MessageListItemProp {
  message: MessageInterface;
  myMessage: boolean;
}

const MessageListItem: React.FC<MessageListItemProp> = ({
  message,
  myMessage,
}: MessageListItemProp) => {
  var style;
  if (myMessage) {
    style = styles.right;
  } else {
    style = styles.left;
  }

  return (
    <>
      <View style={style.messageBubbleContainer}>
        <View style={style.messageBubble}>
          <Text style={style.chatText} key={message.id}>
            {message.textMessage}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = {
  left: StyleSheet.create({
    messageBubbleContainer: {
      paddingTop: 10,
      marginRight: 40,
      flex: 1,
      alignItems: 'flex-start',
    },
    messageBubble: {
      backgroundColor: '#68696A',
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    chatText: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      color: '#F9EFEF',
    },
  }),
  right: StyleSheet.create({
    messageBubbleContainer: {
      paddingTop: 10,
      marginLeft: 40,

      flex: 1,
      alignItems: 'flex-end',
    },
    messageBubble: {
      backgroundColor: '#373F51',
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    chatText: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      color: '#F9EFEF',
    },
  }),
};
export default MessageListItem;
