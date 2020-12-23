import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {ProfileInterface} from '../../types';
import Hairline from '../Header/Hairline';
import TextElement from '../utils/TextElement';

export interface ProfileListItemProp {
  profile: ProfileInterface;
  onClick?: (profileId: number) => void;
}

const ProfileListItem: React.FC<ProfileListItemProp> = ({
  profile,
  onClick,
}: ProfileListItemProp) => {
  return (
    <TouchableHighlight
      activeOpacity={0.85}
      underlayColor="#EAEAEA"
      onPress={() => onClick && onClick(profile.id)}>
      <View style={styles.item}>
        <TextElement
          style={styles.contentPadding}
          text={profile.username}
          size={2}
        />
        {/*<TextElement style={styles.contentPadding} text={'bam bam'} size={3} />*/}
        <Hairline />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingTop: 12,
    paddingLeft: 25,
  },
  contentPadding: {
    paddingVertical: 7, // if subtitle is used, then move this to subtitle
  },
});

export default ProfileListItem;
