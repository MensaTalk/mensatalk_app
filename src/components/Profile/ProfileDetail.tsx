import React from 'react';
import {ProfileInterface} from '../../types';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import TextElement from '../utils/TextElement';

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
      <View style={styles.container}>
        <Image
          style={styles.userImage}
          source={require('./../../assets/images/gradient.png')}
        />
        <TextElement text={profile.username} size={2} />

        <Text>ProfileDetail with {profile.username}</Text>
        <Text>ProfileDetail with {profile.status}</Text>
        <Text>ProfileDetail with {profile.age}</Text>
        <Text>ProfileDetail with {profile.interests}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userImage: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  container: {
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default ProfileDetail;
