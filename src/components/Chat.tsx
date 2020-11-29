import React from 'react';
import {View, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
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
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={styles.inner}>
          <MessageList messages={messages} />
          <ChatInput onSendText={onSendText} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default Chat;
