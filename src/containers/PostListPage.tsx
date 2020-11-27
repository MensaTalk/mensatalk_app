import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text} from 'react-native';

import {getAllPosts} from '../selectors/posts';
import {getPostsStart} from '../slices/posts';

const PostListPage: React.FC = () => {
  const dispatch = useDispatch();

  const {posts} = useSelector(getAllPosts);

  useEffect(() => {
    dispatch(getPostsStart());
  }, [dispatch]);

  return <>{posts ? posts.map((post) => <Text>{post.title}</Text>) : ''}</>;
};

export default PostListPage;
