import React from 'react';
import {ProfileInterface} from '../../types';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import TextElement from '../utils/TextElement';
import Hairline from '../Header/Hairline';

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
      <Image
        resizeMode="cover"
        style={styles.userImage}
        source={require('./../../assets/images/gradient.png')}
      />
      <View style={styles.profileContainer}>
        <View style={styles.profileHeaderContainer}>
          <TextElement style={styles.text} text={profile.username} size={1} />
          <TextElement
            style={styles.textNormal}
            text={' ' + profile.age}
            size={1}
          />
        </View>
        {profile.interests && (
          <View style={styles.tagContainer}>
            <TextElement
              style={styles.textTag}
              text={profile.interests}
              size={3}
            />
          </View>
        )}
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{marginTop: 15}}>
          <Hairline style={styles.hairline} />

          <TextElement
            style={styles.textNormal}
            text={profile.status}
            size={3}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userImage: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  profileContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  profileHeaderContainer: {
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    marginLeft: 5,
  },
  textNormal: {
    fontWeight: 'normal',
    color: 'black',
  },
  tagContainer: {
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textTag: {
    paddingHorizontal: 8,
    paddingVertical: 5,

    marginRight: 6,
    marginBottom: 6,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#5CBACB',
    color: '#5CBACB',

    textAlignVertical: 'center',
    textAlign: 'center',
  },
  hairline: {
    marginBottom: 15,
  },
});

export default ProfileDetail;
