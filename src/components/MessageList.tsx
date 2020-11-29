import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';

import {MessageInterface} from '../types';
import MessageListItem from './MessageListItem';

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
              <MessageListItem message={item} myMessage={true} />
              <MessageListItem message={item} myMessage={false} />
              <MessageListItem message={item} myMessage={true} />
              <MessageListItem message={item} myMessage={false} />
            </>
          )}
          keyExtractor={(item) => Number(item.id).toString()}
          inverted={true}
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
