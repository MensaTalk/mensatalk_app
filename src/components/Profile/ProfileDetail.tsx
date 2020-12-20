import React from 'react';
import {ProfileInterface} from '../../types';
import {Text} from 'react-native';

export interface ProfileDetailProps {
  profile: ProfileInterface;
  owner?: boolean;
  onSave?: (profile: ProfileInterface) => void;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({
  profile,
}: ProfileDetailProps) => {
  return (
    <>
      <Text>ProfileDetail with {profile.username}</Text>
    </>
  );
};

export default ProfileDetail;
