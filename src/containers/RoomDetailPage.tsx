import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {getMessagesStart, addMessage} from '../slices/messages';
import {getSelectedRoom} from '../selectors/rooms';
import {getAllMessages} from '../selectors/messages';
import {MessageInterface} from '../types';

import {RootStackParamList} from '../navigation/RootNavigation';

type Props = StackScreenProps<RootStackParamList, 'RoomDetailPage'>;

const ws = new WebSocket('ws://192.168.2.113:3030');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RoomDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();

  const selectedRoom = useSelector(getSelectedRoom);
  const {messages} = useSelector(getAllMessages);

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    selectedRoom && dispatch(getMessagesStart(selectedRoom.id));
    ws.onopen = () => {
      console.log('Websocket opened.');
    };
  }, [dispatch, selectedRoom]);

  ws.onmessage = (e) => {
    console.log(`Received: ${e.data}`);
    const receivedMessage: MessageInterface = {
      id: NaN,
      textMessage: e.data,
      created_at: '',
    };
    dispatch(addMessage(receivedMessage));
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
        <Text key={index}>Message: {message.textMessage}</Text>
      ))}
    </>
  );
};

export default RoomDetailPage;
