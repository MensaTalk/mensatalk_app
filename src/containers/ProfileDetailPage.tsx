import React from 'react';
import {useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';

import {selectSelectedProfile} from '../selectors/profiles';

import {RootStackParamList} from '../navigation/RootNavigation';
import ProfileDetail from '../components/Profile/ProfileDetail';

type Props = StackScreenProps<RootStackParamList, 'ProfileDetailPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfileDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  const selectedProfile = useSelector(selectSelectedProfile);
  return <>{selectedProfile && <ProfileDetail profile={selectedProfile} />}</>;
};

export default ProfileDetailPage;
