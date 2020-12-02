import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {MessageInterface} from '../../types';
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
              <MessageListItem message={item} owner={true} />
            </>
          )}
          keyExtractor={(_item, index) => index.toString()}
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
