import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';

import {getUserIds, getSelectedRoom} from '../selectors/rooms';

import {RootStackParamList} from '../navigation/RootNavigation';
import ProfileList from '../components/Profile/ProfileList';
import {getUser} from '../selectors/user';
import {selectRoomProfiles} from '../selectors/profiles';
import {getProfileStart} from '../slices/profiles';

type Props = StackScreenProps<RootStackParamList, 'ProfileListPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfileListPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const selectedRoom = useSelector(getSelectedRoom);
  const userIds = useSelector(getUserIds);
  const roomProfiles = useSelector(selectRoomProfiles);

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
  }, [dispatch, selectedRoom]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnClick = (profileId: number) => {
    navigation.navigate('ProfileDetailPage');
  };

  return (
    <>
      <ProfileList profiles={roomProfiles} onClick={handleOnClick} />
    </>
  );
};

export default ProfileListPage;
