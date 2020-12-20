import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MessageInterface} from '../../types';
import TextElement from '../utils/TextElement';

export interface MessageListItemProp {
  message: MessageInterface;
  owner: boolean;
}

const timeString = (hour: number, minute: number) => {
  return `${hour}:${minute}`;
};

const MessageListItem: React.FC<MessageListItemProp> = ({
  message,
  owner,
}: MessageListItemProp) => {
  const dateTime = message.created_at
    ? new Date(message.created_at)
    : new Date(Date.now());
  if (owner) {
    return (
      <>
        <View style={styles.right.messageBubbleContainer}>
          <View style={styles.right.messageBubble}>
            <TextElement
              text={message.textMessage}
              style={styles.right.textMessage}
            />
          </View>
          <TextElement
            text={timeString(dateTime.getHours(), dateTime.getMinutes())}
            style={styles.right.timeMessage}
            size={5}
          />
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.left.messageBubbleContainer}>
          <View style={styles.left.messageBubble}>
            <TextElement
              text={message.authorName}
              style={styles.left.userMessage}
              size={5}
            />
            <TextElement
              text={message.textMessage}
              style={styles.left.textMessage}
            />
          </View>
          <TextElement
            text={timeString(dateTime.getHours(), dateTime.getMinutes())}
            style={styles.left.timeMessage}
            size={5}
          />
        </View>
      </>
    );
  }
};

const styles = {
  left: StyleSheet.create({
    messageBubbleContainer: {
      marginBottom: 5,
      alignItems: 'flex-start',
    },
    messageBubble: {
      backgroundColor: '#ffffff',
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 10,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    textMessage: {
      color: '#000000',
    },
    userMessage: {
      color: '#5CBACB',
    },
    timeMessage: {
      color: '#989a9a',
    },
  }),
  right: StyleSheet.create({
    messageBubbleContainer: {
      marginBottom: 5,
      alignItems: 'flex-end',
    },
    messageBubble: {
      backgroundColor: '#5CBACB',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    textMessage: {},
    userMessage: {},
    timeMessage: {
      color: '#989a9a',
    },
  }),
};
export default MessageListItem;
