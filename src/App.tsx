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

import {RootNavigation} from './navigation/RootNavigation';
import {StatusBar} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#373F51" />

      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </>
  );
};

export default App;
