import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {RoomInterface} from '../../types';
import Hairline from '../Header/Hairline';
import TextElement from '../utils/TextElement';

export interface RoomListItemProp {
  room: RoomInterface;
  onClick?: (room: RoomInterface) => void;
}

const RoomListItem: React.FC<RoomListItemProp> = ({
  room,
  onClick,
}: RoomListItemProp) => {
  return (
    <TouchableHighlight
      activeOpacity={0.85}
      underlayColor="#EAEAEA"
      onPress={() => (onClick ? onClick(room) : undefined)}>
      <View style={styles.item}>
        <TextElement style={styles.contentPadding} text={room.name} size={2} />
        {/*<TextElement style={styles.contentPadding} text={'bam bam'} size={3} />*/}
        <Hairline />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingTop: 12,
    paddingLeft: 20,
  },
  contentPadding: {
    paddingVertical: 7, // if subtitle is used, then move this to subtitle
  },
});

export default RoomListItem;
