/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import store from './store';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PostDetailPage from './containers/PostDetailPage';
import PostListPage from './containers/PostListPage';

export type RootStackParamList = {
  PostListPage: undefined;
  PostDetailPage: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="PostListPage" component={PostListPage} />
            <RootStack.Screen
              name="PostDetailPage"
              component={PostDetailPage}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
