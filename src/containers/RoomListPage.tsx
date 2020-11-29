import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';
import {getAllRooms} from '../selectors/rooms';
import {getRoomsStart} from '../slices/rooms';
import RoomList from '../components/RoomList';

type Props = StackScreenProps<RootStackParamList, 'RoomListPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RoomListPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();

  const {rooms} = useSelector(getAllRooms);

  useEffect(() => {
    dispatch(getRoomsStart());
  }, [dispatch]);

  return (
    <>
      <Button
        title="Go to RoomDetailPage"
        onPress={() => navigation.navigate('RoomDetailPage')}
      />
      <RoomList rooms={rooms} onRoomClick={(room) => console.log(room)} />
    </>
  );
};

export default RoomListPage;
