import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import {RoomInterface} from '../../types';
import RoomListItem from './RoomListItem';
import TextHeader from '../Header/Header';

export interface RoomListProps {
  rooms: RoomInterface[];
  title: string;
  onRoomClick?: (room: RoomInterface) => void;
}

const RoomList: React.FC<RoomListProps> = ({
  rooms,
  onRoomClick,
  title,
}: RoomListProps) => {
  return (
    <>
      <View style={styles.container}>
        <TextHeader title={title} />
        <SafeAreaView style={styles.container}>
          <FlatList<RoomInterface>
            data={rooms}
            renderItem={({item}) => (
              <RoomListItem room={item} onClick={onRoomClick} />
            )}
            keyExtractor={(item) => Number(item.id).toString()}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // @ts-ignore
  },
});

export default RoomList;
