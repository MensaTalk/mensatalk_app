import React from 'react';
import {Button, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../App';

type Props = StackScreenProps<RootStackParamList, 'PostListPage'>;

const PostDetailPage: React.FC<Props> = ({route, navigation}: Props) => {
  return (
    <>
      <Text>{route.name}</Text>
      <Button
        title="Go to PostListPage"
        onPress={() => navigation.navigate('PostListPage')}
      />
    </>
  );
};

export default PostDetailPage;
