import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';

import {getMessagesStart, addMessage} from '../slices/messages';
import {getSelectedRoom} from '../selectors/rooms';
import {getAllMessages} from '../selectors/messages';
import {MessageInterface} from '../types';

import {RootStackParamList} from '../navigation/RootNavigation';
import Chat from '../components/Chat';

type Props = StackScreenProps<RootStackParamList, 'RoomDetailPage'>;

const ws = new WebSocket('ws://192.168.2.113:3030');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RoomDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();

  const selectedRoom = useSelector(getSelectedRoom);
  const {messages} = useSelector(getAllMessages);

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

  const handleOnSendText = (text: string) => {
    ws.send(text);
  };

  return (
    <>
      <Chat
        messages={messages}
        onSendText={handleOnSendText}
        room={{id: 2, name: 'abteilung'}}
      />
    </>
  );
};

export default RoomDetailPage;
