import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';

type Props = StackScreenProps<RootStackParamList, 'PostListPage'>;

const ws = new WebSocket('ws://192.168.2.113:3030');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PostDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  const [messages, setMessages] = useState<String[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    ws.onopen = () => {
      console.log('Websocket opened.');
    };
  }, []);

  ws.onmessage = (e) => {
    console.log(`Received: ${e.data}`);
    setMessages([...messages, e.data]);
  };

  ws.onerror = (e) => {
    console.log(`Error: ${e.message}`);
  };

  ws.onclose = (e) => {
    console.log(e.code, e.reason);
  };

  const handleSend = () => {
    if (newMessage === '') {
      return;
    }
    ws.send(newMessage);
    setNewMessage('');
  };

  const handleChangeText = (e: string) => {
    setNewMessage(e);
  };

  return (
    <>
      <SafeAreaView>
        <KeyboardAvoidingView enabled={true} behavior="padding">
          <TextInput
            returnKeyType="send"
            onChangeText={handleChangeText}
            onSubmitEditing={handleSend}
            value={newMessage}
          />
          <TouchableOpacity onPress={handleSend}>
            <Text>Senden</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
      {messages.map((message, index) => (
        <Text key={index}>Message: {message}</Text>
      ))}
    </>
  );
};

export default PostDetailPage;
