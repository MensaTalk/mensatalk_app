import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import RoomDetailPage from '../containers/RoomDetailPage';
import RoomListPage from '../containers/RoomListPage';

export type RootStackParamList = {
  RoomListPage: undefined;
  RoomDetailPage: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

export interface RootNavigationProps {}

export const RootNavigation: React.FC<RootNavigationProps> = ({}: RootNavigationProps) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="RoomListPage" component={RoomListPage} />
        <RootStack.Screen name="RoomDetailPage" component={RoomDetailPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
