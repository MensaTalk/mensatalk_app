import React from 'react';
import {ProfileInterface} from '../../types';

export interface ProfileListProps {
  profiles: ProfileInterface[];
}

const ProfileList: React.FC<ProfileListProps> = ({
  profiles,
}: ProfileListProps) => {
  return <>ProfileList with {profiles.length}</>;
};

export default ProfileList;
