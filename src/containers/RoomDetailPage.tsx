import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import io from 'socket.io-client';

import {getMessagesStart, addMessage} from '../slices/messages';
import {setUserIds} from '../slices/rooms';
import {
  getSelectedRoom,
  getUserIds,
  selectRoomProfiles,
} from '../selectors/rooms';
import {getAllMessages} from '../selectors/messages';
import {
  ClientMessage,
  ServerMessage,
  MessageInterface,
  RoomEventMessage,
  ClientTypingMessage,
  TypingEventMessage,
  Typing,
} from '../types';

import {RootStackParamList} from '../navigation/RootNavigation';
import Chat from '../components/Chat/Chat';
import {getUser} from '../selectors/user';
import {getProfileStart} from '../slices/profiles';

type Props = StackScreenProps<RootStackParamList, 'RoomDetailPage'>;

let clientSocket: SocketIOClient.Socket;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RoomDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(getUser);
  const roomProfiles = useSelector(selectRoomProfiles);
  const userIds = useSelector(getUserIds);
  const user = useSelector(getUser);
  const selectedRoom = useSelector(getSelectedRoom);
  const {messages} = useSelector(getAllMessages);

  const [seconds, setSeconds] = useState(0);
  const [typings, setTypings] = useState<Typing[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    selectedRoom &&
      dispatch(
        getMessagesStart({
          payload: selectedRoom.id,
          token: selectedUser.token ? selectedUser.token : '',
        }),
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, selectedRoom]);

  useEffect(() => {
    if (seconds === 3) {
      timer && clearInterval(timer);
      setTimer(
        setInterval(() => {
          // eslint-disable-next-line no-shadow
          setSeconds((seconds) => seconds - 1);
        }, 1000),
      );
    } else if (timer && seconds === 0) {
      clearInterval(timer);
    }
    return () => timer && console.log('dont know why') && clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  useEffect(() => {
    if (typings.length > 0) {
      setSeconds(3);
    } else {
      setSeconds(0);
    }
  }, [typings]);

  useEffect(() => {
    if (selectedRoom) {
      if (clientSocket) {
        clientSocket.disconnect();
      }
      clientSocket = io.connect('http://mensachat.herokuapp.com', {
        query: {
          roomId: selectedRoom.id,
          name: selectedUser.username,
          token: selectedUser.token,
        },
      });
      clientSocket.on('message', (serverMessage: ServerMessage) => {
        console.log(`Received: ${serverMessage.payload}`);
        const receivedMessage: MessageInterface = {
          id: NaN,
          textMessage: serverMessage.payload,
          created_at: '',
          authorName: serverMessage.username,
        };
        dispatch(addMessage(receivedMessage));
      });
      clientSocket.on('room_event', (roomEventMessage: RoomEventMessage) => {
        console.log(`Received: ${roomEventMessage.userIds.length} userIds`);
        dispatch(setUserIds(roomEventMessage.userIds));
      });
      clientSocket.on(
        'typing_event',
        (typingEventMessage: TypingEventMessage) => {
          console.log(`typing_event: ${typingEventMessage.typings.length}`);
          setTypings(typingEventMessage.typings);
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoom]);

  useEffect(() => {
    if (selectedRoom && user) {
      userIds.forEach((userId) =>
        dispatch(
          getProfileStart({
            token: user.token ? user.token : '',
            payload: userId,
          }),
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userIds]);

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

  const handleOnTypingText = (text: string) => {
    const clientTypingMessage: ClientTypingMessage = {payload: text};
    clientSocket.emit('typing_event', clientTypingMessage);
  };

  const handleOnClickHeader = () => {
    navigation.navigate('ProfileListPage');
  };

  const getActiveWriters = (): string[] => {
    const result: string[] = [];
    if (seconds > 0 && typings.length > 0) {
      for (const typing of typings) {
        const userId = typing.userId;
        const profile = roomProfiles.find((value) => value.id === userId);
        if (profile) {
          result.push(profile.username);
        }
      }
    }
    return result;
  };
  const activeWriters: string[] = getActiveWriters();
  return (
    <>
      <Chat
        messages={messages}
        onSendText={handleOnSendText}
        onTypingText={handleOnTypingText}
        onClickHeader={handleOnClickHeader}
        profiles={roomProfiles}
        // @ts-ignore
        room={selectedRoom}
        activeWriters={activeWriters}
      />
    </>
  );
};

export default RoomDetailPage;
