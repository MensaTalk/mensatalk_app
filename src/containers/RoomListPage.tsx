import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';
import {getAllRooms} from '../selectors/rooms';
import {getRoomsStart} from '../slices/rooms';
import RoomList from '../components/RoomList';

type Props = StackScreenProps<RootStackParamList, 'RoomListPage'>;

const RoomListPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();

  const {rooms} = useSelector(getAllRooms);

  useEffect(() => {
    dispatch(getRoomsStart());
  }, [dispatch]);

  return (
    <>
      <Button
        title="Go to RoomListPage"
        onPress={() => navigation.navigate('RoomListPage')}
      />
      <Text>{route.name}</Text>
      {rooms ? rooms.map((room) => <Text key={room.id}>{room.name}</Text>) : ''}
      <RoomList rooms={rooms} onRoomClick={(room) => console.log(room)} />
    </>
  );
};

export default RoomListPage;
