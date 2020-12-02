import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import RoomDetailPage from '../containers/RoomDetailPage';
import RoomListPage from '../containers/RoomListPage';
import SignUpPage from '../containers/SignUpPage';
import SignInPage from '../containers/SignInPage';

export type RootStackParamList = {
  SignInPage: undefined;
  SignUpPage: undefined;
  RoomListPage: undefined;
  RoomDetailPage: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

export interface RootNavigationProps {}

export const RootNavigation: React.FC<RootNavigationProps> = ({}: RootNavigationProps) => {
  const navTheme = DefaultTheme;
  navTheme.colors.background = '#F5F5F5';

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="SignInPage" component={SignInPage} />
        <RootStack.Screen name="SignUpPage" component={SignUpPage} />
        <RootStack.Screen name="RoomListPage" component={RoomListPage} />
        <RootStack.Screen name="RoomDetailPage" component={RoomDetailPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
