import React from 'react';
import {View, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {MessageInterface, RoomInterface} from '../types';
import ChatInput from './ChatInput';
import MessageList from './MessageList';
import TextHeader from './utils/TextHeader';

export interface ChatProps {
  room: RoomInterface;
  messages: MessageInterface[];
  onSendText?: (text: string) => void;
}

const Chat: React.FC<ChatProps> = ({room, messages, onSendText}: ChatProps) => {
  return (
    <>
      <TextHeader title={room.name} />
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.messageContainer}>
          <MessageList messages={messages} />
        </View>
        <ChatInput onSendText={onSendText} />
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
  },
});

export default Chat;
