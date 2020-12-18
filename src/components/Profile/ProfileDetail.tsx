import React from 'react';
import {ProfileInterface} from '../../types';

export interface ProfileDetailProps {
  profile: ProfileInterface;
  owner?: boolean;
  onSave?: (profile: ProfileInterface) => void;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({
  profile,
}: ProfileDetailProps) => {
  return <>ProfileDetail with {profile.name}</>;
};

export default ProfileDetail;
