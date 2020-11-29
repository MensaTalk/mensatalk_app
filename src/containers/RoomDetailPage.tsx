import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {getSelectedRoom} from '../selectors/rooms';

import {RootStackParamList} from '../navigation/RootNavigation';

type Props = StackScreenProps<RootStackParamList, 'RoomDetailPage'>;

const ws = new WebSocket('ws://192.168.2.113:3030');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RoomDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  const selectedRoom = useSelector(getSelectedRoom);

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
      <Text>{selectedRoom ? selectedRoom.name : ''}</Text>
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

export default RoomDetailPage;
