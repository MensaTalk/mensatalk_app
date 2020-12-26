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
  onTypingText?: (text: string) => void;
  onClickHeader?: () => void;
  profiles?: ProfileInterface[];
  activeWriters: string[];
}

const Chat: React.FC<ChatProps> = ({
  room,
  messages,
  onSendText,
  onTypingText,
  onClickHeader,
  profiles,
  activeWriters,
}: ChatProps) => {
  const getSubtitle = (): string => {
    let result = '';
    if (activeWriters.length > 2) {
      result = `${activeWriters.length} user are writing`;
    } else if (activeWriters.length > 0) {
      result = activeWriters.toString().replace(',', ', ') + ' writing';
    } else if (profiles) {
      result = profiles
        ?.map((profile) => profile.username)
        .toString()
        .replace(',', ', ');
    }
    return result;
  };
  const subtitle = getSubtitle();
  return (
    <>
      <TouchableOpacity onPress={onClickHeader}>
        <TextHeader title={room.name} subtitle={subtitle} />
      </TouchableOpacity>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.messageContainer}>
          <MessageList messages={messages} />
        </View>
        <ChatInput onSendText={onSendText} onTypingText={onTypingText} />
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
