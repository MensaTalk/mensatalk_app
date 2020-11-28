import React from 'react';
import {Text} from 'react-native';
import {RoomInterface} from '../types';

export interface RoomListProps {
  rooms: RoomInterface[];
  onRoomClick?: (room: RoomInterface) => void;
}

const RoomList: React.FC<RoomListProps> = ({rooms}: RoomListProps) => {
  return (
    <>
      {rooms.map((room) => (
        <Text key={room.id}>{room.name}</Text>
      ))}
    </>
  );
};

export default RoomList;
