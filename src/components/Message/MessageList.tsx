import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {MessageInterface} from '../../types';
import MessageListItem from './MessageListItem';
import {useSelector} from 'react-redux';
import {getUser} from '../../selectors/user';

export interface MessageListProps {
  messages: MessageInterface[];
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
}: MessageListProps) => {
  const selectedUser = useSelector(getUser);

  let flatList: any = React.createRef();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList<MessageInterface>
          ref={(ref) => (flatList = ref)}
          onContentSizeChange={() => flatList.scrollToEnd({animated: true})}
          onLayout={() => flatList.scrollToEnd({animated: true})}
          data={messages}
          renderItem={({item}) => (
            <>
              <MessageListItem
                message={item}
                owner={item.username === selectedUser.username}
              />
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
    padding: 15,
  },
});

export default MessageList;
