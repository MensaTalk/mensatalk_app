import React from 'react';

import {MessageInterface, RoomInterface} from '../types';

import MessageListItem from './MessageListItem';
import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import RoomListItem from './RoomListItem';

export interface MessageListProps {
  messages: MessageInterface[];
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
}: MessageListProps) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList<MessageInterface>
          data={messages}
          renderItem={({item}) => (
            <>
              <MessageListItem message={item} myMessage={true} />
              <MessageListItem message={item} myMessage={false} />
            </>
          )}
          keyExtractor={(item) => Number(item.id).toString()}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MessageList;
