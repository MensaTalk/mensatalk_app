import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {MessageInterface, ProfileInterface, RoomInterface} from '../../types';
import MessageList from '../Message/MessageList';
import TextHeader from '../Header/Header';
import ChatInput from './ChatInput';

export interface ChatProps {
  room: RoomInterface;
  messages: MessageInterface[];
  onSendText?: (text: string) => void;
  onClickHeader?: () => void;
  profiles?: ProfileInterface[];
}

const Chat: React.FC<ChatProps> = ({
  room,
  messages,
  onSendText,
  onClickHeader,
  profiles,
}: ChatProps) => {
  return (
    <>
      <TouchableOpacity onPress={onClickHeader}>
        <TextHeader
          title={room.name}
          subtitle={profiles
            ?.map((profile) => profile.username)
            .toString()
            .replace(',', ', ')}
        />
      </TouchableOpacity>
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
