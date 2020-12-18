import React from 'react';
import {ProfileInterface} from '../../types';
import {Button, Text} from 'react-native';

export interface ProfileListProps {
  profiles: ProfileInterface[];
  onClick?: (profileId: number) => void;
}

const ProfileList: React.FC<ProfileListProps> = ({
  profiles,
  onClick,
}: ProfileListProps) => {
  return (
    <>
      <Button
        title={'To profile'}
        onPress={() => (onClick ? onClick(1) : undefined)}
      />
      <Text>ProfileList with {profiles.length}</Text>
    </>
  );
};

export default ProfileList;
