import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import ProfileDetailPage from '../containers/ProfileDetailPage';
import ProfileEditPage from '../containers/ProfileEditPage';
import ProfileListPage from '../containers/ProfileListPage';
import RoomDetailPage from '../containers/RoomDetailPage';
import RoomListPage from '../containers/RoomListPage';
import SignUpPage from '../containers/SignUpPage';
import SignInPage from '../containers/SignInPage';
import StartPage from '../containers/StartPage';

export type RootStackParamList = {
  ProfileDetailPage: undefined;
  ProfileEditPage: undefined;
  ProfileListPage: undefined;
  RoomDetailPage: undefined;
  RoomListPage: undefined;
  SignInPage: undefined;
  SignUpPage: undefined;
  StartPage: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

export interface RootNavigationProps {}

export const RootNavigation: React.FC<RootNavigationProps> = ({}: RootNavigationProps) => {
  const navTheme = DefaultTheme;
  navTheme.colors.background = '#FAFCFC';

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'StartPage'}
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen
          name="ProfileDetailPage"
          component={ProfileDetailPage}
        />
        <RootStack.Screen name="ProfileEditPage" component={ProfileEditPage} />
        <RootStack.Screen name="ProfileListPage" component={ProfileListPage} />
        <RootStack.Screen name="StartPage" component={StartPage} />
        <RootStack.Screen name="SignInPage" component={SignInPage} />
        <RootStack.Screen name="SignUpPage" component={SignUpPage} />
        <RootStack.Screen name="RoomListPage" component={RoomListPage} />
        <RootStack.Screen name="RoomDetailPage" component={RoomDetailPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
