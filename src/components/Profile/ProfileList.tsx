import React from 'react';
import {ProfileInterface} from '../../types';
import {Text} from "react-native";

export interface ProfileListProps {
  profiles: ProfileInterface[];
  onClick?: (profile: ProfileInterface) => void;
}

const ProfileList: React.FC<ProfileListProps> = ({
  profiles,
}: ProfileListProps) => {
  return <><Text>
    ProfileList with {profiles.length}
  </Text></>;
};

export default ProfileList;
