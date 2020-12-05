import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {SignInUserInterface} from '../types';
import {RootStackParamList} from '../navigation/RootNavigation';
import SignInForm from '../components/Form/SignInForm';

type Props = StackScreenProps<RootStackParamList, 'SignInPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignInPage: React.FC<Props> = ({route, navigation}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSignIn = (signInUser: SignInUserInterface) => {
    navigation.navigate('RoomListPage');
  };

  return (
    <>
      <SignInForm onSignIn={onSignIn} />
    </>
  );
};

export default SignInPage;
