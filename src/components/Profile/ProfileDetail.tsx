import React from 'react';
import {ProfileInterface} from '../../types';

export interface ProfileDetailProps {
  profile: ProfileInterface;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({
  profile,
}: ProfileDetailProps) => {
  return <>ProfileDetail with {profile.name}</>;
};

export default ProfileDetail;
