import React from 'react';
import {ProfileInterface} from '../../types';

export interface ProfileListProps {
  profiles: ProfileInterface[];
  onClick?: (profile: ProfileInterface) => void;
}

const ProfileList: React.FC<ProfileListProps> = ({
  profiles,
}: ProfileListProps) => {
  return <>ProfileList with {profiles.length}</>;
};

export default ProfileList;
