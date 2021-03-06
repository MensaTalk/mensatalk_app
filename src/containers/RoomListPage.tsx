import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';
import {getAllRooms} from '../selectors/rooms';
import {getUser} from '../selectors/user';
import {getRoomsStart, selectRoom} from '../slices/rooms';
import RoomList from '../components/Room/RoomList';
import {RoomInterface} from '../types';
import Loading from '../components/utils/Loading';

type Props = StackScreenProps<RootStackParamList, 'RoomListPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RoomListPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();

  const {rooms} = useSelector(getAllRooms);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {token, isLoading, error} = useSelector(getUser);

  useEffect(() => {
    if (token) {
      dispatch(getRoomsStart(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const onRoomClick = (room: RoomInterface) => {
    dispatch(selectRoom(room.id));
    navigation.navigate('RoomDetailPage');
  };

  const onProfileEditClick = () => {
    navigation.navigate('ProfileEditPage');
  };

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      }),
    [navigation],
  );
  return (
    <>
      <Loading isVisible={isLoading} />
      <RoomList
        rooms={rooms}
        onRoomClick={onRoomClick}
        title={'Tables'}
        profileImageUrl={undefined}
        showProfileImage={true}
        onProfilePress={onProfileEditClick}
      />
    </>
  );
};

export default RoomListPage;
