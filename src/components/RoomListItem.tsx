import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import {RoomInterface} from '../types';

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
      onPress={() => onClick ? onClick(room) : undefined}>
      <View style={styles.item}>
        <Text style={styles.title}>{room.name}</Text>
        {/*<Text style={styles.subtitle}>Themen: {room.topics}</Text>*/}
        <View style={styles.hairline} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  hairline: {
    borderBottomColor: '#373F51',
    borderBottomWidth: 1.5,
    paddingVertical: 7,
  },
  item: {
    paddingTop: 12,
    paddingLeft: 20,
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 26,
    color: '#373F51',
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    color: '#657291',
  },
});

export default RoomListItem;
