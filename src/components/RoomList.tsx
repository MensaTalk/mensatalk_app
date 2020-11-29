import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import {RoomInterface} from '../types';
import RoomListItem from './RoomListItem';

export interface RoomListProps {
  rooms: RoomInterface[];
  onRoomClick?: (room: RoomInterface) => void;
}

const RoomList: React.FC<RoomListProps> = ({
  rooms,
  onRoomClick,
}: RoomListProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList<RoomInterface>
        data={rooms}
        renderItem={({item}) => (
          <RoomListItem room={item} onClick={onRoomClick} />
        )}
        keyExtractor={(item) => Number(item.id).toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // @ts-ignore
    padding: StatusBar.currentHeight / 5 || 0,
  },
});

export default RoomList;
