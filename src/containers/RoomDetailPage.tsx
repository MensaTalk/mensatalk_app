import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import io from 'socket.io-client';

import {getMessagesStart, addMessage} from '../slices/messages';
import {getSelectedRoom} from '../selectors/rooms';
import {getAllMessages} from '../selectors/messages';
import {ClientMessage, ServerMessage, MessageInterface} from '../types';

import {RootStackParamList} from '../navigation/RootNavigation';
import Chat from '../components/Chat/Chat';
import {getUser} from '../selectors/user';

type Props = StackScreenProps<RootStackParamList, 'RoomDetailPage'>;

let clientSocket: SocketIOClient.Socket;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RoomDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(getUser);

  const selectedRoom = useSelector(getSelectedRoom);
  const {messages} = useSelector(getAllMessages);

  useEffect(() => {
    selectedRoom && dispatch(getMessagesStart(selectedRoom.id));
  }, [dispatch, selectedRoom]);

  useEffect(() => {
    if (selectedRoom) {
      if (clientSocket) {
        clientSocket.disconnect();
      }
      clientSocket = io.connect('http://mensachat.herokuapp.com', {
        query: {
          roomId: selectedRoom.id,
          name: selectedUser.username,
        },
      });
      clientSocket.on('message', (serverMessage: ServerMessage) => {
        console.log(`Received: ${serverMessage.payload}`);
        const receivedMessage: MessageInterface = {
          id: NaN,
          textMessage: serverMessage.payload,
          created_at: '',
          username: serverMessage.username,
        };
        dispatch(addMessage(receivedMessage));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoom]);

  useEffect(
    () =>
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      navigation.addListener('beforeRemove', (e: unknown) => {
        clientSocket.disconnect();
      }),
    [navigation],
  );

  const handleOnSendText = (text: string) => {
    const clientMessage: ClientMessage = {payload: text};
    clientSocket.emit('message', clientMessage);
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
