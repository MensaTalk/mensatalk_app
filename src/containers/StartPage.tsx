import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';
import StartForm from '../components/Form/StartForm';

type Props = StackScreenProps<RootStackParamList, 'StartPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StartPage: React.FC<Props> = ({route, navigation}: Props) => {
  const onRedirectSignIn = () => {
    navigation.navigate('SignInPage');
  };

  const onRedirectSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  return (
    <>
      <StartForm onSignUp={onRedirectSignUp} onSignIn={onRedirectSignIn} />
    </>
  );
};

export default StartPage;
