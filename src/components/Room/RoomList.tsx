import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import {RoomInterface} from '../../types';
import RoomListItem from './RoomListItem';
import TextHeader from '../Header/Header';
import Hairline from '../Header/Hairline';

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
      <TextHeader title={title} />
      <Hairline />
      <SafeAreaView style={styles.container}>
        <FlatList<RoomInterface>
          data={rooms}
          renderItem={({item, index}) => (
            <RoomListItem key={index} room={item} onClick={onRoomClick} />
          )}
          keyExtractor={(_item, index) => index.toString()}
        />
      </SafeAreaView>
    </>
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
