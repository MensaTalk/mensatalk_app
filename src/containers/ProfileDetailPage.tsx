import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';
import ProfileDetail from '../components/Profile/ProfileDetail';

type Props = StackScreenProps<RootStackParamList, 'ProfileDetailPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfileDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  return (
    <>
      <ProfileDetail
        profile={{id: 1, name: 'name', age: 99, interests: '', status: ''}}
      />
    </>
  );
};

export default ProfileDetailPage;
