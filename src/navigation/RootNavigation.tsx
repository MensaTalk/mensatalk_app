import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import PostDetailPage from '../containers/PostDetailPage';
import PostListPage from '../containers/PostListPage';

export type RootStackParamList = {
  PostListPage: undefined;
  PostDetailPage: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

export interface RootNavigationProps {}

export const RootNavigation: React.FC<RootNavigationProps> = ({}: RootNavigationProps) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="PostListPage" component={PostListPage} />
        <RootStack.Screen name="PostDetailPage" component={PostDetailPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
