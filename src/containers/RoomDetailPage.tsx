import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import io from 'socket.io-client';

import {getMessagesStart, addMessage} from '../slices/messages';
import {getSelectedRoom} from '../selectors/rooms';
import {getAllMessages} from '../selectors/messages';
import {ActualMessage, MessageInterface} from '../types';

import {RootStackParamList} from '../navigation/RootNavigation';
import Chat from '../components/Chat/Chat';

type Props = StackScreenProps<RootStackParamList, 'RoomDetailPage'>;

const socket = io.connect('http://192.168.2.110:9001');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RoomDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();

  const selectedRoom = useSelector(getSelectedRoom);
  const {messages} = useSelector(getAllMessages);

  useEffect(() => {
    selectedRoom && dispatch(getMessagesStart(selectedRoom.id));
    socket.on('connect', () => {});
  }, [dispatch, selectedRoom]);

  socket.on('message', (data: ActualMessage) => {
    console.log(`Received: ${data.payload}`);
    const receivedMessage: MessageInterface = {
      id: NaN,
      textMessage: data.payload,
      created_at: '',
    };
    dispatch(addMessage(receivedMessage));
  });

  const handleOnSendText = (text: string) => {
    const actualMessage: ActualMessage = {payload: text};
    socket.emit('message', actualMessage);
  };

  return (
    <>
      <Chat
        messages={messages}
        onSendText={handleOnSendText}
        // @ts-ignore
        room={selectedRoom}
      />
    </>
  );
};

export default RoomDetailPage;
