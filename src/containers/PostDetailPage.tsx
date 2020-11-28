import React, {useState, useEffect} from 'react';
import {Button, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';

type Props = StackScreenProps<RootStackParamList, 'PostListPage'>;

const ws = new WebSocket('ws://192.168.2.113:3030');

const PostDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  const [messages, setMessages] = useState<String[]>([]);

  useEffect(() => {
    ws.onopen = () => {
      console.log('Websocket opened.');
    };
  }, []);

  ws.onmessage = (e) => {
    console.log(`Received: ${e.data}`);
    setMessages([...messages, e.data]);
  };

  ws.onerror = (e) => {
    console.log(`Error: ${e.message}`);
  };

  ws.onclose = (e) => {
    console.log(e.code, e.reason);
  };

  return (
    <>
      <Text>{route.name}</Text>
      <Button
        title="Go to PostListPage"
        onPress={() => navigation.navigate('PostListPage')}
      />
      <Button title="send" onPress={() => ws.send('helo')} />
      {messages.map((message, index) => (
        <Text key={index}>Message: {message}</Text>
      ))}
    </>
  );
};

export default PostDetailPage;
