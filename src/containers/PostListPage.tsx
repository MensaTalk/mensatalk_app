import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';
import {getAllPosts} from '../selectors/posts';
import {getPostsStart} from '../slices/posts';

type Props = StackScreenProps<RootStackParamList, 'PostListPage'>;

const PostListPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();

  const {posts} = useSelector(getAllPosts);

  useEffect(() => {
    dispatch(getPostsStart());
  }, [dispatch]);

  return (
    <>
      <Button
        title="Go to PostDetailPage"
        onPress={() => navigation.navigate('PostDetailPage')}
      />
      <Text>{route.name}</Text>
      {posts
        ? posts.map((post) => <Text key={post.id}>{post.title}</Text>)
        : ''}
    </>
  );
};

export default PostListPage;
