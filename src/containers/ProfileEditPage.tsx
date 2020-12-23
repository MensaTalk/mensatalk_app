import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';
import ProfileEdit from '../components/Profile/ProfileEdit';

type Props = StackScreenProps<RootStackParamList, 'ProfileEditPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfileEditPage: React.FC<Props> = ({route, navigation}: Props) => {
  return (
    <>
      <ProfileEdit
        profile={{
          id: 1,
          username: 'dummyUsername',
          age: 18,
          interests: 'dummyInterests',
          status: 'dummyStatus',
        }}
      />
    </>
  );
};

export default ProfileEditPage;
