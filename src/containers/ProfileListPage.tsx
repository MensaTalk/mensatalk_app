import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';
import ProfileList from '../components/Profile/ProfileList';

type Props = StackScreenProps<RootStackParamList, 'ProfileListPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfileListPage: React.FC<Props> = ({route, navigation}: Props) => {
  return (
    <>
      <ProfileList profiles={[]} />
    </>
  );
};

export default ProfileListPage;
