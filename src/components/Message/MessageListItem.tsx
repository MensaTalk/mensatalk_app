import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MessageInterface} from '../../types';
import TextElement from '../utils/TextElement';

export interface MessageListItemProp {
  message: MessageInterface;
  owner: boolean;
}

const MessageListItem: React.FC<MessageListItemProp> = ({
  message,
  owner,
}: MessageListItemProp) => {
  var style;
  if (owner) {
    style = styles.right;
  } else {
    style = styles.left;
  }

  return (
    <>
      <View style={style.messageBubbleContainer}>
        <View style={style.messageBubble}>
          <TextElement text={message.textMessage} />
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
      alignItems: 'flex-start',
    },
    messageBubble: {
      backgroundColor: '#68696A',
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
  }),
  right: StyleSheet.create({
    messageBubbleContainer: {
      paddingTop: 10,
      marginLeft: 40,

      alignItems: 'flex-end',
    },
    messageBubble: {
      backgroundColor: '#373F51',
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
  }),
};
export default MessageListItem;
