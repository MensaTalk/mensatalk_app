import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';
import ProfileList from '../components/Profile/ProfileList';

type Props = StackScreenProps<RootStackParamList, 'ProfileListPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfileListPage: React.FC<Props> = ({route, navigation}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnClick = (profileId: number) => {
    navigation.navigate('ProfileDetailPage');
  };

  return (
    <>
      <ProfileList profiles={[]} onClick={handleOnClick} />
    </>
  );
};

export default ProfileListPage;
